import { useState } from 'react';
import './Input.css';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { useUiContext } from '../../Context/UiProvider';
import { useGlobalUiContext } from '../../Context/GlobalUiContextProvider';
import { useNavigate } from 'react-router-dom'; // 👈 for redirecting to results

const InputSearch = () => {
  const [userInputData, setUserInputData] = useState("");
  const { toggleInputVisibility } = useUiContext();
  const { fetchedItems } = useGlobalUiContext();
  const navigate = useNavigate(); 

  const inputHandler = (text) => {
    setUserInputData(text);
  };

  const handleSearch = () => {
    if (!fetchedItems || !Array.isArray(fetchedItems)) return;

    const searchValue = userInputData.toLowerCase();

    const results = fetchedItems.filter(item =>
      item.productName?.toLowerCase().includes(searchValue) ||
      item.productCategory?.toLowerCase().includes(searchValue) ||
      item.productDescription?.toLowerCase().includes(searchValue)
    );

    sessionStorage.setItem("filteredResults", JSON.stringify(results));

    toggleInputVisibility(false); 
    navigate("/search-results"); 
  };

  return (
    <div className="header-search-popup">
      <div className="header-search-popup-searchdiv">
        <Input
          type="input"
          typeText="text"
          value={userInputData}
          onChangeInput={(e) => inputHandler(e.target.value)}
          placeholder="Search Here"
        />
        <span className="close-btn" onClick={() => toggleInputVisibility(false)}>×</span>
      </div>

      <Button size="medium" type="primary" onClick={handleSearch}>
        SEARCH
      </Button>
    </div>
  );
};

export default InputSearch;
