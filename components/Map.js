import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './Map.module.css';
import { categories } from '../lib/data/categories';
import { locations } from '../lib/data/locations';

export default function Map() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const buildings = [
    { id: 'gedung-a', name: 'Gedung A' },
    { id: 'gedung-b', name: 'Gedung B' },
    { id: 'gedung-c', name: 'Gedung C' },
  ];

  // Filter locations by selected category
  const filteredLocations = selectedCategory 
    ? locations.filter(location => location.category === selectedCategory)
    : locations.filter(location => location.category === 'buildings');

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
          {categories.map((category) => (
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
        
        <div className={styles.buildingGrid}>
          {filteredLocations.map((location) => (
            <Link 
              href={`/locations/${location.id}`}
              className={styles.buildingCard} 
              key={location.id}
            >
              <h2>{location.name}</h2>
              <p className={styles.locationDescription}>{location.description.substring(0, 100)}...</p>
              <p className={styles.viewDetails}>View details →</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}