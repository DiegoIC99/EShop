import './App.css';
import './styles/index.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './NavBar'
import Categories from './pages/Categories'
import ItemDetail from './pages/ItemDetail'
import CartDetail from './pages/CartDetail'

import ContextProvider from './Context/ContextProvider'

function App() {
  return (
    <ContextProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/Productos/:hasCategory/:idCategory'} exact component={Categories} />
          <Route path={'/Productos'} exact component={Categories} />
          <Route path={'/Detalle/:idProducto'} exact component={ItemDetail} />
          <Route path={'/CartDetail'} exact component={CartDetail} />
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;