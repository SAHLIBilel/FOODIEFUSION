import React, { useState } from 'react';
import Modal from 'react-modal';

const ExampleModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Ouvrir la fenêtre modale</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Exemple de fenêtre modale"
      >
        <h2>Titre de la fenêtre modale</h2>
        <p>Ceci est le contenu de la fenêtre modale.</p>
        <button onClick={closeModal}>Fermer la fenêtre modale</button>
      </Modal>
    </div>
  );
};

export default ExampleModal;
