import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layout';
import Floor from '../../components/Floor';
import styles from '../../components/Map.module.css';
import { locations, defaultLocationImage } from '../../lib/data/locations.db';
import { categories } from '../../lib/data/categories';
import { useState } from 'react';

export default function LocationPage({ location, relatedLocations, images }) {
  const router = useRouter();
  const [selectedFloorIndex, setSelectedFloorIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Get the category information
  const category = categories.find(c => c.category === location.category);
  const categoryName = categories.find(c => c.id === location.category)?.name || 'Location';
  const floorName = location.floors ? location.floors[selectedFloorIndex] : null;
  
  // Determine what to show in the floor plan section
  const showFloorPlan = location.category === 'buildings' || location.building;
  const imagePath = showFloorPlan && floorName 
    ? `/denah2/${location.name}/${floorName}.png` 
    : location.building && location.floor
      ? `/denah2/${locations.find(l => l.id === location.building)?.name}/${location.floor}.png`
      : null;

  return (
    <Layout>
      <Head>
        <title>{`${location.name} - Campus Map`}</title>
        <meta name="description" content={location.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className={styles.mapContainer}>
        <div className={styles.backLink}>
          <Link href="/">
            ← Balik ke Peta Kampus
          </Link>
        </div>

        {/* Location header */}
        <div className={styles.locationHeader}>
          <span className={styles.locationCategory}>
            {categories.find(c => c.id === location.category)?.icon} {categoryName}
          </span>
          <h1 className={styles.title}>{location.name}</h1>
        </div>

        {/* Location details */}
        <div className={styles.locationDetails}>
          <p className={styles.locationDescription}>{location.description}</p>
          
          {/* Location images */}
          {images && images.length > 0 && (
            <div className={styles.locationImagesSection}>
              <h3>Foto-foto Lokasi</h3>
              <div className={styles.locationMainImage}>
                <Image
                  src={images[selectedImageIndex]}
                  alt={`${location.name} image ${selectedImageIndex + 1}`}
                  width={800}
                  height={600}
                  className={styles.mainLocationImage}
                  priority
                />
              </div>
              {images.length > 1 && (
                <div className={styles.locationImageThumbnails}>
                  {images.map((img, index) => (
                    <div
                      key={img}
                      className={`${styles.thumbnailWrapper} ${index === selectedImageIndex ? styles.activeThumbnail : ''}`}
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <Image
                        src={img}
                        alt={`${location.name} thumbnail ${index + 1}`}
                        width={100}
                        height={75}
                        className={styles.locationThumbnail}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          
          {/* Building-specific details */}
          {location.category === 'buildings' && location.floors && location.floors.length > 0 && (
            <div className={styles.locationDetailsSection}>
              <h3>Lantai</h3>
              <div className={styles.floorNav}>
                {location.floors.map((floor, index) => (
                  <button
                    key={floor}
                    onClick={() => setSelectedFloorIndex(index)}
                    className={`${styles.floorNavItem} ${selectedFloorIndex === index ? styles.floorNavItemActive : ''}`}
                  >
                    {floor.split(' - ').pop()}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Room / Location's Location in building (display "Terletak di Gedung X, Lantai Y") */}
          {location.building && (
            <div className={styles.locationDetailsSection}>
              <h3>Lokasi</h3>
              <p>
                Terletak di{' '}
                <Link
                  href={`/locations/${location.building}`} 
                  className={styles.locationLink}>
                  {locations.find(l => l.id === location.building)?.name}
                </Link>
                {location.floor && (
                  <span>
                    , {location.floor.includes(' - ') 
                        ? location.floor.split(' - ').pop() 
                        : location.floor.replace(/^Gedung [A-Z]\s+/, '')
                      }
                  </span>
                )}
              </p>
          </div>
          )}
        </div>
        
        {/* Floor plan or location image */}
        {imagePath && (
          <div className={styles.floorList}>
            <Floor
              floorImage={imagePath}
              floorName={showFloorPlan ? (location.floors ? location.floors[selectedFloorIndex] : location.floor) : location.name}
            />
          </div>
        )}
        
        {/* Related locations */}
        {relatedLocations && relatedLocations.length > 0 && (
          <div className={styles.relatedLocations}>
            <h3>{categoryName} Lainnya</h3>
            <div className={styles.relatedLocationsGrid}>
              {relatedLocations.map(related => (
                <Link
                  key={related.id}
                  href={`/locations/${related.id}`}
                  className={styles.buildingCard}
                >
                  <h3>{related.name}</h3>
                  <p className={styles.locationDescription}>
                    {related.description.substring(0, 60)}...
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = locations.map(location => ({
    params: { locationId: location.id }
  }));
  
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const locationId = params.locationId;
  const location = locations.find(loc => loc.id === locationId);
  
  if (!location) {
    return {
      notFound: true,
    };  }
  
  // Find related locations (same category but not the current location)
  const relatedLocations = locations
    .filter(loc => loc.category === location.category && loc.id !== location.id)
    .slice(0, 4);
  
  // Get the images for this location
  const images = location.images || [defaultLocationImage];
  
  return {
    props: {
      location,
      relatedLocations,
      images,
    },
  };
}