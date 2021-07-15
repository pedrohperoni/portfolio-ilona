import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./pages/Home"
import { Aquiris } from "./pages/Aquiris"
import { Catnigiri} from "./pages/Catnigiri"

function App() {
  return (
    <BrowserRouter>
       <Route path="/" exact component={Home} />
       <Route path="/aquiris" component={Aquiris} />
       <Route path="/catnigiri" component={Catnigiri} />
    </BrowserRouter>
  );
}

export default App;
