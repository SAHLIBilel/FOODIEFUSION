export class Client {
    constructor(data) {
      this.ID = data.ID;
      this.CIN = data.CIN;
      this.Nom = data.Nom;
      this.Prenom = data.Prenom;
      this.Email = data.Email;
      this.Mot_de_Passe = data.Mot_de_Passe;
      this.Tel = data.Tel;
      this.Date_Naissance = data.Date_Naissance;
      this.Classement = data.Classement;
    }
  }
  export class Restaurant {
    constructor(data) {
      this.ID = data.ID;
      this.M_Viscale = data.M_Viscale;
      this.Email = data.Email;
      this.Mot_de_Passe = data.Mot_de_Passe;
      this.Nom_Utilisateur = data.Nom_Utilisateur;
      this.Tel = data.Tel;
      this.Classement = data.Classement;
      this.Etat = data.Etat;
      this.Directeur = data.Directeur;
      this.Localisation_GPS = data.Localisation_GPS;
      this.Horaire = data.Horaire;
    }
  }
  export class Livreur {
    constructor(data) {
      this.ID = data.ID;
      this.Nom = data.Nom;
      this.Prenom = data.Prenom;
      this.Email = data.Email;
      this.Mot_de_Passe = data.Mot_de_Passe;
      this.Vehicule = data.Vehicule;
      this.Localisation_GPS = data.Localisation_GPS;
      this.Horaire = data.Horaire;
      this.Telephone = data.Telephone;
      this.Etat = data.Etat;
      this.Classement = data.Classement;
    }
  }
    