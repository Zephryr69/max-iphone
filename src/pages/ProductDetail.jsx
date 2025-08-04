import { useParams, Link } from "react-router-dom";
import "./ProductDetail.css";

// 📦 Importation des images
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
    id: "1",
    nom: "iPhone 13 Pro Max",
    image: iphone13pro,
    prix: "350 000 FCFA",
    description: "Écran Super Retina XDR de 6,7 pouces, triple caméra Pro, puce A15 Bionic avec performances boostées.",
    specs: ["Stockage: 128 Go", "Batterie longue durée", "Résistance à l’eau IP68"],
    disponibilite: "En stock",
    garantie: "6 mois de garantie",
  },
  {
    id: "2",
    nom: "iPhone 12",
    image: iphone12,
    prix: "190 000 FCFA",
    description: "Design fin et puissant, puce A14, 5G rapide.",
    specs: ["Stockage: 64 Go", "Écran OLED 6.1 pouces", "Face ID"],
    disponibilite: "En stock",
    garantie: "3 mois de garantie",
  },
  {
    id: "3",
    nom: "iPhone 11",
    image: iphone11,
    prix: "100 000 FCFA",
    description: "Double caméra, A13 Bionic, excellent rapport qualité/prix.",
    specs: ["Stockage: 64 Go", "Caméra ultra grand angle", "Batterie puissante"],
    disponibilite: "Stock limité",
    garantie: "3 mois de garantie",
  },
  {
    id: "4",
    nom: "iPhone SE (2022)",
    image: iphonese,
    prix: "50 000 FCFA",
    description: "Compact mais puissant avec la puce A15.",
    specs: ["Stockage: 64 Go", "Touch ID", "Format compact"],
    disponibilite: "En stock",
    garantie: "3 mois de garantie",
  },
  {
    id: "5",
    nom: "iPhone XR",
    image: iphonexr,
    prix: "20 000 FCFA",
    description: "Écran Liquid Retina, grande autonomie.",
    specs: ["Stockage: 64 Go", "Face ID", "Écran 6.1 pouces"],
    disponibilite: "En stock",
    garantie: "2 mois de garantie",
  },
  {
    id: "6",
    nom: "iPhone XS Max",
    image: iphonexsmax,
    prix: "70 000 FCFA",
    description: "Superbe écran OLED, performances solides.",
    specs: ["Stockage: 64 Go", "Écran 6.5 pouces", "Résistance à l’eau"],
    disponibilite: "Stock limité",
    garantie: "3 mois de garantie",
  },
  {
    id: "7",
    nom: "iPhone 13 Mini",
    image: iphone13mini,
    prix: "200 000 FCFA",
    description: "Petit format, grandes performances.",
    specs: ["Stockage: 128 Go", "Puce A15", "Écran 5.4 pouces"],
    disponibilite: "En stock",
    garantie: "6 mois de garantie",
  },
  {
    id: "8",
    nom: "iPhone 12 Pro",
    image: iphone12pro,
    prix: "280 000 FCFA",
    description: "Triple caméra, scanner LiDAR, design élégant.",
    specs: ["Stockage: 128 Go", "Scanner LiDAR", "Design en acier inoxydable"],
    disponibilite: "En stock",
    garantie: "6 mois de garantie",
  },
  {
    id: "9",
    nom: "iPhone 14",
    image: iphone14,
    prix: "450 000 FCFA",
    description: "Design amélioré, autonomie boostée.",
    specs: ["Stockage: 128 Go", "Caméra améliorée", "Détection d'accident"],
    disponibilite: "En stock",
    garantie: "12 mois de garantie",
  },
  {
    id: "10",
    nom: "iPhone 13",
    image: iphone13,
    prix: "300 000 FCFA",
    description: "Équilibre parfait entre puissance et prix.",
    specs: ["Stockage: 128 Go", "Puce A15", "Excellente autonomie"],
    disponibilite: "En stock",
    garantie: "6 mois de garantie",
  },
];


function ProductDetail({ isDarkMode }) {
  const { id } = useParams();
  const produit = produits.find((p) => p.id === id);

  if (!produit) return <p style={{ padding: "2rem", textAlign: "center" }}>Produit introuvable.</p>;

  const messageWhatsApp = encodeURIComponent(
    `Bonjour Max iPhone, je souhaite acheter le ${produit.nom} à ${produit.prix}. Est-il encore disponible ?`
  );

  return (
    <div className={`product-detail-page ${isDarkMode ? "dark" : ""}`}>
      <div className="product-detail">
        <div className="product-header">
          <img src={produit.image} alt={`Image de ${produit.nom}`} className="product-img" />
          <div className="product-info">
            <h1 className="product-title">{produit.nom}</h1>
            <p className="product-description">{produit.description}</p>

            {produit.specs && (
              <ul className="product-specs">
                {produit.specs.map((spec, idx) => (
                  <li key={idx}>{spec}</li>
                ))}
              </ul>
            )}

            <p className="product-price">{produit.prix}</p>
            <p className="product-stock">{produit.disponibilite}</p>
            <p className="product-warranty">{produit.garantie}</p>

            <a
              href={`https://wa.me/22969118745?text=${messageWhatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              Acheter via WhatsApp
            </a>

            <Link to="/produits" className="retour-link">
              ← Retour aux produits
            </Link>
          </div>
        </div>

        <section className="product-marketing">
          <h2>Pourquoi choisir Max iPhone ?</h2>
          <p>
            Nos produits sont testés, reconditionnés avec soin, garantis et livrés sous 48h.
            Nous mettons un point d’honneur à offrir le meilleur rapport qualité/prix au Bénin.
          </p>
          <div className="badges">
            <span>✅ Qualité certifiée</span>
            <span>🔁 Retour sous 7 jours</span>
            <span>🚚 Livraison Express</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductDetail;
