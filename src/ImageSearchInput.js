


import React, { useState } from 'react';

function ImageSearchInput({ onSearch, onClick, searchHistory }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder={searchHistory.length >= 3 ? searchHistory.slice(0, 3).join(', ') : 'Search images...'}
      />
      <button onClick={handleSubmit}>Search</button>
    
    </div>
  );
}

export default ImageSearchInput;
