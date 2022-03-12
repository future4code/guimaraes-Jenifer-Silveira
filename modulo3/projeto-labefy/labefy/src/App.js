import  React from 'react';
import ReactPlayer from 'react-player';
import './components/videoPlayer.js/videoPlayer.css';




function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <ReactPlayer url="https://www.youtube.com/watch?v=vAEwLvxHVVk" controls={true}/>
      <input type="text" placeholder='player'/>
      <ReactPlayer url="https://www.youtube.com/watch?v=SDTZ7iX4vTQ" controls={true}/>
      <input type="text" placeholder='player'/>
      <ReactPlayer url="https://www.youtube.com/watch?v=pXRviuL6vMY" controls={true}/>
      <input type="text" placeholder='player'/>
      <ReactPlayer url="https://www.youtube.com/watch?v=iArXv64tCJA" controls={true}/>
      <input type="text" placeholder='player'/>
      <ReactPlayer url="https://www.youtube.com/watch?v=dqUdI4AIDF0" controls={true}/>
      <input type="text" placeholder='player'/>
      <ReactPlayer url="https://www.youtube.com/watch?v=8M143iRrbgw" controls={true}/>
      <input type="text" placeholder='player'/>
      <ReactPlayer url="https://www.youtube.com/watch?v=TDyiREoBw0o" controls={true}/>
      <input type="text" placeholder='player'/>
      </header>
    </div>
  ); 
}

export default App;
