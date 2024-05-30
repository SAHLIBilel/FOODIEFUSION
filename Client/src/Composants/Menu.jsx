import { motion } from 'framer-motion';
import '../Styles/Composants/EspaceUser.css'
import {useSignOut} from "react-auth-kit";
import { Wait } from '../Fonctions/SwalAlert';
import { Link } from 'react-router-dom';
function Menu() {
    const signOut=useSignOut()
    //il faut ajouter une alert avant de deconnecter..
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration:0.25 , delay:0.1 , ease: "easeIn" }}
            exit={{ opacity: 0 }}
            className="menu"
        >
            <ul>
                <a href="infoCompte">Organiser Profil</a>
                <a>Commandes</a>
                <a><Link to={"/Contact"} >Reclamation</Link></a>
                <a onClick={()=>{Wait("center","please Wait","Vous etes Deconnecter");localStorage.removeItem('token');;signOut()}}>Deconnecter</a>
            </ul>
        </motion.div>
    );
}

export default Menu;
