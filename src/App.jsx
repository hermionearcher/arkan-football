import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import AppLogo from './assets/react.svg'; 

function App() {
  return (
    <div className='App__Wrapper'>
  
      <img src={reactLogo} alt="Arkan Football Logo" style="max-width: 250px; width: 50%;"/>
 
        <div className="card">
  
        <p>
          We're renovating our webiste, back soon!
        </p>
        <p>Get in touch:{" "}
          <a href="mailto:akeem@arkanfootball.co.uk?subject=Hey%2C%20came%20from%20your%20website%20%3A)">
            akeem@arkanfootball.co.uk
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
