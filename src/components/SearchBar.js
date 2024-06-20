// src/components/SearchBar.js

import React from 'react';
import styles from './SearchBar.module.css';

class SearchBar extends React.Component {
  render() {
    return (
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search Businesses" />
        <input type="text" placeholder="Where?" />
        <button>Search</button>
      </div>
    );
  }
}

export default SearchBar;
