import Logo from "../Images/Logo.png";
import Logo2 from "../Images/Logo2.png";
import Login from "../Images/Login.png";
import "../Styles/Composants/Navbar.css";
import Error404 from "../Pages/Error404";
import { Link, useNavigate ,useLocation} from "react-router-dom";
import Swal from "sweetalert2";
import ControleurAuth from "../Controleur/ControleurAuth";
import {useIsAuthenticated} from 'react-auth-kit';

export default function Navbar() {
  const Auth=useIsAuthenticated();
  const location=useLocation();
  const Navig=useNavigate()
  function position(pos){
    return location.pathname === pos.value ? 'active' : ''
    console.log( location.pathname === pos.value ? 'active' : '')
  }
  return (
    <>
      <div className="nav">
        <img
          src={Logo}
          alt=""
          className="Logo"
          onClick={() => Navig("./")}
        />
        <img src={Logo2} className="Logo2" alt="" onClick={() => Navig("./")} />
        <div className="links">
          <Link to={"/"} className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
          <Link to={"/Exploiter"} className={location.pathname === '/Exploiter' ? 'active' : ''}>Exploiter</Link>
          <Link to={"/AboutUs"} className={location.pathname === '/AboutUs' ? 'active' : ''}>AboutUs</Link>
        </div>
    
        <ControleurAuth>
        <div className="accounts">
          <button className="Loginb" onClick={() => Navig("./Login")}>
            S'identifier
          </button>
          <img
            src={Login}
            className="Login2"
            onClick={() => Navig("./Login")}
          />
          <button 
          className="signupb"
          onClick={() => Navig("./SignUp")}>
          S'inscrire</button>
        </div>
        </ControleurAuth>
      </div>
    </>
  );
}
