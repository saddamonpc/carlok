import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './Map.module.css';
import { categories } from '../lib/data/categories';
import { locations } from '../lib/data/locations.db';

export default function Map() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const buildings = [
    { id: 'gedung-a', name: 'Gedung A' },
    { id: 'gedung-b', name: 'Gedung B' },
    { id: 'gedung-c', name: 'Gedung C' },
    { id: 'gedung-baru', name: 'Gedung Baru' },
  ];
  // Filter locations by selected category
  const filteredLocations = selectedCategory 
    ? locations.filter(location => location.category === selectedCategory)
    : locations.filter(location => location.category === 'buildings');

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
          <div className={styles.categoriesContainer}>
          {sortedCategories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className={`${styles.categoryButton} ${selectedCategory === category.id ? styles.categoryButtonActive : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setSelectedCategory(category.id);
              }}
            >
              <span className={styles.categoryIcon}>{category.icon}</span>
              <span>{category.name}</span>
            </Link>
          ))}
        </div>
        
        <div className={styles.categoryHeader}>
          <h2 className={styles.categoryTitle}>
            {selectedCategory ? categories.find(c => c.id === selectedCategory)?.name : 'Buildings'}
          </h2>
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
                  <h3 className={styles.locationListTitle}>{location.name}</h3>
                  {location.building && (
                    <span className={styles.locationBuildingInfo}>
                      {locations.find(l => l.id === location.building)?.name}
                      {location.floor && ` - ${location.floor}`}
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