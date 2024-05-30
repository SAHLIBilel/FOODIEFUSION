import Fb from "../Images/facebook.png";
import Apple from "../Images/Apple.png";
import Google from "../Images/search.png";
export default function Socialauth() {
  return (
    <div className="Social_Logos">
      <img src={Fb} alt="Facebook" onClick={() => alert("Inscription avec Facebook")} />
      <img src={Google} alt="Google" onClick={() => alert("Inscription avec Google")} />
      <img src={Apple} alt="Apple" onClick={() => alert("Inscription avec Apple")} />
    </div>
  )
}