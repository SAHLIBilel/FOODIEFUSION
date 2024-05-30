import React from 'react';
import '../Styles/Composant/Produit.css';
import { motion } from 'framer-motion';

export default function Produit({ret}) {
    function DeleteProd(){
        
    }
    return (
        <motion.div 
        className="produit"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5 , delay:0.2+ret}}
        >
            <p id="produit-id">Id : .....</p>
            <p id="produit-description">Description : ......</p>
            <p id="produit-prix">Prix : ......</p>
            <p id="produit-reduction">Réduction Auto : .....</p>
            <button onClick={DeleteProd}>Supprimer le Produit</button>
        </motion.div>
    );
}
