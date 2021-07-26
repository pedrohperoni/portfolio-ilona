import {FaTwitter} from 'react-icons/fa'
import {FaArtstation} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom"

import "../styles/menu.css"

export function Menu(){
   return(
      <div className="sidebar">
         <img className="logoImg" src={logo} alt="logo" />  
         <div className="sidebarLinks">  
         <Link style={{ textDecoration: 'none', color: 'inherit'  }} to="/"><h2>PORTFOLIO</h2></Link>  
            <Link style={{ textDecoration: 'none', color: 'inherit' }}to="/aquiris"><h3>AQUIRIS</h3></Link>    
            <Link style={{ textDecoration: 'none', color: 'inherit'  }} to="/catnigiri"><h3>CAT NIGIRI</h3></Link>  
            <Link style={{ textDecoration: 'none', color: 'inherit'  }} to="/personal"><h3>PERSONAL</h3></Link>  
            <Link style={{ textDecoration: 'none', color: 'inherit'  }} to="/freelance"><h3>FREELANCE</h3></Link>  
            <Link style={{ textDecoration: 'none', color: 'inherit'  }} to="/about"><h2>ABOUT</h2></Link>  
            <Link style={{ textDecoration: 'none', color: 'inherit'  }} to="/contact"><h2>CONTACT</h2></Link>  
         </div>
         <div id="menuToggle">
               <input type="checkbox" />
               <span></span>
               <span></span>
               <span></span>
               <ul id="menu">
               <Link style={{ textDecoration: 'none' }} to="/"><li>HOME</li></Link>
               <Link style={{ textDecoration: 'none' }} to="/freelance"><li>FREELANCE</li></Link>
               <Link style={{ textDecoration: 'none' }} to="/aquiris"><li>AQUIRIS</li></Link>
               <Link style={{ textDecoration: 'none' }} to="/catnigiri"><li>CAT NIGIRI</li></Link>
               <Link style={{ textDecoration: 'none' }} to="/personal"><li>PERSONAL</li></Link>
               <Link style={{ textDecoration: 'none' }} to="/contact"><li>CONTACT</li></Link>
               <Link style={{ textDecoration: 'none' }} to="/about"><li>ABOUT ME</li></Link>
               </ul>
            </div>
         <div className="sidebarMedia">
            <a className="anchorTags" href="https://twitter.com/gunmgally">
               <FaTwitter color="white"/>
            </a>
            <a className="anchorTags" href="https://www.artstation.com/ilonareitsma">
               <FaArtstation color="white"/>
            </a>
            <a className="anchorTags" href="https://www.instagram.com/ilonabrp/">
               <FaInstagram color="white"/>
            </a>
            <a className="anchorTags" href="https://www.linkedin.com/in/ilona-reitsma-27490167/">
               <FaLinkedin color="white"/>
            </a>
         </div>

      
      </div>
   )
}

