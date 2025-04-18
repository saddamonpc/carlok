import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './Map.module.css';

export default function Map() {
  const buildings = [
    { id: 'gedung-a', name: 'Gedung A' },
    { id: 'gedung-b', name: 'Gedung B' },
    { id: 'gedung-c', name: 'Gedung C' },
  ];

  return (
    <>
      <Head>
        <title>Campus Map</title>
        <meta name="description" content="Interactive campus map" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className={styles.mapContainer}>
        <h1 className={styles.title}>Campus Map</h1>
        <p className={styles.subtitle}>Select a building to view its floor plans</p>
        
        <div className={styles.buildingGrid}>
          {buildings.map((building) => (
            <Link 
              href={`/maps/${building.id}`}
              className={styles.buildingCard} 
              key={building.id}
            >
              <h2>{building.name}</h2>
              <p>View floor plans</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}