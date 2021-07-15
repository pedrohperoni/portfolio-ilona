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
         <Link style={{ textDecoration: 'none' }} to="/"><h2>PORTFOLIO</h2></Link>  
            <Link style={{ textDecoration: 'none' }} to="/aquiris"><h3>AQUIRIS</h3></Link>    
            <Link style={{ textDecoration: 'none' }} to="/catnigiri"><h3>CAT NIGIRI</h3></Link>  
            <Link style={{ textDecoration: 'none' }} to="/personal"><h3>PERSONAL</h3></Link>  
            <Link style={{ textDecoration: 'none' }} to="/freelance"><h3>FREELANCE</h3></Link>  
            <Link style={{ textDecoration: 'none' }} to="/about"><h2>ABOUT</h2></Link>  
            <Link style={{ textDecoration: 'none' }} to="/contact"><h2>CONTACT</h2></Link>  
         </div>
         <div id="menuToggle">
               <input type="checkbox" />
               <span></span>
               <span></span>
               <span></span>
               <ul id="menu">
               <Link style={{ textDecoration: 'none' }} to="/"><a><li>HOME</li></a></Link>
               <Link style={{ textDecoration: 'none' }} to="/freelance"><a><li>FREELANCE</li></a></Link>
               <Link style={{ textDecoration: 'none' }} to="/aquiris"><a><li>AQUIRIS</li></a></Link>
               <Link style={{ textDecoration: 'none' }} to="/catnigiri"><a><li>CAT NIGIRI</li></a></Link>
               <Link style={{ textDecoration: 'none' }} to="/personal"><a><li>PERSONAL</li></a></Link>
               <Link style={{ textDecoration: 'none' }} to="/contact"><a><li>CONTACT</li></a></Link>
               <Link style={{ textDecoration: 'none' }} to="/about"><a><li>ABOUT ME</li></a></Link>
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

