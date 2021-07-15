import "../styles/home.css"
import landingImg from "../assets/images/landing.jpg"
import { Menu } from "../components/Menu";


export function Home(){
   return(
      <div>
         <div className="container">
         <div className="sidebar">
            <Menu />
         </div>
         <div className="image">
            <img src={landingImg} alt="landing" />
         </div>
         </div>
      </div>
   )
}