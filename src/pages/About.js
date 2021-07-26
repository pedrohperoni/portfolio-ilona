import { Menu } from "../components/Menu";
import ilona from "../assets/images/ilona.jpg"


export function About(){
   return(
      <div>
         <Menu />
         <div className="main">
         <header className="about">
            <h1>ILONA REITSMA</h1>
            <span></span>
         </header>
         <main className="aboutContainer">
         <div className="pContainer">
            <p className="paragraph">
            My name is Ilona Reitsma and I have a degree in Game Design & Architecture from NHTV and I love to draw and Illustrate. I work in a wide range of 2D Art in the Games Industry, I am specialised in Character Concept Art but I have worked on various roles including but not limited to Marketing (games), UI Design, Prop Concept, 3D modeling etc. 
            </p>
            <br/>
            <p className="paragraph">
            Some of my past projects and clients have included <a href="http://www.blizzard.com/en-us/">Blizzard,</a> <a href="http://www.ea.com/">EA</a><a href="http://en.cdprojektred.com/">CD Projekt Red</a> and <a href="http://www.riotgames.com/">Riot</a> while I was working at <a href="http://playbrain.jp/">PlayBrain</a> in Japan, I also worked on the game <a href="http://frugame.com/"> FRU by Through Games.</a>
            </p>
            <br/>
            <p className="paragraph">
            Currently I am waiting for the release Keen from <a href="http://www.catnigiri.com/">Cat Nigiri</a>, a project I have been highly involved :), Meanwhile am now working at <a href="http://www.aquiris.com.br/">Aquiris</a> on their <a href="http://looneytuneswom.scopely.com/">Looney Tunes Mayhem Game.</a>
            </p>
            <br/>
            
            <p className="paragraph">Contact me: <a href= "mailto: ilonabrp@gmail.com"><strong>ilonabrp@gmail.com</strong></a></p>
            </div>
            <div className="portrait">
            <img src={ilona} alt="portrait" />
            </div>

         </main>
      </div>
      </div>
   )
}