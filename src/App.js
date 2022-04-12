import {useState} from 'react'
import Home from './Home.js'
import Info from './Info.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

// Background: il colore del background che verrà passato ai child components
  const [background, setBackground] = useState("#f1f2f0")
// Funzione che ad ogni chiamata, in base al numero random uscito, darà un colore diverso alla variabile background.
  const changeColors = () => {
    const random = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    if(random === 1){
      setBackground("#ffbf66")
    }
    if(random === 2){
      setBackground("#C7AD24")
    }
  }
  changeColors()

  return (
   <Router>
   <Switch>
   <Route exact path="/">
   <Home colors={background} changeColors={changeColors} />
   </Route>
   <Route path='/info/:id'>
   <Info colors={background} />
   </Route>
   </Switch>
   </Router>
  );
}

export default App;
