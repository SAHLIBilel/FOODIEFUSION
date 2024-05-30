import { useState } from 'react';
import {jwtDecode} from 'jwt-decode'; // Correction 1
import PassChange from '../Composants/PassChange';
import "../Styles/Pages/infoCompte.css"

export default function Infocompte() {
    const token = localStorage.getItem('token');
    const Token = jwtDecode(token);
    return (
        <div id='infoCompte'>
        <div className='infoCompte'>
            <div className="navCompte">
                <PassChange />
                <PassChange />
                <PassChange />
                <PassChange />
                
            </div>
            <div id="MonCompte">
                <div id="introCompte">
                    <p id="titre-C">Mon compte</p>
                    <p>Informations du compte</p>
                </div>

                <hr />
                <div id="infos">
                    <div>
                        <p>informations de contact</p>
                        <p>{Token.userNom} {Token.userPrenom}</p>
                        <p>{Token.userEmail}</p>
                        <div id="lien"><a href="#">Editer</a> | <a href="#">Modifier le mot de passe</a></div>
                    </div>
                    <div>
                        <p>Adresse de livraison:</p>
                        <p>{Token.userNom} {Token.userPrenom}</p>
                        <p>Rue de la plage <br />Menzel temim , 8080 Tunisie</p>
                        <p>Tel: {Token.userTel}</p>
                        <a href="#">modifier Adresse</a>
                    </div>

                </div>
            </div>

        </div>
    </div>
    )
}
