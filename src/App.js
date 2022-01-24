import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home.js'
import Portfolio from './components/pages/Portfolio.js';
import Team from './components/pages/Team';
import Services from './components/pages/Servicespage';
import PhotoGallery from './components/pages/PhotoGallery';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component = {Home} />
          {/* <Route path='/Portfolio' exact component = {Portfolio} /> */}
          <Route path='/Team' exact component = {Team} />
          <Route path='/Services' exact component = {Services} />
          <Route path='/Gallery' exact component = {PhotoGallery} />
          <Route path='/Contact' exact component = {Contact} />
        </Switch>
        <Footer/>
      </Router>
        
    </>
  );
}

export default App;
