import React from 'react';
// import Inicio from './components/Inicio';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Home from './components/Home'
import PagCuatro from './components/PagCuatro'
import Inicio from './components/Inicio'

function App() {
  return (
    <Router>
      <div className="App" >
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/pagCuatro">
            <PagCuatro />
          </Route>
          <Route path="/inicio">
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;