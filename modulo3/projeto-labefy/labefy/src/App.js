import './App.css';
import  {MeuComponente} from './components/componente';
import NavButton from './components/navButtons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MeuComponente></MeuComponente>
      <NavButton/>
      </header>
    </div>
  ); 
}

export default App;
