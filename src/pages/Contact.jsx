import "./Contact.css";

function Contact({ isDarkMode }) {
  return (
    <div className={`contact-page ${isDarkMode ? "dark" : ""}`}>
      <h2 className="contact-title">Contactez Max iPhone</h2>
      <p className="contact-intro">Une question, une commande ou un devis ? Envoyez-nous un message !</p>

      <div className="contact-methods">
        <a href="https://wa.me/229XXXXXXXXX" className="contact-whatsapp" target="_blank" rel="noopener noreferrer">
          💬 Discuter sur WhatsApp
        </a>
        <p>Téléphone : <a href="tel:+229XXXXXXXXX">+229 XX XX XX XX</a></p>
        <p>Email : <a href="mailto:maxiphone@gmail.com">maxiphone@gmail.com</a></p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Votre nom" required />
        <input type="tel" placeholder="Votre numéro (WhatsApp)" required />
        <textarea placeholder="Votre message..." rows="5" required />
        <button type="submit">Envoyer le message</button>
      </form>
    </div>
  );
}

export default Contact;
