import "../Styles/Composants/PremierSection.css";
import { motion } from "framer-motion";
import {succees , Erreur,Choix_Binaire} from '../Fonctions/SwalAlert';
import {useNavigate} from 'react-router-dom'
import { useIsAuthenticated } from 'react-auth-kit';
import Swal from 'sweetalert2'
export default function PremierSection() {
  const navig = useNavigate()
  const isAuthenticated = useIsAuthenticated();
  const link= isAuthenticated ? "/Exploiter" : "/Login"
  function showLoadingAlert() {
    Swal.fire({
      title: 'Chargement en cours',
      html: '<i class="fas fa-spinner custom-loading-animation"></i> Merci de patienter...',
      showCloseButton: false,
      showCancelButton: false,
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      timer: 2500
    });
  }
  return (
    <div className="Section_1">
      <div className="section_1_1">
        <br />
        <motion.p
          className="titre"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          FoodieFusion
        </motion.p>
        <motion.p
          className="slogant"
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Explorez le <span>Gout</span>,Embrassez la <span>Diversité</span>
        </motion.p>
        <motion.button
          className="get_Started"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          onClick={()=>{showLoadingAlert();navig(link)}}>
          Commencer
        </motion.button>
      </div>
    </div>
  );
}
