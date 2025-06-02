import { useState, useMemo } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Fuse from 'fuse.js';
import styles from './Map.module.css';
import { categories } from '../lib/data/categories';
import { locations } from '../lib/data/locations.db';

export default function Map() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to normalize room names for better search matching
  const normalizeRoomName = (text) => {
    return text
      .toLowerCase()
      .replace(/\s+/g, '') // Remove all spaces
      .replace(/\./g, '') // Remove all dots
      .replace(/^r\b/, 'ruang') // Replace "r" at start with "ruang"
      .replace(/^rm\b/, 'ruang') // Replace "rm" at start with "ruang"
      .replace(/^rg\b/, 'ruang') // Replace "rg" at start with "ruang"
      .replace(/^lab\b/, 'laboratorium') // Replace "lab" with "laboratorium"
      .replace(/ruang/g, '') // Remove "ruang" for comparison
      .replace(/laboratorium/g, '') // Remove "laboratorium" for comparison
      .trim();
  };

  // Enhanced location data with normalized search fields
  const enhancedLocations = useMemo(() => {
    return locations.map(location => ({
      ...location,
      normalizedName: normalizeRoomName(location.name),
      normalizedId: normalizeRoomName(location.id),
      searchableText: `${location.name} ${location.id} ${location.description}`.toLowerCase(),
      roomNumber: location.id.match(/[A-Z]?\d+/g)?.join('') || '', // Extract room numbers like A401, 401
      variations: [
        location.name,
        location.id,
        `Ruang ${location.id}`,
        `R. ${location.id}`,
        `R.${location.id}`,
        `Rm. ${location.id}`,
        `Rm ${location.id}`,
        `Rg. ${location.id}`,
        location.id.replace(/(\w)(\d)/g, '$1.$2'), // Add dots between letters and numbers
        location.id.replace(/(\w)(\d)(\d)(\d)/g, '$1.$2.$3.$4'), // Format like A.4.0.1
        location.id.replace(/(\w)(\d)(\d)(\d)/g, '$1 $2$3$4'), // Format like A 401
        location.id.replace(/(\w)(\d)(\d)(\d)/g, '$1-$2$3$4'), // Format like A-401
        // Handle lab variations
        location.name.replace(/laboratorium/gi, 'lab'),
        location.name.replace(/lab/gi, 'laboratorium'),
      ].join(' ').toLowerCase()
    }));
  }, []);

  // Configure Fuse.js for fuzzy search with enhanced keys
  const fuseOptions = {
    keys: [
      { name: 'name', weight: 0.4 },
      { name: 'normalizedName', weight: 0.3 },
      { name: 'id', weight: 0.2 },
      { name: 'normalizedId', weight: 0.2 },
      { name: 'roomNumber', weight: 0.3 },
      { name: 'variations', weight: 0.2 },
      { name: 'searchableText', weight: 0.1 },
      { name: 'description', weight: 0.1 }
    ],
    threshold: 0.4, // Slightly more lenient for variations
    includeScore: true,
    includeMatches: true,
    ignoreLocation: true,
    findAllMatches: true
  };

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
    : [];  // Filter locations based on selected filters and search query
  const filteredLocations = (() => {
    let filtered = locations;

    // Apply search filter first if there's a search query
    if (searchQuery.trim()) {
      // Normalize the search query for better matching
      const normalizedQuery = normalizeRoomName(searchQuery.trim());
      
      // Search with both original and normalized query
      const searchResults = fuse.search(searchQuery.trim());
      const normalizedResults = normalizedQuery !== searchQuery.trim().toLowerCase() 
        ? fuse.search(normalizedQuery) 
        : [];
      
      // Combine results and remove duplicates
      const combinedResults = [...searchResults, ...normalizedResults];
      const uniqueResults = combinedResults.filter((result, index, self) => 
        index === self.findIndex(r => r.item.id === result.item.id)
      );
      
      // Sort by score (lower is better in Fuse.js)
      const sortedResults = uniqueResults.sort((a, b) => (a.score || 0) - (b.score || 0));
      
      filtered = sortedResults.map(result => result.item);
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(location => location.category === selectedCategory);
    }
    // If no category is selected, show all locations (not just buildings)

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

  return (
    <>
      <Head>
        <title>Fasilkom UI Campus Map</title>
        <meta name="description" content="Interactive campus map" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
        <div className={styles.mapContainer}>
        <h1 className={styles.title}>Fasilkom UI Campus Map</h1>
        <p className={styles.subtitle}>Explore rooms / locations by category</p>

        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <div className={styles.searchInputWrapper}>
            <input
              type="text"
              placeholder="Search locations (e.g., 'A401', 'Ruang A401', 'R. A.4.01', 'Lab Komputer')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className={styles.clearSearchButton}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div><div className={styles.categoriesContainer}>
          {sortedCategories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className={`${styles.categoryButton} ${selectedCategory === category.id ? styles.categoryButtonActive : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setSelectedCategory(category.id);
                // Reset building and floor when category changes
                setSelectedBuilding(null);
                setSelectedFloor(null);
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
            <label htmlFor="building-select" className={styles.filterLabel}>Filter by Building:</label>
            <select
              id="building-select"
              value={selectedBuilding || ''}
              onChange={(e) => {
                setSelectedBuilding(e.target.value || null);
                setSelectedFloor(null); // Reset floor when building changes
              }}
              className={styles.filterSelect}
            >
              <option value="">All Buildings</option>
              {buildings.map((building) => (
                <option key={building.id} value={building.id}>
                  {building.name}
                </option>
              ))}
            </select>
          </div>

          {/* Floor Filter - only show if a building is selected */}
          {selectedBuilding && availableFloors.length > 0 && (
            <div className={styles.filterGroup}>
              <label htmlFor="floor-select" className={styles.filterLabel}>Filter by Floor:</label>
              <select
                id="floor-select"
                value={selectedFloor || ''}
                onChange={(e) => setSelectedFloor(e.target.value || null)}
                className={styles.filterSelect}
              >                <option value="">All Floors</option>
                {availableFloors.map((floor) => (
                  <option key={floor} value={floor}>
                    {floor.split(' - ').pop()}
                  </option>
                ))}
              </select>
            </div>
          )}          {/* Clear Filters Button */}
          {(selectedCategory || selectedBuilding || selectedFloor || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory(null);
                setSelectedBuilding(null);
                setSelectedFloor(null);
                setSearchQuery('');
              }}
              className={styles.clearFiltersButton}
            >
              Clear All Filters
            </button>
          )}
        </div>
          <div className={styles.categoryHeader}>          <h2 className={styles.categoryTitle}>
            {(() => {
              const parts = [];
              
              if (searchQuery.trim()) {
                parts.push(`Search results for "${searchQuery}"`);
              } else if (selectedCategory) {
                parts.push(categories.find(c => c.id === selectedCategory)?.name);
              } else {
                parts.push('All Locations');
              }
              
              if (selectedBuilding) {
                const buildingName = buildings.find(b => b.id === selectedBuilding)?.name;
                if (!searchQuery.trim()) {
                  parts.push(`in ${buildingName}`);
                } else {
                  parts.push(`(${buildingName})`);
                }
              }
              
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
          <div className={styles.resultsCount}>
            {filteredLocations.length} location{filteredLocations.length !== 1 ? 's' : ''} found
          </div>
          {selectedCategory && (
            <Link href={`/categories/${selectedCategory}`} className={styles.viewAllLink}>
              View all {categories.find(c => c.id === selectedCategory)?.name} →
            </Link>
          )}
        </div>
          <div className={styles.locationsList}>
          {filteredLocations.map((location) => (
            <Link 
              href={`/locations/${location.id}`}
              className={styles.locationListItem} 
              key={location.id}
            >
              <div className={styles.locationListContent}>
                <div className={styles.locationListHeader}>
                  <h3 className={styles.locationListTitle}>{location.name}</h3>                  {location.building && (
                    <span className={styles.locationBuildingInfo}>
                      {locations.find(l => l.id === location.building)?.name}
                      {location.floor && ` - ${location.floor.split(' - ').pop()}`}
                    </span>
                  )}
                </div>
                <p className={styles.locationListDescription}>
                  {location.description.substring(0, 150)}...
                </p>
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