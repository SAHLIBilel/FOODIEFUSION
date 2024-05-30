import "../Styles/Composants/Footer.css";
export default function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="part_1">
          <p>Tunisian Eats Connect</p>
          <p>Avenue Habib Bourguiba, Tunis, Tunisie</p>
          <p>+216 71 123 456</p>
          <p>info@tunisianeatsconnect.com</p>
        </div>
        <div className="part_2">
          <p>
            © {new Date().getFullYear()} Tunisian Eats Connect. Tous droits
            réservés.
          </p>
        </div>
        <div className="part_3">
          <p>FAQ</p>
          <p>Politique de confidentialité</p>
          <p>Conditions d'utilisation</p>
        </div>
      </div>
      </>
  );
}
