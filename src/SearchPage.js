// import React, { useState } from 'react';
// import axios from 'axios';
// import ImageSearchInput from './ImageSearchInput';
// import ImageList from './ImageList';

// const API_KEY = 'AbEmBQlvMbhvsjKMsWgtQUtj2NnEbKzbM9YFoWdTjV7xuP9R1F3wOxiW';

// function SearchPage() {
//   const [searchResults, setSearchResults] = useState([]);
//   const [searchHistory, setSearchHistory] = useState([]);
//   const [showSearchHistory, setShowSearchHistory] = useState(false);

//   const handleSearch = async (searchTerm) => {
//     try {
//       const response = await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
//         headers: {
//           Authorization: API_KEY,
//         },
//       });
//       setSearchResults(response.data.photos);

//       setSearchHistory((prevHistory) => [searchTerm, ...prevHistory.slice(0, 3)]);
//       setShowSearchHistory(false); // Close search history after performing a search
//     } catch (error) {
//       console.error('Error fetching images:', error);
//     }
//   };

//   const handleSearchBarClick = () => {
//     setShowSearchHistory(!showSearchHistory);
//   };

//   return (
//     <div className="image-search-app">
//       <h1>Image Search App</h1>
//       <ImageSearchInput onSearch={handleSearch} onClick={handleSearchBarClick} /><br/>
//       <ImageList images={searchResults} />

//       {showSearchHistory && (
//         <div className="search-history">
//           <h2>Search History:</h2>
//           <ul>
//             {searchHistory.map((term, index) => (
//               <ul key={index}>{term}</ul>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SearchPage;


// import React from 'react';
// import { useDispatch } from 'react-redux';
// import axios from 'axios';
// import ImageSearchInput from './ImageSearchInput';
// import ImageList from './ImageList';
// import { setSearchResults, setSelectedImage } from './redux/images'; // Update the path

// const API_KEY = 'AbEmBQlvMbhvsjKMsWgtQUtj2NnEbKzbM9YFoWdTjV7xuP9R1F3wOxiW';

// function SearchPage() {
//   const dispatch = useDispatch();

//   const handleSearch = async (searchTerm) => {
//     try {
//       const response = await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
//         headers: {
//           Authorization: API_KEY,
//         },
//       });
//       dispatch(setSearchResults(response.data.photos));
//     } catch (error) {
//       console.error('Error fetching images:', error);
//     }
//   };

//   return (
//     <div className="image-search-app">
//       <h1>Image Search App</h1>
//       <ImageSearchInput onSearch={handleSearch} />
//       <ImageList />
//     </div>
//   );
// }

// export default SearchPage;


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import ImageSearchInput from './ImageSearchInput';
import ImageList from './ImageList';
import { addSearchTerm } from './redux/searchActions';

// import { addSearchTerm } from './redux/searchHistory/searchActions'; // Import the action

const API_KEY = 'AbEmBQlvMbhvsjKMsWgtQUtj2NnEbKzbM9YFoWdTjV7xuP9R1F3wOxiW';

function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchHistory, setShowSearchHistory] = useState(false);
  const dispatch = useDispatch(); // Initialize useDispatch hook

  const searchHistory = useSelector(state => state.searchHistory); // Get search history from Redux store

  const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
        headers: {
          Authorization: API_KEY,
        },
      });
      setSearchResults(response.data.photos);

      dispatch(addSearchTerm(searchTerm)); // Dispatch the action to add the search term to the history
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
          <ul style={{}}>
            {searchHistory.map((term, index) => (
              <li key={index}>{term}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
