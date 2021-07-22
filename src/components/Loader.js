import { PuffLoader } from "react-spinners"
import "../styles/loader.css"

export function Loader(){
   return(
      <div className="loader">
         <PuffLoader loading />
      </div>
   )
}