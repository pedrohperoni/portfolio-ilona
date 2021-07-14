import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./pages/Home"
import { Aquiris } from "./pages/Aquiris"

function App() {
  return (
    <BrowserRouter>
       <Route path="/" exact component={Home} />
       <Route patth="/aquiris" component={Aquiris} />
    </BrowserRouter>
  );
}

export default App;
