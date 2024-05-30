import Button from "../Composant/Button"
import InfoBar from "../Composant/InfoBar"
import help from "../Photo/help.png"
import loupe from "../Photo/package.png"
import plus from "../Photo/plus.png"
import stats from "../Photo/stats.png"
import "../Styles/Pages/Accueil.css"
import { useSignOut } from "react-auth-kit"
import { useNavigate } from "react-router-dom"
export default function Accueil(){
    const SignOut=useSignOut()
    const navig=useNavigate()
    return(
        <>
        <InfoBar/>
        <div id="Accueil">
        <button className="deconnexion-button" onClick={()=>{SignOut();navig("/")}}>Se deconnecter</button>
        <h1 >Interface Partenaire</h1>
        <div id="fonctions">
            <div id="func">
            <Button img={plus} alt={"proposer produit"} link={"../proposer"}/>
            <p>proposer produit</p>
            </div>
            <div id="func">
            <Button img={stats} alt={"Consulter opération financiére"} link={"../Consulter"} sec={0.1}/>
            <p>Consulter opération</p>
            </div>
            <div id="func">
            <Button img={help} alt={"Déposer reclamation"} link={"../reclamer"} sec={0.3}/>
            <p>Déposer reclamation</p>
            </div>
            <div id="func">
            <Button img={loupe} alt={"Attribuer livraison"} link={"/Accueil"} sec={0.5} />
            <p>Attribuer livraison</p>
            </div>
        </div>
        </div>
        </>
    )
}