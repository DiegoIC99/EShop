import './App.css';
import './styles/index.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './NavBar'
import Categories from './pages/Categories'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/Productos/:hasCategory/:idCategory'} exact component={Categories} />
        <Route path={'/Productos'} exact component={Categories} />
      </Switch>
    </Router>
  );
}

export default App;
