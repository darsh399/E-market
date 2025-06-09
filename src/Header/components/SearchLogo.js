import searchLogo from './../../images/search.svg';
import './SearchLogo.css';
import { useUiContext } from '../../Context/UiProvider';
const SearchLogo = () => {
  const {toggleInputVisibility} = useUiContext();
    return(
        <div className="search-logo-container">
        <span className="search-text">Search</span>
        <img
          className="search-logo"
          onClick={toggleInputVisibility}
          src={searchLogo}
          alt="search icon"
        />
      </div>
      
    )
    
}

export default SearchLogo;