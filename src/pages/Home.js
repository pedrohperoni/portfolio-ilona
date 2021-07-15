import "../styles/home.css"
import landingImg from "../assets/images/landing.jpg"
import { Menu } from "../components/Menu";


export function Home(){
   return(
      <div>
         <div className="container">
            <Menu />
            <div className="image">
               <img className="coverArt" src={landingImg} alt="landing" />
            </div>
         </div>
      </div>
   )
}