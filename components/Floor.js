import Image from 'next/image';
import styles from './Floor.module.css';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

export default function Floor({ floorImage, floorName }) {
  return (
    <div className={styles.floorContainer}>
      <h3 className={styles.floorName}>{floorName}</h3>
      {/* Props / configuration */}
      <TransformWrapper
        minScale={0.75} // Minimum zoom level (not '1.0' to let users know they can interact with the image)
        maxScale={3} // Max zoom level (not too high to avoid too zooming in)
        limitToBounds={true} // Panning only within the image bounds (if false, can make user lost when panning)
        centerOnInit={true} // Centers the image on initial load (just common sense)
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className={styles.controlsContainer}>
              {/* Zoom in button */}
              <button onClick={() => zoomIn(0.25)} className={styles.controlButton} aria-label="Zoom In">
                🔍+
              </button>
              {/* Zoom out button */}
              <button onClick={() => zoomOut(0.25)} className={styles.controlButton} aria-label="Zoom Out">
                🔍−
              </button>
              {/* Reset zoom button */}
              <button onClick={() => resetTransform()} className={styles.controlButton} aria-label="Reset Zoom">
                🔄
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