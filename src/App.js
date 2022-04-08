import {useState} from 'react'
import Home from './Home.js'
import Info from './Info.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
   <Router>
   <Switch>
   <Route exact path="/">
   <Home />
   </Route>
   <Route path='/info/:id'>
   <Info />
   </Route>
   </Switch>
   </Router>
  );
}

export default App;
