import { useState } from 'react';
import './Input.css';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { useUiContext } from '../../Context/UiProvider';
import { useNavigate } from 'react-router-dom'; 
import { useGlobalUiContext } from '../../Context/GlobalUiContextProvider';
const InputSearch = () => {
  const [userInputData, setUserInputData] = useState("");
  const { toggleInputVisibility } = useUiContext();
  const {getFilteredData} = useGlobalUiContext();
  
  const navigate = useNavigate(); 
  
  const inputHandler = (text) => {
    setUserInputData(text);
  };

  const handleSearch =async () => {
    const userEnteredData = userInputData.toLowerCase();
    getFilteredData(userEnteredData);
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
