import React from 'react';
import {Switch, Route} from "react-router-dom"
import Header from './components/Header'
import Listado from './pages/Listado'
import Detalle from './pages/Detalle'
import Appcss from './App.css'
import 'materialize-css/dist/css/materialize.min.css'

function App() {
  return (
    <div className= 'container'>
      <Header />
      
      <Switch>
                <Route exact path="/">
                    <Listado />
                </Route>
                
                <Route path="/">
                    <Detalle />
                </Route>
            </Switch>
    </div>
  );
}

export default App;
