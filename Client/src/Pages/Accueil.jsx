import PremierSection from "../Composants/PremierSection";
import QuiSommesNous from "../Composants/QuiSommesNous";
import Carousel from "../Composants/Avis";
import MobileApp from "../Composants/MobileApp";
import Partenariat from "../Composants/Partenariat";
export default function Accueil() {
  return (
    <>
      <PremierSection />
      <QuiSommesNous />
      <Partenariat />
      <Carousel />
      <MobileApp />

    </>
  );
}
