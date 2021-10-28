import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home.js'
import Portfolio from './components/pages/Portfolio.js';
import Team from './components/pages/Team';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component = {Home} />
          <Route path='/Portfolio' exact component = {Portfolio} />
          <Route path='/Team' exact component = {Team} />
        </Switch>
      </Router>
        
    </>
  );
}

export default App;
