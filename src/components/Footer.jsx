import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt
} from "react-icons/fa";

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`footer ${isDarkMode ? "dark" : "light"}`}>
      <div className="footer-content">
        {/* SLOGAN + RÉSEAUX */}
        <div className="footer-section logo-social">
          <p className="slogan">Max iPhone – Vos iPhones à prix imbattables !</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/tonprofil" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/tonprofil" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/tonprofil" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* CONTACT */}
        <div className="footer-section contact-us">
          <h3>Contact</h3>
          <p><FaMapMarkerAlt /> Porto-Novo, Bénin</p>
          <p><FaPhoneAlt /> +229 97 00 00 00</p>
          <p><FaEnvelope /> contact@maxiphone.bj</p>
        </div>

        {/* NAVIGATION */}
        <div className="footer-section links">
          <h3 className="centered-title">Navigation</h3>
          <ul className="nav-links">
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
        </div>

        {/* À PROPOS */}
        <div className="about-site">
          <h4>À propos de Max iPhone</h4>
          <p className="about-text">
            Max iPhone est votre boutique de confiance spécialisée dans la vente d’iPhones reconditionnés et neufs. Qualité, rapidité et prix défiant toute concurrence.
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Footer;
