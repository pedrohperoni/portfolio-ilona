import { BrowserRouter, Route } from "react-router-dom";
import SimpleReactLightbox from 'simple-react-lightbox'
import { Home } from "./pages/Home"
import { Aquiris } from "./pages/Aquiris"
import { Catnigiri} from "./pages/Catnigiri"
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Personal } from "./pages/Personal";
import { Freelance } from "./pages/Freelance";

function App() {
  return (
   <SimpleReactLightbox>
    <BrowserRouter>
       <Route path="/" exact component={Home} />
       <Route path="/aquiris" exact component={Aquiris} />
       <Route path="/catnigiri" exact component={Catnigiri} />
       <Route path="/contact" exact component={Contact} />
       <Route path="/about" exact component={About} />
       <Route path="/personal" exact component={Personal} />
       <Route path="/freelance" exact component={Freelance} />
    </BrowserRouter>
    </SimpleReactLightbox>
  );
}

export default App;
