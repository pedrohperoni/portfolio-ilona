import { useState } from "react"
import { Menu } from "../components/Menu"
import { Loader } from "../components/Loader"
import { SRLWrapper } from "simple-react-lightbox"
import Masonry from "react-masonry-css"
import images from"../images"
import "../styles/main.css"

let CNImages = images.filter(function(el){
   return el.category === 'catnigiri';
})

export function Catnigiri(){
   const [isLoaded, setIsLoaded] = useState(true);

   function removeSpinner(){
      setIsLoaded(false)
   }

   return(
      <div className="main">
      <Menu />
      <SRLWrapper>
      <Masonry
         breakpointCols={{default: 2, 1024: 1}}
         className="my-masonry-grid"
         columnClassName="my-masonry-grid_column"
      >
         {CNImages.map(image => (
            <>{isLoaded && <Loader />}
               <img src={image.source} alt={image.description} onLoad={removeSpinner}/>    
            </>
         ))}
      </Masonry>
      </SRLWrapper>
      </div>
   )
}