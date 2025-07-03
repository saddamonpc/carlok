import { useState, useMemo } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Fuse from 'fuse.js';
import styles from './Map.module.css';
import SearchBar from './SearchBar';
import { categories } from '../lib/data/categories';
import { locations } from '../lib/data/locations.db';

export default function Map() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Function to normalize room names for better search matching
  const normalizeRoomName = (text) => {
    return text.toLowerCase().trim();
  };
  
  // Function to clean search query by removing honorifics and room prefixes
  const cleanSearchQuery = (query) => {
    const honorifics = [
      'pak', 'bpk', 'bu', 'bapak', 'ibu',
      'prof.', 'prof', 'professor',
      'dr.', 'dr', 'doktor',
      'drs.', 'drs',
      'ir.', 'ir',
      'mr.', 'mr', 'mrs.', 'mrs', 'ms.', 'ms'
    ];
    
    const roomPrefixes = [
      'ruang', 'ruangan', 'r.', 'r', 'kantor'
    ];
    
    let cleanQuery = query.toLowerCase().trim();
    
    // Remove honorifics from anywhere in the query
    for (const honorific of honorifics) {
      const pattern = new RegExp(`\\b${honorific}\\s+`, 'gi');
      cleanQuery = cleanQuery.replace(pattern, '');
    }
    
    // Remove room prefixes from anywhere in the query
    for (const prefix of roomPrefixes) {
      const pattern = new RegExp(`\\b${prefix}\\s+`, 'gi');
      cleanQuery = cleanQuery.replace(pattern, '');
    }
    
    // Remove periods from room numbers (example: "A.1.01" becomes "A101")
    cleanQuery = cleanQuery.replace(/([a-zA-Z])\.([0-9])/g, '$1$2');
    cleanQuery = cleanQuery.replace(/([0-9])\.([0-9])/g, '$1$2');
    
    // Clean up multiple spaces and trim
    cleanQuery = cleanQuery.replace(/\s+/g, ' ').trim();
    
    return cleanQuery;
  };
  
  // Enhanced location data with normalized search fields
  const enhancedLocations = useMemo(() => {
    return locations.map(location => ({
      ...location,
      normalizedName: normalizeRoomName(location.name),
      normalizedId: normalizeRoomName(location.id),
      searchableText: `${location.name} ${location.id} ${location.description}`.toLowerCase()
    }));
  }, []);  
  
  // Fuse.js for fuzzy search
  // See ../docs/architecture.md for more details on implementation and reasoning
  // Can also check Fuse.js documentation: https://fusejs.io/
  const fuseOptions = {
    keys: [
      'name',
      'id',
      'description'
    ],
    threshold: 0.2, // Based on experimentation, 0.2 should be just right
    includeScore: true,
    includeMatches: true,
    ignoreLocation: true,
    findAllMatches: true
  };

  // Create Fuse instance with enhanced locations
  const fuse = useMemo(() => new Fuse(enhancedLocations, fuseOptions), [enhancedLocations]);
    
  // Get unique buildings from locations that have a building property
  const buildings = [...new Set(locations
    .filter(location => location.building)
    .map(location => location.building))]
    .map(buildingId => {
      const buildingLocation = locations.find(l => l.id === buildingId);
      return { id: buildingId, name: buildingLocation?.name || buildingId };
    })
    .sort((a, b) => {
      // Put 'Gedung Baru' last
      if (a.name === 'Gedung Baru') return 1;
      if (b.name === 'Gedung Baru') return -1;
      // Sort other buildings alphabetically
      return a.name.localeCompare(b.name);
    });
  
  // Get unique floors for the selected building
  const availableFloors = selectedBuilding 
    ? [...new Set(locations
        .filter(location => location.building === selectedBuilding && location.floor)
        .map(location => location.floor))]
        .sort((a, b) => {
          // For Gedung Baru, put "Lantai Dasar" first
          if (selectedBuilding === 'gedung-baru') {
            if (a.includes('Lantai Dasar')) return -1;
            if (b.includes('Lantai Dasar')) return 1;
          }
          // Default alphabetical sort for other cases
          return a.localeCompare(b);
        })
    : [];
  
  // Filter locations based on selected filters and search query
  const filteredLocations = (() => {
    let filtered = locations;    // Apply search filter first if there's a search query
    if (searchQuery.trim()) {
      // Clean search query by removing honorifics and room prefixes
      const cleanQuery = cleanSearchQuery(searchQuery.trim());
      const searchResults = fuse.search(cleanQuery);
      filtered = searchResults.map(result => result.item);
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(location => location.category === selectedCategory);
    }
    // If no category is selected, show all locations

    // Filter by building
    if (selectedBuilding) {
      filtered = filtered.filter(location => location.building === selectedBuilding);
    }

    // Filter by floor
    if (selectedFloor) {
      filtered = filtered.filter(location => location.floor === selectedFloor);
    }

    return filtered;
  })();

  // Sort categories alphabetically by name
  const sortedCategories = [...categories].sort((a, b) => a.name.localeCompare(b.name));

  // Handle search functionality
  const handleSearch = () => {
    // Gently scroll to results section
    const resultsSection = document.querySelector(`.${styles.categoryHeader}`);
    if (resultsSection) {
      resultsSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  return (
    <>
      <Head>
        <title>Fasilkom UI Campus Map</title>
        <meta name="description" content="Interactive campus map" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.mapContainer}>
        <h1 className={styles.title}>Peta Kampus Fasilkom UI</h1>
        <p className={styles.subtitle}>Cari lokasi / ruangan berdasarkan kategori, bangunan, dan lantai.</p>
        
        {/* Search Bar Section with Floating Results Counter */}
        <div className={styles.searchBarSection}>
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onSubmit={handleSearch}
            placeholder="Cari lokasi..."
          />
          {/* Show floating results counter */}
          {searchQuery.trim() && (
            <div className={styles.searchResultsCountFloating}>
              {filteredLocations.length} lokasi ditemukan
            </div>
          )}
        </div>

        {/* Category feature */}
        <div className={styles.categoriesContainer}>
          {sortedCategories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className={`${styles.categoryButton} ${selectedCategory === category.id ? styles.categoryButtonActive : ''}`}
              onClick={(e) => {
                e.preventDefault();
                // Toggle category selection - if already selected, deselect it.
                // Only allow one category to be selected at a time
                if (selectedCategory === category.id) {
                  setSelectedCategory(null);
                } else {
                  setSelectedCategory(category.id);
                }
                // Keep both building and floor filters when category changes
              }}
            >
              <span className={styles.categoryIcon}>{category.icon}</span>
              <span>{category.name}</span>
            </Link>
          ))}
        </div>

        {/* Building and Floor Filters */}
        <div className={styles.filtersContainer}>
          {/* Building Filter */}
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Filter berdasarkan Gedung:</label>
            <div className={styles.buildingButtons}>
              {[
                { id: 'gedung-a', name: 'Gedung A', abbr: 'A' },
                { id: 'gedung-b', name: 'Gedung B', abbr: 'B' },
                { id: 'gedung-c', name: 'Gedung C', abbr: 'C' },
                { id: 'gedung-baru', name: 'Gedung Baru', abbr: 'BARU' }
              ].map((building) => (
                <button
                  key={building.id}
                  onClick={() => {
                    // Toggle building selection
                    // Same behavior as categories - if already selected, deselect it.
                    // Only allow one building to be selected at a time
                    if (selectedBuilding === building.id) {
                      setSelectedBuilding(null);
                    } else {
                      setSelectedBuilding(building.id);
                    }
                    setSelectedFloor(null); // Reset floor when building changes
                  }}
                  className={`${styles.buildingButton} ${selectedBuilding === building.id ? styles.buildingButtonActive : ''}`}
                  title={building.name}
                >
                  {building.abbr}
                </button>
              ))}
            </div>
          </div>
          {/* Floor Filter - only show up if a building is selected */}
          {selectedBuilding && availableFloors.length > 0 && (
            <div className={styles.filterGroup}>
              <label htmlFor="floor-select" className={styles.filterLabel}>Filter berdasarkan Lantai:</label>
              <select
                id="floor-select"
                value={selectedFloor || ''}
                onChange={(e) => setSelectedFloor(e.target.value || null)}
                className={styles.filterSelect}
              >
                <option value="">Semua Lantai</option>
                {availableFloors.map((floor) => (
                  <option key={floor} value={floor}>
                    {floor.split(' - ').pop()}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Clear Category and Filter Button */}
          {(selectedCategory || selectedBuilding || selectedFloor) && (
            <button
              onClick={() => {
                setSelectedCategory(null);
                setSelectedBuilding(null);
                setSelectedFloor(null);
              }}
              className={styles.clearFiltersButton}
            >
              Reset Filter
            </button>
          )}
        </div>

        {/* Display search, category, and filter results */}
        {/* *located below navigation features */}
        <div className={styles.categoryHeader}>
          <h2 className={styles.categoryTitle}>
            {(() => {
              const parts = [];
              
              // Show search display, if none, then just say 'show all.'
              if (searchQuery.trim()) {
                parts.push(`Hasil search untuk "${searchQuery}"`);
              } else if (selectedCategory) {
                parts.push(categories.find(c => c.id === selectedCategory)?.name);
              } else {
                parts.push('Semua lokasi');
              }
              
              // If a filter by building button is selected, show it
              if (selectedBuilding) {
                const buildingName = buildings.find(b => b.id === selectedBuilding)?.name;
                if (!searchQuery.trim()) {
                  parts.push(`di ${buildingName}`);
                } else {
                  parts.push(`(${buildingName})`);
                }
              }
              
              // If a filter by floor button is selected, show it
              if (selectedFloor) {
                // Extract just the floor name (everything after the last " - ")
                const floorName = selectedFloor.split(' - ').pop();
                if (!searchQuery.trim()) {
                  parts.push(`- ${floorName}`);
                } else {
                  parts.push(`(${floorName})`);
                }
              }
              
              return parts.join(' ');
            })()}
          </h2>

          {/* Display results count */}
          <div className={styles.resultsCount}>
            {filteredLocations.length} lokasi ditemukan
          </div>
          {/* Uncomment this for a "View All" link for the selected category */}
          {/* {selectedCategory && (
            <Link href={`/categories/${selectedCategory}`} className={styles.viewAllLink}>
              Lihat semua {categories.find(c => c.id === selectedCategory)?.name} →
            </Link>
          )} */}
        </div>

        {/* Display locations list */}
        <div className={styles.locationsList}>
          {filteredLocations.map((location) => (
            <Link 
              href={`/locations/${location.id}`}
              className={styles.locationListItem} 
              key={location.id}
            >
              <div className={styles.locationListContent}>
                <div className={styles.locationListHeader}>
                  <h3 className={styles.locationListTitle}>
                    {location.name}
                  </h3>
                  {/* Display building and floor info*/}
                  {location.building && (
                    <span className={styles.locationBuildingInfo}>
                      {locations.find(l => l.id === location.building)?.name}
                      {location.floor && ` - ${location.floor.split(' - ').pop()}`}
                    </span>
                  )}
                </div>
                {/* Brief description only until 150 characters */}
                <p className={styles.locationListDescription}>
                  {location.description.substring(0, 150)}...
                </p>
                {/* Display location category */}
                <span className={styles.locationCategory}>
                  {categories.find(c => c.id === location.category)?.icon} {categories.find(c => c.id === location.category)?.name}
                </span>
              </div>
              <span className={styles.viewDetails}>→</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}