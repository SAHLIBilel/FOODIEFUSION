import Input from "../Composants/Input"

export default function DemandePartenariat(){
    function EnvoieDemande(){

    }
    return(


        <form onSubmit={EnvoieDemande}>
            <h1>Demande votre Partenariat</h1>
            <label>Nom:</label><br/>
            <input type="text" placeholder="entrer votre Nom: "/>
            
        </form>
    )
}