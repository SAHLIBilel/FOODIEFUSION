import { useState } from "react";
import axios from "axios";
import "../Styles/Pages/Contact.css";
import Call from '../Images/Call.png';
import Email from '../Images/Email.png';
import { motion } from 'framer-motion';
import {succees} from '../Fonctions/SwalAlert'
import {useNavigate} from 'react-router-dom'
export default function Contact() {
  const [nom, setNom] = useState('');
  const [CIN, setCIN] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [numCommande, setNumCommande] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState(null);
  let msg = null;
  const navig=useNavigate()

  function getReclam(e) {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('nom', nom);
    formData.append('CIN', CIN);
    formData.append('email', email);
    formData.append('telephone', telephone);
    formData.append('description', description);
    formData.append('img', img);  // Assurez-vous que 'img' est le nom du champ attendu par Multer
  
    axios.post("http://localhost:8001/reclamation", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => {
      const msg=res.data.message;
      console.log(msg); // Vérifiez la réponse du serveur
      // Affichez un message à l'utilisateur en fonction de la réponse du serveur
      succees("center",msg)
      navig("/")
    })
    .catch(err => {
      console.error(err); // Affichez l'erreur dans la console pour le débogage
      // Affichez un message d'erreur à l'utilisateur
    });
  }
  

  return (
    <div className="contact">
      <motion.div
        className="affiche_contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 2 }}>
        <h1>Nous sommes à l'écoute</h1>
        <h2>partagez votre expérience ou posez vos questions</h2>
      </motion.div>
      <motion.div
        className="reclam"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <motion.div
          className="mail"
          initial={{ opacity: 0, x: -400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          exit={{ opacity: 0 }}>
          <p id="Contacter">Contactez-nous pour toute question !</p>
          <div className="call">
            <img src={Call} alt="Call" />
            <div>
              <p>Ouvrez une discussion ou appelez-nous au:</p><br />
              <p>+(216)71 123 456</p>
            </div>
          </div>
          <div className="Email">
            <img src={Email} alt="Email" />
            <div>
              <p>Envoyer un mail:</p><br />
              <p>info@tunisianeatsconnect.com</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="form"
          initial={{ opacity: 0, x: +400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          exit={{ opacity: 0 }}>

          <form onSubmit={getReclam}>

            <legend>Remplir ce formulaire</legend>
            <div className="Nom">
              <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
              <input type="Number" placeholder="CIN" required value={CIN} onChange={(e) => setCIN(e.target.value)} />
            </div>
            <div className="coord">
              <input type="email" placeholder="E-mail" required value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="tel" required placeholder="Telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
            </div>
            <div className="coord">
              <input type="number" placeholder="N° Commande" required value={numCommande} onChange={(e) => setNumCommande(e.target.value)} />
              <br />
              <br />
              <input type="text" placeholder="Description" maxLength="10000" style={{ padding: '5', width: "450px", height: "100px" }} value={description} onChange={(e) => setDescription(e.target.value)} />
              <br />
              Insérez une image indiquant le problème trouvé dans le produit fourni :
              <input type="file" name="image" accept="image/*" onChange={(e) => setImg(e.target.files[0])} />
            </div>

            <button>Envoyer</button>
            
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
