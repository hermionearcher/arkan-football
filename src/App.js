import "./App.css";
import AppLogo from "./assets/AppLogo.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={AppLogo} className="App__Logo" alt="logo" />
        <div className="App__Card">
        <h2>We're renovating our website, come back soon!</h2>
        <p>Get in touch:</p>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:akeem@arkanfootball.co.uk"
        >
          akeem@arkanfootball.co.uk
        </a>
        </div>

      </header>
    </div>
  );
}

export default App;
