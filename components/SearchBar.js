import { useRef } from 'react';
import styles from './Map.module.css';

export default function SearchBar({ 
  searchQuery, 
  onSearchChange, 
  onSubmit, 
  placeholder = "Cari lokasi...",
  className = "" 
}) {
  const formRef = useRef(null);

  // Handle form submission: only allow submission if searchQuery is not empty
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() && onSubmit) {
      onSubmit();
    }
  };

  // Handle clearing the search input
  const handleClear = () => {
    onSearchChange('');
  };

  return (
    <div className={`${styles.searchContainer} ${className}`}>
      {/* Search form */}
      <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className={styles.searchForm}
      >
        {/* Search input */}
        <div className={styles.searchInputWrapper}>
          <input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className={styles.searchInput}
          />
          {/* Search button */}
          <button
            type="submit"
            className={styles.searchSubmitButton}
            disabled={!searchQuery.trim()}
            aria-label="Search"
          >
            🔍
          </button>
          {/* Clear button */}
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
