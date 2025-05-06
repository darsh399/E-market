import searchLogo from './../../images/search.svg';
import './SearchLogo.css'
const SearchLogo = ({openVisibleForm}) => {
    return(
        <div className="search-logo-container">
        <span className="search-text">Search</span>
        <img
          className="search-logo"
          onClick={() => openVisibleForm(prev => !prev)}
          src={searchLogo}
          alt="search icon"
        />
      </div>
      
    )
    
}

export default SearchLogo;