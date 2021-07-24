import './App.css';
import './styles/index.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './NavBar'
import Categories from './pages/Categories'
import ItemDetail from './pages/ItemDetail'

import {ContextProvider} from './Context/ContextProvider'

export default () =>
  <ContextProvider>
    <App></App>
  </ContextProvider>

function App() {
  return (
      <Router>
        <NavBar />
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/Productos/:hasCategory/:idCategory'} exact component={Categories} />
          <Route path={'/Productos'} exact component={Categories} />
          <Route path={'/Detalle/:idProducto'} exact component={ItemDetail} />
        </Switch>
      </Router>
  );
}