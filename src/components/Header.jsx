import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Header.css";

import menuIcon from "../assets/menu-icon.png";
import logo from "../assets/Tango2.png";
import sunIcon from "../assets/Sun.png";
import moonIcon from "../assets/Crescent Moon.png";

const Header = ({ isDarkMode, toggleTheme, onMenuClick }) => {
  return (
    <header className={`navbar ${isDarkMode ? "dark" : "light"}`}>
      <div className="header">
        <img src={logo} alt="Max iPhone" className="logo" />
        <h2>Max iPhone</h2>
      </div>

      <ul>
        <li>
          <Link to="/" className="nav-link">Accueil</Link>
        </li>
        <li>
          <Link to="/produits" className="nav-link">Produits</Link>
        </li>
        <li>
          <Link to="/a-propos" className="nav-link">À propos</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>

      <img
        src={isDarkMode ? sunIcon : moonIcon} // ✅ maintenant c’est logique
        alt="Toggle theme"
        className="toggle-icon"
        onClick={toggleTheme}
      />


      <button className="burger mobile-only" onClick={onMenuClick}>
        <img src={menuIcon} alt="Menu" className="custom-menu-icon" />
      </button>

    </header>
  );
};

Header.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};

export default Header;
