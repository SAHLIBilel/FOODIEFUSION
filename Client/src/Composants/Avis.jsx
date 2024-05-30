import React, { useState, useEffect } from 'react';
import "../Styles/Composants/Carousel.css"
// Supposons que nous avons un tableau d'avis
const avis = [
  { id: 1, text: "Très bon service, je recommande vivement!" },
  { id: 2, text: "Une expérience fantastique, rien à redire!" },
  { id: 3, text: "Service correct, mais pourrait être amélioré." },
  { id: 4, text: "Pas satisfait du service. Beaucoup de retards." },
  { id: 5, text: "Excellent ! Le personnel est très attentif." }
];

function Carousel() {
  const [currentAvisIndex, setCurrentAvisIndex] = useState(0);

  const nextAvis = () => {
    setCurrentAvisIndex((prevIndex) => (prevIndex + 2) % avis.length);
  };

  useEffect(() => {
    const timer = setInterval(nextAvis, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextAvisIndex = (currentAvisIndex + 1) % avis.length;

  return (
    <div className="carousel">
      <h2>Avis Clients</h2>
      <div className="avis-container">
        <div className="avis">{avis[currentAvisIndex].text}</div>
        <div className="avis">{avis[nextAvisIndex].text}</div>
      </div>
    </div>
  );
}

export default Carousel;
