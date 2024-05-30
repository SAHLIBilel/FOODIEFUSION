import '../Styles/Pages/Login.css';
import Logo from "../Images/Logo3.png";


export default function PasswordReset(){
    function resetPass(event){
        event.preventDefault();
    }
    return (
        <form onSubmit={resetPass}>
            <div className="Login">
        <div className="Login_div">
          <div className="social">
            <img src={Logo} alt="Logo" />
            
          </div>
          <div className="traditionnelle">
            <p className="titre" style={{fontSize:'20px' , paddingBottom:'15px'}}>Réinitialisation du Mot de Passe</p>
            <input type="email" placeholder="Entrer votre mail"  />
            <input type="number" placeholder="Numero de CIN"  />
            <input type="number" placeholder="Numero de Telephone"  />
            <p id='error'></p>
            <a href='Login' id="P_Oubliée" >
                Retourner à la page de connexion
            </a>
            <input type="submit" value="Réinitialiser"/>
          </div>
        </div>
      </div>
        </form>
    )
}