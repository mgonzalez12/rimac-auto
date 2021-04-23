import './App.css';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import Plan from './page/Plan';
import SinDato from './page/SinDato';
import Home from './page/Home';
import Gracias from './page/Gracias';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/gracias">
            <Gracias />
          </Route>
          <Route path="/plan">
            <Plan />
          </Route>
          <Route path="/sinDato">
            <SinDato />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
