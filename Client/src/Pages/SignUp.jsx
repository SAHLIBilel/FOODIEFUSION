import React, { useState } from 'react';
import Socialauth from '../Composants/Socialauth';
import '../Styles/Pages/Login.css';
import Logo from "../Images/Logo3.png";
import { motion } from 'framer-motion';
import axios from'axios';
import { verifMail, verifCIN, verifNumber, verifPassword, verifName, verifDate } from '../Fonctions/ControleUser';
import { useNavigate } from 'react-router-dom';
import { Erreur, succees } from "../Fonctions/SwalAlert";

export default function SignUp() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telephone, setTelephone] = useState('');
  const [CIN, setCIN] = useState('');
  const [date, setDate] = useState('');
  const navig = useNavigate();

  function CreeUser(e) {
    e.preventDefault();
    const user = {
      "nom": nom,
      "prenom": prenom,
      "email": email,
      "password": password,
      "telephone": telephone,
      "CIN": CIN,
      "date": date
    };

    axios.post("http://localhost:8001/signup", user)
      .then(res => {
        const msg = res.data.message;
        succees("center", msg);
        navig("/login");
      })
      .catch(err => {
        const msg = err.response.data.error;
        Erreur("center", msg);
      });
  }

  return (
    <motion.form onSubmit={CreeUser}>
      <div className="SignUp">
        <div className="SignUp_div">
          <div className="social">
            <img src={Logo} alt="Logo" />
            <p>Accès Rapide avec:</p>
            <Socialauth />
          </div>
          <div className="traditionnelle">
            <p className="titre">Bienvenue !</p>
            <p className="P_Compte">
              Vous avez déjà un compte ? <a href="/Login">Connectez-vous</a>
            </p>
            <div className="NoPr">
              <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
              <input type="text" placeholder="Prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
            </div>
            <input type="email" placeholder="Adresse Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Mot de Passe" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="number" placeholder="CIN" value={CIN} onChange={(e) => setCIN(e.target.value)} />
            <input type="number" placeholder="Téléphone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <input type="submit" value="S'inscrire" />
          </div>
        </div>
      </div>
    </motion.form>
  );
}
