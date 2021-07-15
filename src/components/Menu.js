import {FaTwitter} from 'react-icons/fa'
import {FaArtstation} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

import "../styles/menu.css"

export function Menu(){
   return(
      <div className="sidebar">
         <div className="sidebarLinks">
         
            <h2>PORTFOLIO</h2>
            <h3>AQUIRIS</h3>
            <h3>CAT NIGIRI</h3>
            <h3>FREELANCE</h3>
            <h3>PERSONAL PROJECTS</h3>
            <h2>ABOUT</h2>
            <h2>CONTACT</h2>
         </div>
         <div id="menuToggle">
               <input type="checkbox" />
               <span></span>
               <span></span>
               <span></span>
               <ul id="menu">
                  <a href="#"><li>FREELANCE</li></a>
                  <a href="#"><li>AQUIRIS</li></a>
                  <a href="#"><li>CAT NIGIRI</li></a>
                  <a href="#"><li>PERSONAL</li></a>
                  <a href="#"><li>CONTACT</li></a>
                  <a href="#"><li>ABOUT ME</li></a>
               </ul>
            </div>
         <div className="sidebarMedia">
            <a className="anchorTags" href="https://twitter.com/gunmgally">
               <FaTwitter color="black"/>
            </a>
            <a className="anchorTags" href="https://www.artstation.com/ilonareitsma">
               <FaArtstation color="black"/>
            </a>
            <a className="anchorTags" href="https://www.instagram.com/ilonabrp/">
               <FaInstagram color="black"/>
            </a>
            <a className="anchorTags" href="https://www.linkedin.com/in/ilona-reitsma-27490167/">
               <FaLinkedin color="black"/>
            </a>
         </div>

      
      </div>
   )
}

