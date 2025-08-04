import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Produits.css";

// ✅ Importation des images
import iphone13pro from "../assets/products/iphone13pro.jpeg";
import iphone12 from "../assets/products/iphone12.jpeg";
import iphone11 from "../assets/products/iphone11.jpeg";
import iphonese from "../assets/products/iphonese.jpeg";
import iphonexr from "../assets/products/iphonexr.jpeg";
import iphonexsmax from "../assets/products/iphonexsmax.jpeg";
import iphone13mini from "../assets/products/iphone13mini.jpeg";
import iphone12pro from "../assets/products/iphone12pro.jpeg";
import iphone14 from "../assets/products/iphone14.jpeg";
import iphone13 from "../assets/products/iphone13.jpeg";

const produits = [
  {
    id: 1,
    nom: "iPhone 13 Pro Max",
    image: iphone13pro,
    prix: "350 000 FCFA",
    description: "Écran Super Retina XDR, triple caméra pro, A15 Bionic.",
  },
  {
    id: 2,
    nom: "iPhone 12",
    image: iphone12,
    prix: "190 000 FCFA",
    description: "Design fin et puissant, puce A14, 5G rapide.",
  },
  {
    id: 3,
    nom: "iPhone 11",
    image: iphone11,
    prix: "100 000 FCFA",
    description: "Double caméra, A13 Bionic, excellent rapport qualité/prix.",
  },
  {
    id: 4,
    nom: "iPhone SE (2022)",
    image: iphonese,
    prix: "50 000 FCFA",
    description: "Compact mais puissant avec la puce A15.",
  },
  {
    id: 5,
    nom: "iPhone XR",
    image: iphonexr,
    prix: "20 000 FCFA",
    description: "Écran Liquid Retina, grande autonomie.",
  },
  {
    id: 6,
    nom: "iPhone XS Max",
    image: iphonexsmax,
    prix: "70 000 FCFA",
    description: "Superbe écran OLED, performances solides.",
  },
  {
    id: 7,
    nom: "iPhone 13 Mini",
    image: iphone13mini,
    prix: "200 000 FCFA",
    description: "Petit format, grandes performances.",
  },
  {
    id: 8,
    nom: "iPhone 12 Pro",
    image: iphone12pro,
    prix: "280 000 FCFA",
    description: "Triple caméra, scanner LiDAR, design élégant.",
  },
  {
    id: 9,
    nom: "iPhone 14",
    image: iphone14,
    prix: "450 000 FCFA",
    description: "Design amélioré, autonomie boostée.",
  },
  {
    id: 10,
    nom: "iPhone 13",
    image: iphone13,
    prix: "300 000 FCFA",
    description: "Équilibre parfait entre puissance et prix.",
  },
];

function Produits({ isDarkMode }) {
  return (
    <div className={`produits-page ${isDarkMode ? "dark" : "light"}`}>
      <h1 className="produits-title">
        iPhones en stock - Neufs & Reconditionnés
      </h1>

      <p className="produits-intro">
        Tous nos iPhones sont garantis, testés et disponibles à prix réduit.
        Livraison rapide partout au Bénin.
      </p>

      <section className="bande-marketing">
        <p>
          📱 Profitez d’une qualité premium à prix mini. Tous nos modèles sont
          testés, vérifiés et prêts à l’emploi !
        </p>
      </section>

      <div className="product-grid">
        {produits.map((prod) => (
          <div className="product-card" key={prod.id}>
            <img src={prod.image} alt={`Image de ${prod.nom}`} className="product-img" />
            <h3>{prod.nom}</h3>
            <p>{prod.description}</p>
            <p className="prix">{prod.prix}</p>
            <Link to={`/produit/${prod.id}`} className="voir-btn">
              Voir les détails
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

Produits.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Produits;
