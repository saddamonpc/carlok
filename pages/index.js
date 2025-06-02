import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

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
    </Layout>
  );
}
