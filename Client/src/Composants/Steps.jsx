import '../Styles/Composants/Steps.css'
import {motion} from 'framer-motion'
function Steps({img,string1,string2}){
    return(
        <motion.div 
        className="Step"
        initial={{opacity:0}}
        whileInView={{ opacity: 1 }}
        transition={{delay:0.2 ,duration:1}}
        exit={{opacity:0}}
        >
            <img src={img} alt="" />
            <div><h1>{string1}</h1>
            <h4>{string2}</h4></div>
            
        </motion.div>
    )
}
export default Steps;