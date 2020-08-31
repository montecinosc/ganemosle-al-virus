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
import PagTres from './components/PagTres';
import PagSeis from './components/PagSeis';
import Quiz from './components/Quiz';
import Footer from './components/Footer'
import PagCinco from './components/PagCinco';
import Game from './components/Game';

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
          <Route path="/pagTres">
            <PagTres />
          </Route>
          <Route path="/pagSeis">
            <PagSeis />
          </Route>
          <Route path="/pagCinco">
            <PagCinco />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/Game">
            <Game />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
      </div>

    </Router>
    

  );
}

export default App;