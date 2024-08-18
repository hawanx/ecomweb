import React, { useContext, useState } from "react";
import "./Searchbar.css";
import { EcomContext, Shop_context } from "../context/Shop_context";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(EcomContext);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
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
