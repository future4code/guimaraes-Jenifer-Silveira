import  React from 'react';
//import ReactPlayer from 'react-player';
import Play from './assets/playButton.png'
import "../src/App.css"
import VideoPlayer from "./components/VideoPlayer/VideoPlayer"


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <img className='logoPlay' src={Play} alt="play" title="Logo tocador" width={70}/>
      <div className='busca'>
        <input type="text" placeholder="buscar"/>
      </div>
      </header>

      <VideoPlayer/>
      
      
      
      
      </div>
    
  ); 
}

export default App;
