import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <div className='App__Wrapper'>
      <h1>Arkan Football</h1>
      <div className="card">
        <p>
          We're renovating our webiste, back soon!
        </p>
        <p>Get in touch:{" "}
          <a href="mailto:akeem@arkanfootball.co.uk?subject=Hey%2C%20came%20from%20your%20website%20%3A)">
            akeem@arkanfootball.co.uk
          </a>
        </p>
        {/* <button onClick={}>
          count is
        </button> */}
      </div>
    </div>
  );
}

export default App;
