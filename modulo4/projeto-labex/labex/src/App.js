
import AdminHomePage from './AdminHomePage';
import './App.css';
import ApplicationFormPage from './ApplicationFormPage';
import CreateTripPage from './CreateTripPage';
import HomePage from './HomePage';
import ListTripsPage from './ListTripsPage';
import LoginPage from './LoginPage';
import TripDetailsPage from './TripDetailsPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage/>
        <ListTripsPage/>
        <ApplicationFormPage/>
        <LoginPage/>
        <AdminHomePage/>
        <TripDetailsPage/>
        <CreateTripPage/>
        
      </header>
    </div>
  );
}

export default App;
