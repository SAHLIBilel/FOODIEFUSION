import '../Styles/Composants/AppMobile.css'
import Appmobile from '../Images/MobileApp.png'
import appstore from '../Images/app-store.png'
import playstore from '../Images/playstore.png'
export default function AppMobile(){
    return(
        <div className="App">
            <div>
                <h1>Trouver une meilleure expérience culinaire</h1>
                <h3>Nous l'avons fait avec soin et simplicité</h3>
                <h3>Combiné avec les ingrédients, cela crée de magnifiques expériences</h3>
                <div id="stores">
                    <button id='Googleplay'><img src={playstore} />Google Play</button>
                    <button id='Applestore'><img src={appstore} />Apple Store</button>
                </div>
            </div>
            <img src={Appmobile} id='app'/>
        </div>
    )
}