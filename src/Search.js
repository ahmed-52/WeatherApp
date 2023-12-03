// Search.js
import React from 'react';

const Search = ({ city, onCityChange, onSearchSubmit }) => {
  return (
    <div className='search-container'>
      <input
        type="text"
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={onSearchSubmit}>Search</button>
    </div>
  );
};

export default Search;
