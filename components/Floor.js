import Image from 'next/image';
import styles from './Floor.module.css';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

export default function Floor({ floorImage, floorName }) {
  return (
    <div className={styles.floorContainer}>
      <h3 className={styles.floorName}>{floorName}</h3>
      
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={3}
        limitToBounds={true}
        wheelDisabled={false}
        centerOnInit={true}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className={styles.controlsContainer}>
              <button onClick={() => zoomIn(0.25)} className={styles.controlButton} aria-label="Zoom In">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </button>
              
              <button onClick={() => zoomOut(0.25)} className={styles.controlButton} aria-label="Zoom Out">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </button>
              
              <button onClick={() => resetTransform()} className={styles.controlButton} aria-label="Reset Zoom">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9z"></path>
                  <path d="M9 12h6"></path>
                </svg>
              </button>
            </div>
            
            <div className={styles.imageWrapper}>
              <TransformComponent>
                <Image
                  src={floorImage}
                  alt={floorName}
                  width={1200}
                  height={800}
                  className={styles.floorImage}
                  priority
                />
              </TransformComponent>
            </div>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}