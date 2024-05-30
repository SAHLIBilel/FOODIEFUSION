import Histoire from '../Composants/Histoire'
import Membre from '../Composants/Membre'
import Avis from '../Composants/Avis'
import Apple from '../Images/Essai.png'
import '../Styles/Pages/AboutUs.css'
import { useIsAuthenticated ,useSignOut} from 'react-auth-kit';
export default function AboutUs() {
    const signOut = useSignOut();
    const isAuth =useIsAuthenticated() ;
    //<button onClick={()=>alert(isAuth())}/>
    return (
        <div className="AboutUs">   
            <Histoire />
            <Membre />
            <div className='Aviss'>
                <Avis img={Apple} msg="hello world" />
                <Avis img={Apple} msg="hello world" />
                <Avis img={Apple} msg="hello world" />
                <Avis img={Apple} msg="hello world" />
            </div>


        </div>
    )
}