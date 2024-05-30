import InfoBar from "../Composant/InfoBar"
import Produit from "../Composant/Produit"
import '../Styles/Pages/Proposerproduit.css'
import { useNavigate } from "react-router-dom";
export default function ProposerProduit() {
    const navig=useNavigate()
    return (
        <><InfoBar />
        <div className="proposerproduit">
            <div className="button-container">
                <button className="propose-button">Proposer un produit</button>
                <button className="home-button" onClick={()=>{navig("../Accueil")}}>Accueil</button>
            </div>
            <div className="produit-container">
                <Produit ret={0.2}/>
                <Produit ret={0.4}/>
                <Produit ret={0.6}/>
                <Produit ret={0.8}/>
                <Produit ret={1}/>
            </div>
        </div>
        </>
    );
}