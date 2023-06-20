import React, { useState } from 'react';
import './Searchbar.css';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // Perform search functionality here
    console.log('Performing search for:', searchQuery);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search products..."
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
