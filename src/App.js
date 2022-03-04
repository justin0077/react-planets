import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import rocketship from './assets/rocketship.png';
import rocketplatform from './assets/rocket-platform.png';
 
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

const Landing = () => {
  return (
    <>
    <div className="onboarding-background"></div>
    <div className="container">
    <div className="bird-container bird-container--one">
        <div className="bird bird--one"></div>
    </div>

    <div className="bird-container bird-container--two">
        <div className="bird bird--two"></div>
    </div>

    <div className="bird-container bird-container--three">
        <div className="bird bird--three"></div>
    </div>

    <div className="bird-container bird-container--four">
        <div className="bird bird--four"></div>
    </div>
</div>
      <div className="rocket__container">
        <img className="rocket__img" src={rocketship} />
        <div className='firepit'>
          <div className='fire'>
            <div className='flame'></div>
            <div className='flame'></div>
            <div className='flame'></div>
            <div className='flame'></div>
            <div className='spark'></div>
            <div className='spark'></div>
            <div className='spark'></div>
            <div className='spark'></div>
            <div className='spark'></div>
            <div className='spark'></div>
            <div className='spark'></div>
            <div className='spark'></div>
            <div className='spark'></div>
            <div className='spark'></div>
            <div className='spark'></div>
            <div className='spark'></div>
          </div>
        </div>
        <img className="rocket__platform" src={rocketplatform} />
      </div>
    </>
  )
}

export default App;
