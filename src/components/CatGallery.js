import { SRLWrapper } from "simple-react-lightbox"
import keen from "../assets/images/keen.png"
import keen1 from "../assets/images/keen1.jpg"
import keen2 from "../assets/images/keen2.png"
import keen3 from "../assets/images/keen3.png"
import keen4 from "../assets/images/keen4.png"
import keen5 from "../assets/images/keen5.png"
import "../styles/main.css"


export function CatGallery(){
   return(
      <div className="main">
         <SRLWrapper>
         <div id="content-page-one" className="content">
          <div className="row">
            <div className="col-md-6 col-12 col-image-half">
              <img src={keen} alt="New York City - Architecture" />
            </div>
            <div className="col-md-6 col-12 col-image-half">
              <img src={keen1} alt="Between two mountains" />
            </div>
            <div className="col-md-4 col-12 col-image-small">
              <img src={keen2} alt="Parallels building" />
            </div>
            <div className="col-md-4 col-12 col-image-small">
              <img src={keen3} alt="The mist in the forest" />
            </div>
            <div className="col-md-4 col-12 col-image-small">
              <img src={keen4} alt="A beautiful landscape" />
            </div>
            <div className="col-12 col-md-6 col-image-half">
              <img src={keen5} alt="Night in new york" />
            </div>
            </div>
            </div>
         </SRLWrapper>
      </div>
   )
}