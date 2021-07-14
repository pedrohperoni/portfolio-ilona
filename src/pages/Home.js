import { Sidebar } from "../components/Sidebar";
import "../styles/home.css"
import landingImg from "../assets/images/landing.jpg"


export function Home(){
   return(
      <div>
         <div className="container">
         <div className="sidebar">
            <Sidebar/>
         </div>
         <div className="image">
            <img src={landingImg} alt="landing" />
         </div>
         </div>
      </div>
   )
}