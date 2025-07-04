import "./About.css";
import PropTypes from "prop-types";

function About({ isDarkMode }) {
  return (
    <div className={`about-page ${isDarkMode ? "dark" : "light"}`}>
      <h2 className="about-title">À propos de Max iPhone</h2>
      <p className="about-intro">
        Chez Max iPhone, nous vous proposons une sélection rigoureuse d’iPhones
        neufs et reconditionnés, testés, débloqués et garantis.
      </p>

      <section className="about-section">
        <h3>Qui sommes-nous ?</h3>
        <p>
          Depuis plusieurs années, Max iPhone s’est spécialisé dans la vente
          d’iPhones au Bénin. Nous travaillons avec des fournisseurs fiables
          pour garantir à nos clients des produits de qualité à des prix
          abordables.
        </p>
      </section>

      <section className="about-section">
        <h3>Nos valeurs</h3>
        <ul className="about-values">
          <li>🔒 Authenticité & transparence</li>
          <li>✅ Testés & garantis</li>
          <li>🚚 Livraison rapide</li>
          <li>💬 Service client réactif</li>
        </ul>
      </section>

      <section className="about-section">
        <h3>Pourquoi nous choisir ?</h3>
        <p>
          Tous nos produits sont soigneusement vérifiés. Nous assurons une
          livraison rapide partout au Bénin et une assistance après-vente
          efficace.
        </p>
      </section>

      <div className="about-contact">
        <a
          className="whatsapp-btn"
          href="https://wa.me/229XXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
        >
          📲 Contactez-nous sur WhatsApp
        </a>
      </div>
    </div>
  );
}

About.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default About;
