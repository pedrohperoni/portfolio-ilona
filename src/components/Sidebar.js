import logo from '../assets/images/logo.png'
import {FaTwitter} from 'react-icons/fa'
import {FaArtstation} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'




export function Sidebar(){
   return(
      <div className="sidebar">
         <img src={logo} alt="logo" />
         <div className="sidebarLinks">
            <h2>PORTFOLIO</h2>
            <h3>sei la</h3>
            <h2>RESOURCES</h2>
            <h2>ARTBOOKS</h2>
            <h2>ABOUT</h2>
            <h2>FAQ</h2>
            <h2>CONTACT</h2>
         </div>
         <div className="sidebarAnchor">
            <a href="https://twitter.com/gunmgally">
               <FaTwitter color="black"/>
            </a>
            <a href="https://www.artstation.com/ilonareitsma">
               <FaArtstation color="black"/>
            </a>
            <a href="https://www.instagram.com/ilonabrp/">
               <FaInstagram color="black"/>
            </a>
            <a href="https://www.linkedin.com/in/ilona-reitsma-27490167/">
               <FaLinkedin color="black"/>
            </a>
         </div>

      
      </div>
   )
}