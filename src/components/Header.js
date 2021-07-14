import {FaTwitter} from 'react-icons/fa'
import {FaArtstation} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

import "../styles/header.css"

export function Header(){
   return(
      <div className="header">
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
         <div className="headerMedia">
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