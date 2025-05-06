import { Link } from 'react-router-dom';
import './NavList.css';

const NavList = () => {
  return (
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/mobiles">Mobiles</Link></li>
      <li><Link to="/fridges">Fridges</Link></li>
      <li><Link to="/AC">Ac</Link></li>
    </ul>
  );
};

export default NavList;
