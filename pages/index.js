import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={utilStyles.mapLink}>
          <Link href="/maps" className={utilStyles.mapButton}>
            View Fasilkom UI Campus Map
          </Link>
        </div>
      </section>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>TODO (unordered)</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>- Add search feature</li>
          <li className={utilStyles.listItem}>- Edit locations</li>
          <li className={utilStyles.listItem}>- Add Gedung Baru</li>
          <li className={utilStyles.listItem}>- Add images of locations</li>
          <li className={utilStyles.listItem}>- Change map to a singular one rather than separated like current</li>
          <li className={utilStyles.listItem}>- Add building plan (basic overview) besides the map</li>
          <li className={utilStyles.listItem}>- Add login for admin to change location image, edit descriptions, etc.</li>
          <li className={utilStyles.listItem}>- Refactor code, such as moving location description to separate files.</li>
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
