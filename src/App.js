import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Projects from './Pages/Projects/';
import About from './Pages/About/';
import NavBar from './Components/NavBar/';
import './App.css';

const App = _ =>{
  return (
    <>
    <Router>
      <NavBar />
        <Switch>
          <Route exact path='/' render={_ => (<About />)} />
          <Route path='/projects' component={Projects}/>
        </Switch> 
    </Router>
    </>
  )


}

export default App;
