import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Projects from './Projects.js';
import About from './About.js';
import NavBar from './components/NavBar'
import './App.css';

const App = _ =>{
  return (
    <>
    <Router>
      <NavBar /> 
      {/* Router */}
        {/* <Route exact path='/' component={About}/>
        <Route exact path='/projects' component={Projects}/> */}
          {/* Links */}
            {/* <Link href='/' className='item'> About</Link>
            <Link href='/Projects' className='item'> Projects</Link> */}
    </Router>
    </>
  )


}

export default App;
