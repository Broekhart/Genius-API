import {useState} from 'react'
import Home from './Home.js'
import Info from './Info.js'
import {HashRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

// Background: il colore del background che verrà passato ai child components
  const [background, setBackground] = useState("#f1f2f0")

  return (
   <Router>
   <HashRouter basename="/">
   <Switch>
   <Route exact path="/">
   <Home colors={background} changeColors={changeColors} />
   </Route>
   <Route path='/info/:id'>
   <Info colors={background} />
   </Route>
   </Switch>
   </HashRouter>
   </Router>
  );
}

export default App;
