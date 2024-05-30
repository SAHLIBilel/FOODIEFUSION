import "../Styles/Composants/Partenariat.css";
import Restau from "../Images/Restau.jpg";
import Livreur from "../Images/Livreur.jpg";
import {motion} from 'framer-motion';

export default function Partenariat() {
  return (
    <motion.div className="Partenariat"
      initial={{opacity:0  }}
      whileInView={{ opacity: 1  }}
      transition={{delay:0.1 , duration:0.75 }}
      exit={{opacity:0}}>
      <p className="Titre">Devenir un Partenaire</p>
      <div className="Types">
        <div className="Livreur">
          <img src={Livreur} alt="" className="liv_img" />
          <p>devenez le visage souriant de notre Service</p>
          <button className="Button">En savoir plus</button>
        </div>
        <div className="Restau">
          <img src={Restau} alt="" className="res_img" />
          <p>faisons de chaque repas une expérience inoubliables</p>
          <button className="Button">En savoir plus</button>
        </div>
      </div>
    </motion.div>
  );
}
