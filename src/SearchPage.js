


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import ImageSearchInput from './ImageSearchInput';
import ImageList from './ImageList';
import { addSearchTerm } from './redux/searchActions';



const API_KEY = 'AbEmBQlvMbhvsjKMsWgtQUtj2NnEbKzbM9YFoWdTjV7xuP9R1F3wOxiW';

function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchHistory, setShowSearchHistory] = useState(false);
  const dispatch = useDispatch(); 

  const searchHistory = useSelector(state => state.searchHistory); 

  const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
        headers: {
          Authorization: API_KEY,
        },
      });
      setSearchResults(response.data.photos);

      dispatch(addSearchTerm(searchTerm)); 
      setShowSearchHistory(false);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }

  const handleSearchBarClick = () => {
    setShowSearchHistory(!showSearchHistory);
  };

  return (
    <div className="image-search-app">
      <h1 style={{backgroundColor: 'red' , height: '50px'}}>IMAGE SEARCH APP</h1>
      <ImageSearchInput onSearch={handleSearch} onClick={handleSearchBarClick} searchHistory={searchHistory} /><br />
      <ImageList images={searchResults} />

      {showSearchHistory && (
        <div className="search-history">
          <h2>Search History:</h2>
          <ul >
            {searchHistory.map((term, index) => (
              <li  key={index}>{term}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
