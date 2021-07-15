import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./pages/Home"
import { Aquiris } from "./pages/Aquiris"
import { Catnigiri} from "./pages/Catnigiri"
import { Contact } from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
       <Route path="/" exact component={Home} />
       <Route path="/aquiris" component={Aquiris} />
       <Route path="/catnigiri" component={Catnigiri} />
       <Route path="/contact" component={Contact} />
    </BrowserRouter>
  );
}

export default App;
