import './Navbar.css';
import logo from '../images/ironhack-logo-xs.png'
import menu from '../images/menu-top-xs.png'


export default function Navbar() {
  return (
    <nav className="Navbar">

      <img className="Navicon" src={logo} alt="iron-logo" />
     <img className="Navicon" src={menu} alt="iron-menu"/>      
    </nav>
  );
}