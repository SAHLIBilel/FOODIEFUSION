import { useState } from 'react'
import SideBar from '../Images/SideBar.png'
import '../Styles/Composants/EspaceUser.css'
import {motion} from 'framer-motion'
import Menu from './Menu'
export default function EspaceUser(){
    const [etat,setEtat]=useState(false)
    return(
        <div className='side'>
            <motion.img 
            className="icon" 
            src={SideBar}
            onClick={()=>{setEtat(!etat)}}
            whileHover={{ scale: 1.1 }}/>
            {etat &&<Menu/>}
        </div>
    )
}