import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import styles from '../../components/Map.module.css';
import { locations } from '../../lib/data/locations.db';
import { categories } from '../../lib/data/categories';

export default function CategoryPage({ category, categoryLocations }) {
  const router = useRouter();
  
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Head>
        <title>{category.name} - Campus Map</title>
        <meta name="description" content={`Browse all ${category.name.toLowerCase()} on campus`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
        <div className={styles.mapContainer}>
        <div className={styles.backLink}>
          <Link href="/">
            ← Back to campus map
          </Link>
        </div>
        
        <div className={styles.locationHeader}>
          <span className={styles.locationCategory}>
            {category.icon}
          </span>
          <h1 className={styles.title}>{category.name}</h1>
          <p className={styles.subtitle}>{category.description}</p>
        </div>
        
        <div className={styles.buildingGrid}>
          {categoryLocations.map((location) => (
            <Link 
              href={`/locations/${location.id}`}
              className={styles.buildingCard} 
              key={location.id}
            >
              <h2>{location.name}</h2>
              {location.building && (
                <p className={styles.buildingInfo}>
                  <span className={styles.buildingInfoLabel}>Located in: </span>
                  {locations.find(l => l.id === location.building)?.name}
                  {location.floor && `, ${location.floor}`}
                </p>
              )}
              <p className={styles.locationDescription}>{location.description.substring(0, 100)}...</p>
              <p className={styles.viewDetails}>View details →</p>
            </Link>
          ))}
        </div>
        
        {categoryLocations.length === 0 && (
          <div className={styles.emptyState}>
            <p>No locations found in this category.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = categories.map(category => ({
    params: { categoryId: category.id }
  }));
  
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const categoryId = params.categoryId;
  const category = categories.find(cat => cat.id === categoryId);
  
  if (!category) {
    return {
      notFound: true,
    };
  }
  
  const categoryLocations = locations.filter(
    location => location.category === categoryId
  );
  
  return {
    props: {
      category,
      categoryLocations,
    },
  };
}