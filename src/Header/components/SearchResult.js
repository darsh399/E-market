import React from "react";
import CartForm from "./CartForm";
import './SearchResult.css';
import { useGlobalUiContext } from "../../Context/GlobalUiContextProvider";
const SearchResults = () => {
  const {filteredData} = useGlobalUiContext();
 


console.log('filteredData', filteredData);
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
