import React from 'react'
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ErrorPage from "./pages/ErrorPage"
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    teste
    <BrowserRouter>
      <Routes>

        <Route index element={<HomePage/>}/>
        <Route path="pagina-login" element={<LoginPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>

      </Routes>  
    </BrowserRouter>
    
    
    </div>
  );
}

export default App;
