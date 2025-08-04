/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import custom_close_icon from "../assets/close-icon.png";

const Sidebar = ({ isDarkMode, closeSidebar }) => {
  return (
    <motion.aside
      className={`sidebar ${isDarkMode ? "dark" : "light"}`}
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="sidebar-header">
        <h2 className="sidebar-title">Menu</h2>
        <button
          className="close-button"
          onClick={closeSidebar}
          aria-label="Fermer la barre latérale"
        >
          <img
            src={custom_close_icon}
            alt="Fermer"
            className="custom-close-icon"
          />
        </button>
      </div>

      <ul className="sidebar-links">
        <li>
          <Link to="/" onClick={closeSidebar}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/produits" onClick={closeSidebar}>
            Produits
          </Link>
        </li>
        <li>
          <Link to="/a-propos" onClick={closeSidebar}>
            À propos
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeSidebar}>
            Contact
          </Link>
        </li>
      </ul>
    </motion.aside>
  );
};

Sidebar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  closeSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
