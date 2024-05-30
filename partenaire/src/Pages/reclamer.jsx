import { useState } from 'react';
import '../Styles/Pages/Reclamer.css';
import InfoBar from '../Composant/InfoBar';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'

export default function Reclamer() {
    const [ID, setID] = useState('');
    const [email, setEmail] = useState('');
    const [commande, setCommande] = useState('');
    const [probleme, setProbleme] = useState('');
    const navig=useNavigate();

    function ReclamPart(event) {
        event.preventDefault();
        console.log({ ID, email, commande, probleme });
    }

    return (
        <>
        <InfoBar/>
        <button id="home-button" className="home-button" onClick={()=>{navig("../Accueil")}}>Accueil</button>
        <motion.div 
            className="reclamer"
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.3, duration:1.5}}>
            <p>Déposer Réclamation</p>
            <form 
            onSubmit={ReclamPart}>
                <label>ID</label>
                <input 
                    type="text" 
                    placeholder="Entrer votre ID" 
                    value={ID} 
                    onChange={e => setID(e.target.value)} 
                />
                <label>Email</label>
                <input 
                    type="email" 
                    placeholder="Entrer mail de contact" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                />
                <label>N° Commande</label>
                <input 
                    type="number" 
                    placeholder="Entrer numéro de commande" 
                    value={commande} 
                    onChange={e => setCommande(e.target.value)} 
                />
                <label>Problème</label>
                <input 
                    type="text" 
                    placeholder="Identifier le problème à réclamer" 
                    value={probleme} 
                    onChange={e => setProbleme(e.target.value)} 
                />
                <input type="submit" value="Déposer" />
            </form>
        </motion.div>
        </>
    )
}
