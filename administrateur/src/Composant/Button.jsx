import '../Styles/Composant/Button.css'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
export default function Button({img,link,sec}){
    const navig=useNavigate()
    return(
        <>
        <motion.img 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{ delay: 0.15+sec, duration: 1 }}
            src={img} id='Button'  onClick={()=>{
                navig(link)
        }}/>
        </>
    )
}