import React, { useState } from 'react';
import axios from "axios";
import '../Styles/Pages/Login.css';
import Logo from "../Images/Logo3.png";
import FB from "../Images/facebook.png";
import Apple from "../Images/Apple.png";
import Google from "../Images/search.png";
import { Link, useNavigate  } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useSignIn } from 'react-auth-kit';
import {useIsAuthenticated} from 'react-auth-kit';
import { succees } from '../Fonctions/SwalAlert';

function Login() {
  const signIn = useSignIn();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated()

  function getUser(event) {
    event.preventDefault();
    axios.post('http://localhost:8001/login', { email, password })
      .then(res => { 
        const { token } = res.data;
        console.log(token)
        

       const success = signIn({
          token: token,
          expiresIn: 30,
          tokenType: "Bearer",
          authState: { email: email , token:token },
        });
        
        if (success) {
          if(isAuthenticated)
          succees("center","Bienvenue")
        // Stocker la token dans le localStorage
          localStorage.setItem('token', token);
          navigate('/Exploiter'); 
        } else {
          alert('Failed to sign in');
        }
      })
      .catch(err => {
        Swal.close();
        if (err.response && err.response.status === 401) {
          setError('Identifiant ou mot de passe incorrect.');
        } else {
          setError("err.message");
        }
      });
  }

  return (
    <form onSubmit={getUser}>
      <div className="Login">
        <div className="Login_div">
          <div className="social">
            <img src={Logo} alt="Logo" />
            <p>Accès Rapides avec:</p>
            <div className="Social_Logos">
              <img src={FB} alt="Facebook" onClick={() => alert("Login avec Facebook")} />
              <img src={Google} alt="Google" onClick={() => alert("Login avec Google")} />
              <img src={Apple} alt="Apple" onClick={() => alert("Login avec Apple")} />
            </div>
          </div>
          <div className="traditionnelle">
            <p className="titre">Bon Retour !</p>
            <p className="P_Compte">
              Pas encore Membre? <a href="/SignUp">S'inscrire</a>
            </p>
            
            <input type="email" placeholder="Adresse Mail" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Mot de Passe" value={password} onChange={e => setPassword(e.target.value)} />
            <p id='error'>{error}</p>
            <a href='PassRes' id="P_Oubliée" >
              Mot de Passe Oubliée?
              </a>
            <input type="submit" value="Se Connecter"/>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
