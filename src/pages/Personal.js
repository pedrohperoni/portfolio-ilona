import { useState } from "react"
import { Menu } from "../components/Menu"
import Masonry from "react-masonry-css"
import "../styles/main.css"
import images from"../images"
import { Loader } from "../components/Loader"
import { SRLWrapper } from "simple-react-lightbox"


let CNImages = images.filter(function(el){
   return el.category === 'personal';
})

export function Personal(){
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

