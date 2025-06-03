import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import Floor from '../../components/Floor';
import fs from 'fs';
import path from 'path';
import styles from '../../components/Map.module.css';

export default function BuildingPage({ buildingName, floors }) {
  const router = useRouter();
  const { buildingId } = router.query;
  
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Head>
        <title>{buildingName} - Floor Plans</title>
        <meta name="description" content={`Floor plans for ${buildingName}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className={styles.mapContainer}>
        <div className={styles.backLink}>
          <Link href="/">
            ← Back to all buildings
          </Link>
        </div>
        
        <h1 className={styles.title}>{buildingName}</h1>
        <p className={styles.subtitle}>Select a floor to view its plan</p>
        
        <div className={styles.floorList}>
          {floors.map((floor) => (
            <div key={floor.name} id={floor.name.replace(/\s+/g, '-').toLowerCase()}>
              <Floor 
                floorImage={`/denah2/${buildingName}/${floor.name}.png`}
                floorName={floor.name}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { buildingId: 'gedung-a' } },
      { params: { buildingId: 'gedung-b' } },
      { params: { buildingId: 'gedung-c' } },
      { params: { buildingId: 'gedung-baru' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const buildingMap = {
    'gedung-a': 'Gedung A',
    'gedung-b': 'Gedung B',
    'gedung-c': 'Gedung C',
    'gedung-baru': 'Gedung Baru',
  };
  
  const buildingName = buildingMap[params.buildingId];
  const buildingPath = path.join(process.cwd(), 'public', 'denah2', buildingName);
  
  const floorFiles = fs.readdirSync(buildingPath);
  const floors = floorFiles.map(filename => ({
    name: filename.replace('.png', ''),
  }));
  
  return {
    props: {
      buildingName,
      floors,
    },
  };
}