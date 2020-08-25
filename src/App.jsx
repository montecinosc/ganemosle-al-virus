import React from 'react';
import Inicio from './components/Inicio';
import Footer from './components/Footer';
import {Link, withRouter} from 'react-router-dom'

function App() {
  return ( 
  <div className="original">
    <Inicio/>
    <Footer/>
    </div>
  );
}

export default App;