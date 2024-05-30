import Logo2 from "../Images/Logo2.png";
import "../Styles/Composants/QuiSommesNous.css";
import { motion } from "framer-motion";
export default function QuiSommesNous() {
  return (
    <motion.div className="QuiSomme">
      <motion.img 
        src={Logo2} alt="noPhoto" 
        initial={{opacity:0 , x:-500}}
        whileInView={{ opacity: 1 , x:0 }}
        transition={{delay:0.3 , duration:0.3 }}
        exit={{opacity:0}}/>
      <motion.div 
      className="intro"
      initial={{opacity:0 , y:+200}}
      whileInView={{ opacity: 1 , y:0 }}
      transition={{delay:0.3 , duration:0.3 }}
      exit={{opacity:0}}>
        <h1>Qui Sommes Nous ? </h1>
        <motion.p 
        className="paragraphe_1"
>
          <br />
          FoodieFusion! la première plateforme 100% tunisienne conçue pour
          révolutionner votre expérience culinaire depuis 2018. En tant que
          pionnier dans l'intermédiation entre les restaurants locaux et vous,
          nos précieux clients, FoodieFusion s'engage à apporter à votre porte
          les saveurs riches et diversifiées de la Tunisie. Notre plateforme ne
          se limite pas à vous connecter avec une large sélection de restaurants
          ; elle est méticuleusement conçue pour vous offrir les meilleures
          offres et bonnes affaires dans chaque catégorie de cuisine, vous
          permettant ainsi de savourer les délices culinaires sans quitter le
          confort de votre foyer. Grâce à nos partenariats stratégiques avec des
          services de livraison de premier plan et des restaurants triés sur le
          volet, nous assurons non seulement une variété et une qualité sans
          compromis, mais aussi une livraison efficace et ponctuelle de vos
          commandes. La confidentialité de vos informations et la sécurité de
          vos transactions sont au cœur de nos préoccupations. Chez
          FoodieFusion, chaque plat commandé est une invitation à explorer et à
          célébrer la richesse de la gastronomie tunisienne, tout en bénéficiant
          d'un service clientèle exceptionnel. Embarquez avec nous dans cette
          aventure gourmande et découvrez pourquoi FoodieFusion est la
          destination privilégiée des amateurs de bonne cuisine en Tunisie.
        </motion.p>
        <p className="paragraphe_2">
          <h3>
            Bienvenue sur FoodieFusion, la première plateforme 100% tunisienne
            révolutionnant votre expérience culinaire depuis 2018. Connectant
            les restaurants locaux à vous, nos précieux clients, nous vous
            offrons un large choix de délices culinaires, des offres
            exceptionnelles et une livraison efficace. La confidentialité de vos
            données est notre priorité. Découvrez la richesse de la gastronomie
            tunisienne avec nous, bénéficiant d'un service clientèle
            exceptionnel. Rejoignez-nous dès maintenant !
          </h3>
        </p>
      </motion.div>
    </motion.div>
  );
}
