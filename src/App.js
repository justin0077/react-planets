import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Onboarding from './pages/Onboarding/Onboarding';
 
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>} />
        </Routes>
      </Router>
    </div>
  );
}

function Speedtakeoff() {
    
}

const Landing = () => {


  return (
    <Onboarding />
  )
}

export default App;
