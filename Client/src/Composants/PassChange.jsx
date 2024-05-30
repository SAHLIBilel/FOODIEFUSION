import React, { useState } from 'react';
import Modal from 'react-modal';
import '../Styles/Composants/PassChange.css'
import ProductDisplay from '../Composants/ProductDisplay'
export default function PassChange(){
    const [IsOpen, setIsOpen] = useState(false);
    const openModal = () => {
      setIsOpen(true);
    };
    const closeModal = () => {
      setIsOpen(false);
    };

    return(
        <div className="pre">
        <button onClick={openModal}>mes Produits préférées</button>
        <Modal
        id='pre'
        isOpen={IsOpen}
        onRequestClose={closeModal}
        contentLabel="les produits preferées"
      >
        <h1>mes produits préférées</h1>
        <button onClick={closeModal}>Retour</button>
      </Modal>
      </div>
        
    )
}