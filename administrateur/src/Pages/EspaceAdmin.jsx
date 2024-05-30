
import InfoBar from  "../Composant/InfoBar"
import Button from "../Composant/Button"
import AddUser from "../Photos/add-user.png"
import Examiner from "../Photos/info.png"
import Partenariat from "../Photos/agreement.png"
import "../Styles/Pages/EspaceAdmin.css"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
export default function EspaceAdmin(){
    const navig  =useNavigate()
    return(
        <>
        <InfoBar/>
        <div id="DEC">
        <button className="deconnexion-button" onClick={()=>{navig("/")}}>Se deconnecter</button>
        <div className="EspaceAdmin">
            <div id="button">
            <Button img={AddUser} link="/" sec={0.1} />
            <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.5}}
            >Ajouter Admin</motion.p>
            </div>
            <div id="button">
            <Button img={Examiner} link="/" sec={0.3}/>
            <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.7}}
            >Juger les reclamation</motion.p>
            </div>
            <div id="button">
            <Button img={Partenariat} link="/" sec={0.5}/>
            <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.9}}
            >Examiner les demandes</motion.p>
            </div>
            </div>
            
            
        </div>
        </>

    )
}