import React, { useEffect, useState } from "react";
import CartForm from "./CartForm";
import './SearchResult.css';

const SearchResults = () => {
  const [filteredData, setFilteredData] = useState([]);

 useEffect(() => {
  const results = JSON.parse(sessionStorage.getItem("filteredResults")) || [];
  setFilteredData(results);
  sessionStorage.removeItem("filteredResults");
}, []);


  return (
    <div className="search-results-page">
      <h2>Search Results</h2>
      <div className="cart-container">
        {filteredData.length === 0 ? (
          <p>No matching items found.</p>
        ) : (
          filteredData.map((item, index) => (
            <CartForm key={index} item={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchResults;
