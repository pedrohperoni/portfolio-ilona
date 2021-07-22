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
         <main className="about">
            <p className="paragraph">
            My name is Ilona Reitsma and I have a degree in Game Design & Architecture from NHTV and I love to draw and Illustrate. I work in a wide range of 2D Art in the Games Industry, I am specialised in Character Concept Art but I have worked on various roles including but not limited to Marketing (games), UI Design, Prop Concept, 3D modeling etc. 
            </p>
            <br/>
            <p className="paragraph">
            Some of my past projects and clients have included Blizzard, EA, CD Project Red and Riot while I was working at PlayBrain in Japan, I also worked on the game FRU by Through Games.
            </p>
            <br/>
            <p className="paragraph">
            Currently I am waiting for the release Keen from Cat Nigiri, a project I have been highly involved :), Meanwhile am now working at Aquiris on their Looney Tunes Mayhem Game.
            </p>
            <br/>
            <p className="paragraph">My email: ilonabrp@gmail.com</p>
            <div className="portrait">
            <img src={ilona} alt="portrait" />
            </div>

         </main>
      </div>
      </div>
   )
}