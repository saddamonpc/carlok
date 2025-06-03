import Head from 'next/head';
import Image from 'next/image';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Cari Lokasi (CARLOK)';
export const siteTitle = 'CARLOK - Cari Lokasi';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Find locations and rooms in Fasilkom UI campus with interactive maps and search functionality"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/makara_fasilkom.png"
              height={147}
              width={400}
              alt={name}
              style={{ objectFit: 'contain' }}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/makara_fasilkom.png"
                height={147}
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
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
