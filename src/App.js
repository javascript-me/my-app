import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Agents from './agents/agents'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Welcome to TW!
        </p>

        <Agents />

      </div>
    );
  }
}

export default App;
