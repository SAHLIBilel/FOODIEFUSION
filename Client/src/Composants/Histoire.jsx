import AboutUs from '../Images/about-thumb.png';
import '../Styles/Composants/Histoire.css';
import {motion} from 'framer-motion'
export default function Histoire(){
    return(
        <motion.div className="Histoire">
            <motion.img initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:2 , delay:0.3}}
                src={AboutUs} className="imgs" />
            <div id="text">
                <h1>Notre histoire d’excellence culinaire chez FoodieFusion :</h1>
                <p>Notre voyage gastronomique à FoodieFusion a débuté en 2018, avec une mission claire : servir de pont culinaire entre les restaurants passionnés et les gourmands à la recherche d'expériences uniques. Née d'une passion pour l'excellence culinaire et d'une volonté de simplifier la découverte de nouveaux horizons gastronomiques, FoodieFusion s'est rapidement imposée comme une plateforme incontournable dans l'écosystème culinaire. En endossant le rôle d'intermédiaire de confiance, nous assumons les responsabilités de chaque acteur en cas d'échec, garantissant ainsi une expérience sereine tant pour nos partenaires restaurateurs que pour nos clients. Mais notre engagement va au-delà de la simple médiation ; nous nous efforçons de personnaliser l'expérience de chaque client, en proposant des plans sur mesure qui répondent précisément à leurs désirs et besoins culinaires. Chez FoodieFusion, chaque repas commandé est une promesse de satisfaction, de découverte et de confiance renouvelée dans l'art culinaire.</p>
            </div>
        </motion.div>
    )
}