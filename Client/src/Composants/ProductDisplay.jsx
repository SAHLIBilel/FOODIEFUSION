import React from 'react';
import '../Styles/Composants/ProductDisplay.css'; // Import du fichier CSS pour le style

function ProductDisplay({ product }) {
    return (
        <div className="product">
            <img src={product.imageUrl} alt={product.name} className="product-image"/>
            <div className="product-details">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-price">{`${product.price.toFixed(2)}DT`}</p>
                <p className="product-sender">Envoyé par: {product.sender}</p>
            </div>
        </div>
    );
}

export default ProductDisplay;
