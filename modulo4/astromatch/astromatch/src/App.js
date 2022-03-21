import React from 'react';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './footer';
import Header from './Header';
import TinderCards from './TinderCards';
//import TinderCards from './TinderCards';



function App() {
  return (
    <div className="App">
      
      <Header/>
      <TinderCards/>
      <Footer/>  

      
      
    </div>
  );
}

export default App;

