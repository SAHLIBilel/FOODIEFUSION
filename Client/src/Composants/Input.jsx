import '../Styles/Composants/Input.css'
export default function Input({type,place}){
    return(
        <div id='Input'>
            <input type={type} placeholder={place}></input>
        </div>
    )
}