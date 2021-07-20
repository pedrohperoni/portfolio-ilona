import Masonry from "react-masonry-css"
import keen from "../assets/images/keen.png"
import keen1 from "../assets/images/keen1.jpg"
import keen2 from "../assets/images/keen2.png"
import keen3 from "../assets/images/keen3.png"
import keen4 from "../assets/images/keen4.png"
import keen5 from "../assets/images/keen5.png"
import "../styles/main.css"


export function AquirisGallery(){
   return(
      <div className="main">
      <Masonry
         breakpointCols={{default: 3, 1024: 1}}
         className="my-masonry-grid"
         columnClassName="my-masonry-grid_column">
         <img src={keen1} alt="test" />
         <img src={keen2} alt="test" />
         <img src={keen3} alt="test" />
         <img src={keen4} alt="test" />
         <img src={keen5} alt="test" />
         <img src={keen} alt="test" />
      </Masonry>
   
      </div>
   )
}