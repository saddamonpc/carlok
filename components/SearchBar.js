import { useRef } from 'react';
import styles from './Map.module.css';

export default function SearchBar({ 
  searchQuery, 
  onSearchChange, 
  onSubmit, 
  placeholder = "Search locations...",
  className = "" 
}) {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() && onSubmit) {
      onSubmit();
    }
  };

  const handleClear = () => {
    onSearchChange('');
  };

  return (
    <div className={`${styles.searchContainer} ${className}`}>
      <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className={styles.searchForm}
      >
        <div className={styles.searchInputWrapper}>
          <input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className={styles.searchInput}
          />
          <button
            type="submit"
            className={styles.searchSubmitButton}
            disabled={!searchQuery.trim()}
            aria-label="Search"
          >
            🔍
          </button>
          {searchQuery && (
            <button
              type="button"
              onClick={handleClear}
              className={styles.clearSearchButton}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
