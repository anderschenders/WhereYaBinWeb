import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={require('./logo.png')} className="App-logo" alt="logo" />
          // <h1 className="App-title">whereya, bin?</h1>
        </header>
        <p className="App-intro">
          Under construction...
        </p>
      </div>
    );
  }
}

export default App;
