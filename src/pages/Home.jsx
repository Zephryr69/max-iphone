import "./Home.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import promoImg from "../assets/promo-iphone.jpeg";

function Home({ isDarkMode }) {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const imagesImport = import.meta.glob(
      "/src/assets/TxtCarousel images/Image*.jpeg",
      { eager: true }
    );

    const textsImport = import.meta.glob(
      "/src/assets/TxtCarousel images/Texte*.txt",
      {
        eager: true,
        query: "?raw",
        import: "default"
      }
    );

    const productIds = {
      1: "1",
      2: "3",
      3: "5",
      4: "4",
      5: "9"
    };

    const imagesEntries = Object.entries(imagesImport)
      .map(([path, module]) => {
        const match = path.match(/Image(\d+)\.jpeg$/);
        return match ? { index: Number(match[1]), src: module.default || module } : null;
      })
      .filter(Boolean);

    const textsEntries = Object.entries(textsImport)
      .map(([path, content]) => {
        const match = path.match(/Texte(\d+)\.txt$/);
        return match ? { index: Number(match[1]), text: content } : null;
      })
      .filter(Boolean);

    imagesEntries.sort((a, b) => a.index - b.index);
    textsEntries.sort((a, b) => a.index - b.index);

    const combined = imagesEntries.map(({ index, src }) => {
      const txt = textsEntries.find((t) => t.index === index);
      return {
        src,
        text: txt?.text || "",
        id: productIds[index] || `${index}`
      };
    });

    setSlides(combined);
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div className={`home-wrapper ${isDarkMode ? "dark" : "light"}`}>
      <section className="hero-section">
        <div className="hero-text">
          <h1>Max iPhone</h1>
          <p>Des iPhones reconditionnés & neufs à prix imbattables.</p>
          <Link to="/produits" className="cta-button">Voir les produits</Link>
        </div>
        <img src={promoImg} alt="iPhone en promo" className="hero-img" />
      </section>

      <section className="why-choose">
        <h2>Pourquoi nous choisir ?</h2>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>✅ Qualité garantie</h3>
          <p>Chaque appareil est testé et certifié avant mise en vente.</p>
        </div>
        <div className="feature-card">
          <h3>🚚 Livraison rapide</h3>
          <p>Recevez votre iPhone en 48h dans toute la région.</p>
        </div>
        <div className="feature-card">
          <h3>💸 Prix cassés</h3>
          <p>Les meilleures offres du marché sur des modèles récents.</p>
        </div>
      </section>

      <section className="featured-products">
        <h2>Produits phares</h2>
        {slides.length === 0 ? (
          <p>Chargement...</p>
        ) : (
          <div className="carouselContainer">
            {/* Flèche précédente */}
            <button
              className="carouselArrow prev"
              onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
              aria-label="Slide précédente"
            >
              ‹
            </button>

            <div className="carouselSlide">
              <img
                src={slides[current]?.src}
                alt={`Slide ${current + 1}`}
                loading="lazy"
              />
              <div className="carouselText">
                <p>{slides[current]?.text}</p>
                <Link
                  to={`/produit/${slides[current]?.id}`}
                  className="cta-button"
                >
                  Voir le produit
                </Link>
              </div>
            </div>

            {/* Flèche suivante */}
            <button
              className="carouselArrow next"
              onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
              aria-label="Slide suivante"
            >
              ›
            </button>

            <div className="carouselDots">
              {slides.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`dot ${i === current ? "activeDot" : ""}`}
                ></span>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
