import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import fs from 'fs';
import { ControleUser } from './Fonctions/ControleUser.js';
import { DBConnexion } from './Fonctions/DBConnexion.js';


const app = express();
app.use(cors());
app.use(express.json());
const port = 8001;
// Configuration de la connexion MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0000',
  database: 'FoodieFusion'
});
DBConnexion(db);
const upload = multer({ dest: 'uploads/' });  // Les fichiers seront stockés temporairement dans le dossier 'uploads'

// Route pour le login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql_req = 'SELECT ID, CIN, NOM, PRENOM, TEL FROM Clients WHERE Email=? AND Mot_de_Passe=?';

  db.query(sql_req, [email, password], (err, data) => {
    if (err) {
      console.error("Erreur SQL:", err);
      res.status(500).json({ error: "Erreur interne du serveur" });
      return;
    }

    if (data.length > 0) {
      const user = data[0];
      console.log(user);
      const secretKey = 'FOODIE';
      const payload = {
        userID: user.ID,
        userCIN: user.CIN,
        userNom: user.NOM,
        userPrenom: user.PRENOM,
        userTel: user.TEL,
        userEmail: email
      };
      console.log(payload);

      jwt.sign(payload, secretKey, { expiresIn: '2h' }, (jwtErr, token) => {
        if (jwtErr) {
          console.error("Erreur lors de la génération du token JWT:", jwtErr);
          res.status(500).json({ error: "Erreur interne du serveur lors de la génération du token" });
          return;
        }
        res.json({ token });
      });
    } else {
      res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
  });
});

// Route pour l'inscription
app.post('/signup', (req, res) => {
  const { nom, prenom, email, password, telephone, CIN, date } = req.body;

  if (ControleUser(req.body)) {
    let ID = (CIN, nom) => {
      let c = 0;
      for (let i = 0; i < 8; i++) {
        c += parseInt(CIN[i]);
      }
      const d = new Date();
      return nom.substring(0, 2).toUpperCase() + c.toString() + d.getDay();
    };
    let sql = "INSERT INTO Clients (ID, CIN, NOM, PRENOM, EMAIL, MOT_de_Passe, tel, Date_Naissance, Classement) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, [ID(CIN, nom), CIN, nom, prenom, email, password, telephone, date, 1], (err, data) => {
      if (err) {
        console.error("Erreur SQL lors de l'inscription:", err);
        res.status(500).json({ error: "Erreur lors de la création du compte" });
        return;
      }
      if (data.affectedRows > 0) {
        res.status(201).json({ message: "Nous sommes très heureux de vous accueillir dans notre communauté !" });
        console.log("Le nouveau client est bien affecté dans la base de données");
      } else {
        res.status(500).json({ error: "Aucune donnée insérée." });
      }
    });
  } else {
    res.status(400).json({ error: "Validation des données utilisateur échouée." });
  }
});

// Route pour le dépôt des réclamations
app.post('/reclamation', upload.single('img'), (req, res) => {
  const { nom, CIN, email, telephone, description } = req.body;
  const file = req.file;

  if (!file) {
    res.status(400).json({ error: "Aucun fichier image fourni" });
    return;
  }

  // Lire le contenu du fichier image
  fs.readFile(file.path, (err, data) => {
    if (err) {
      console.error("Erreur lors de la lecture du fichier:", err);
      res.status(500).json({ error: "Erreur lors de la lecture du fichier" });
      return;
    }

    const d = new Date();
    let SQL = "INSERT INTO Reclamations (Date_Reclamation, Nom_rec, Motif, CIN, Email, Tel, Photo_AC1) VALUES (?, ?, ?, ?, ?, ?, ?)";
    
    // Insérer le contenu binaire du fichier dans la base de données
    db.query(SQL, [d, nom, description, CIN, email, telephone, data], (err, data) => {
      if (err) {
        console.error("Erreur SQL lors de l'insertion de la réclamation:", err);
        res.status(500).json({ error: "Erreur lors de la création de la réclamation" });
        return;
      }
      if (data.affectedRows > 0) {
        res.status(201).json({ message: "Votre réclamation est prise en considération !!" });
        console.log("Réclamation insérée dans la base");
      } else {
        res.status(500).json({ error: "Aucune donnée insérée." });
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
