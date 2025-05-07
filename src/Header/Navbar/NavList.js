import { Link } from 'react-router-dom';
import './NavList.css';

const NavList = () => {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/mobile">Mobiles</Link></li>
      <li><Link to="/fridges">Fridges</Link></li>
      <li><Link to="/AC">Ac</Link></li>
    </ul>
  );
};

export default NavList;
