import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './lib/clock';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Clock />
        </header>
        <div className="container-fluid">
        </div>
      </div>
    );
  }
}

export default App;
