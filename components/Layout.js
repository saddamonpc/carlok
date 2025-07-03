import Head from 'next/head';
import Image from 'next/image';

import styles from './Layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Cari Lokasi (CARLOK)';
export const siteTitle = 'CARLOK - Cari Lokasi';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      {/* Favicon and meta tags */}
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Find locations and rooms in Fasilkom UI campus with interactive maps and search functionality"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* Header logo and title CARLOK w/ link back to home*/}
      <header className={styles.header}>
        <Link href="/">
          <Image
            priority
            src="/images/makara_fasilkom.png"
            height={150}
            width={400}
            alt={name}
            style={{ objectFit: 'contain' }}
          />
        </Link>
        <h1 className={utilStyles.heading2Xl}>
          <Link href="/" className={utilStyles.colorInherit}>
            {name}
          </Link>
        </h1>
      </header>
      <main>{children}</main>
      {/* Show link back to homepage */}
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Balik ke Peta Kampus</Link>
        </div>
      )}
    </div>
  );
}
