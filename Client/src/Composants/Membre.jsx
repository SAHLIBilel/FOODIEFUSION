import Login from '../Images/login_Aff.png';
import Steps from '../Composants/Steps'
import Accees from '../Images/Accées.png'
import recherche from '../Images/loupe.png'
import payement from '../Images/card.png'
import FeedBack from '../Images/feedback.png'
import {motion} from 'framer-motion'
import '../Styles/Composants/Membre.css';
export default function Membre(){
    return(
        <div className="Membre">
            <img src={Login} id="Membre" />
            <div className="Steps">
                <h1>Le processus de création de votre expérience culinaire:</h1>
                <Steps 
                img={Accees} string1="1) Accès à votre compte FoodieFusion" string2="Connectez-vous ou créez un compte pour débuter votre aventure culinaire sur FoodieFusion."/>
                <Steps img={recherche} string1="2) Choix de vos produits" string2="Parcourez notre sélection et ajoutez vos produits préférés à votre panier."/>
                <Steps img={payement} string1="3) Finalisation de l'achat" string2="Procédez au paiement de votre commande en toute sécurité"/>
                <Steps img={FeedBack} string1="4) Partagez votre avis" string2="Exprimez votre satisfaction ou vos préoccupations concernant votre expérience "/>
            </div>
            
        </div>
    )
}