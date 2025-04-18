import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layout';
import Floor from '../../components/Floor';
import styles from '../../components/Map.module.css';
import { locations } from '../../lib/data/locations';
import { categories } from '../../lib/data/categories';
import { useState } from 'react';

export default function LocationPage({ location, relatedLocations }) {
  const router = useRouter();
  const [selectedFloorIndex, setSelectedFloorIndex] = useState(0);
  
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Get the category information
  const category = categories.find(c => c.category === location.category);
  const categoryName = categories.find(c => c.id === location.category)?.name || 'Location';
  const floorName = location.floors ? location.floors[selectedFloorIndex] : null;
  
  // Determine what to show in the image section
  const showFloorPlan = location.category === 'buildings' || location.building;
  const imagePath = showFloorPlan && floorName 
    ? `/denah2/${location.name}/${floorName}.png` 
    : location.building && location.floor
      ? `/denah2/${locations.find(l => l.id === location.building)?.name}/${location.floor}.png`
      : null;

  return (
    <Layout>
      <Head>
        <title>{location.name} - Campus Map</title>
        <meta name="description" content={location.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className={styles.mapContainer}>
        <div className={styles.backLink}>
          <Link href="/maps">
            ← Back to campus map
          </Link>
        </div>
        
        <div className={styles.locationHeader}>
          <span className={styles.locationCategory}>
            {categories.find(c => c.id === location.category)?.icon} {categoryName}
          </span>
          <h1 className={styles.title}>{location.name}</h1>
        </div>
        
        <div className={styles.locationDetails}>
          <p className={styles.locationDescription}>{location.description}</p>
          
          {/* Building-specific details */}
          {location.category === 'buildings' && location.floors && location.floors.length > 0 && (
            <div className={styles.locationDetailsSection}>
              <h3>Floors</h3>
              <div className={styles.floorNav}>
                {location.floors.map((floor, index) => (
                  <button
                    key={floor}
                    onClick={() => setSelectedFloorIndex(index)}
                    className={`${styles.floorNavItem} ${selectedFloorIndex === index ? styles.floorNavItemActive : ''}`}
                  >
                    {floor}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Location in building */}
          {location.building && (
            <div className={styles.locationDetailsSection}>
              <h3>Location</h3>
              <p>
                Located in{' '}
                <Link href={`/locations/${location.building}`} className={styles.locationLink}>
                  {locations.find(l => l.id === location.building)?.name}
                </Link>
                {location.floor && <span>, {location.floor}</span>}
              </p>
            </div>
          )}
          
          {/* Amenities */}
          {location.amenities && location.amenities.length > 0 && (
            <div className={styles.locationDetailsSection}>
              <h3>Amenities</h3>
              <div className={styles.detailsList}>
                {location.amenities.map(amenity => (
                  <span key={amenity} className={styles.detailsItem}>{amenity}</span>
                ))}
              </div>
            </div>
          )}
          
          {/* Equipment for labs */}
          {location.equipment && location.equipment.length > 0 && (
            <div className={styles.locationDetailsSection}>
              <h3>Equipment</h3>
              <div className={styles.detailsList}>
                {location.equipment.map(item => (
                  <span key={item} className={styles.detailsItem}>{item}</span>
                ))}
              </div>
            </div>
          )}
          
          {/* Software for labs */}
          {location.software && location.software.length > 0 && (
            <div className={styles.locationDetailsSection}>
              <h3>Software</h3>
              <div className={styles.detailsList}>
                {location.software.map(item => (
                  <span key={item} className={styles.detailsItem}>{item}</span>
                ))}
              </div>
            </div>
          )}
          
          {/* Services */}
          {location.services && location.services.length > 0 && (
            <div className={styles.locationDetailsSection}>
              <h3>Services</h3>
              <div className={styles.detailsList}>
                {location.services.map(service => (
                  <span key={service} className={styles.detailsItem}>{service}</span>
                ))}
              </div>
            </div>
          )}
          
          {/* Food options */}
          {location.foodOptions && location.foodOptions.length > 0 && (
            <div className={styles.locationDetailsSection}>
              <h3>Food Options</h3>
              <div className={styles.detailsList}>
                {location.foodOptions.map(option => (
                  <span key={option} className={styles.detailsItem}>{option}</span>
                ))}
              </div>
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
            <h3>Other {categoryName}</h3>
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
    };
  }
  
  // Find related locations (same category but not the current location)
  const relatedLocations = locations
    .filter(loc => loc.category === location.category && loc.id !== location.id)
    .slice(0, 3);
  
  return {
    props: {
      location,
      relatedLocations,
    },
  };
}