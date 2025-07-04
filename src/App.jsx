import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Produits from "./pages/Produits";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Sidebar from "./components/Sidebar";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("isDarkMode");
    return saved === "true";
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("isDarkMode", newMode);
  };

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className={`containner ${isDarkMode ? "dark" : "light"}`}>
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        onMenuClick={toggleSidebar}
      />

      <AnimatePresence>
        {sidebarOpen && (
          <Sidebar
            isDarkMode={isDarkMode}
            closeSidebar={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
          <Route path="/a-propos" element={<About isDarkMode={isDarkMode} />} />
          <Route path="/produits" element={<Produits isDarkMode={isDarkMode} />} />
          <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
          <Route path="/produit/:id" element={<ProductDetail isDarkMode={isDarkMode} />} />
        </Routes>
      </main>

      <Footer isDarkMode={isDarkMode} />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
