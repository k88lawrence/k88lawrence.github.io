import React from "react";
import "./App.css";

import InstagramIcon from "./images/instagram-icon.svg";
import CaraIcon from "./images/cara-icon.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Coming Soon</h1>
      </header>

      <div className="footer">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/katelawrence.art/"
        >
          <img className="social-icon" alt="Instagram" src={InstagramIcon} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://cara.app/katelawrence"
        >
          <img className="social-icon" alt="Cara" src={CaraIcon} />
        </a>
      </div>
    </div>
  );
}

export default App;
