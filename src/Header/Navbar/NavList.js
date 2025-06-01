import { Link } from 'react-router-dom';
import './NavList.css';
import { useNavigate } from 'react-router-dom';

const NavList = () => {
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    const path = e.target.value;
    if (path) {
      navigate(path);
    }
  };

  return (
    <ul className="nav-list">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/About">About Us</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      <li>
        <select className="nav-select" onChange={handleSelectChange} defaultValue="">
          <option value="/" >Products</option>
          <option value="/mobile">Mobiles</option>
          <option value="/refrigerator">Fridges</option>
          <option value="/AC">AC</option>
        </select>
      </li>

    </ul>
  );
};

export default NavList;
