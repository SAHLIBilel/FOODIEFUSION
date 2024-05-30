import { useState } from 'react';
import '../Styles/Pages/Login.css';
import axios from "axios";
import Logo from '../Photo/Logo.png';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Login() {
    const [ID, setID] = useState('');
    const [Pass, setPass] = useState('');
    const [erreur, setErreur] = useState(null);
    const signIn = useSignIn();
    const navigate = useNavigate();

    function succees(Position, msg) {
        Swal.fire({
            position: Position,
            icon: "success",
            title: msg,
            showConfirmButton: false,
            timer: 3000
        });
    }

    function Erreur(Position, msg) {
        Swal.fire({
            position: Position,
            icon: "error",
            title: "Oops...",
            text: msg,
            timer: 1500
        });
    }

    function LoginPart(event) {
        event.preventDefault();
        const user = {
            ID: ID,
            Pass: Pass
        };

        axios.post("http://localhost:8001/LoginPart", user)
            .then(res => {
                const { token, isLivreur } = res.data;
                const success = signIn({
                    token: token,
                    expiresIn: 30,
                    tokenType: "Bearer",
                    authState: { token: token, type: isLivreur },
                });

                if (success) {
                    succees("center", "Bon Retour");
                    setErreur(null); // Réinitialiser l'erreur en cas de succès
                    const timer = setTimeout(() => {
                        navigate('/Accueil'); // Remplacer par la route désirée
                    }, 3000);

                    return () => clearTimeout(timer); // Nettoyer le timer
                } else {
                    Erreur("center", "Erreur lors de la connexion");
                }
            })
            .catch(err => {
                Erreur("center", "Vérifiez vos données");
            });
    }

    return (
        <>
            <div id="nav">
                <img src={Logo} alt="Logo FoodieFusion" />
                <p id="Welcome">Espace Partenaire</p>
            </div>
            <div className="login">
                <form onSubmit={LoginPart}>
                    <fieldset>
                        <h1>Bienvenue</h1>
                        <label>Identifiant</label>
                        <input
                            type="text"
                            placeholder="Entrer votre ID"
                            onChange={event => setID(event.target.value)}
                            value={ID}
                        />
                        <label>Mot de passe</label>
                        <input
                            type="password"
                            placeholder="Entrer votre mot de passe"
                            onChange={event => setPass(event.target.value)}
                            value={Pass}
                        />
                        <input type="submit" value="Se connecter" />
                        {erreur && <h2 className="error">{erreur}</h2>}
                    </fieldset>
                </form>
            </div>
        </>
    );
}
