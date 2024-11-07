import React, { Component } from 'react';
import logo from './logo.svg';
import gtw_logo from './gtw_logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={gtw_logo} className="GreenTwin-logo" alt="GreenTwin-logo" />
          <h1 className="App-title">Welcome to my own React (7. Nov. 2024)</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
