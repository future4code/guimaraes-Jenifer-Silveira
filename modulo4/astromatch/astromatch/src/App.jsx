import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router , Route} from "react-router-dom";
import {Switch} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <Router>
      <Header/>
      <Switch>
      <Route path='/chat'>
        <h1>Pagina de chat</h1>
      </Route>
      <Route path='/'>
        <h1>Pagina inicial</h1>
      </Route>
      </Switch>
        
        
      
            

          
        
        
    
        </Router>
        

      
      </header>
    </div>
  );
}

export default App;

// {/*tindercards*/}
  //      {/*buttons do cartoes do tinder*/}
    //    {/*chatscreen*/}
      //  {/*individual chatscreen*/}