import React, { Component } from 'react';
import Clock from './lib/clock';
import Dashboard from './components/Dashboard/Dashboard';
class App extends Component {
  render() {
    return (
      <div className="container-fluid App">
        <header className="row App-header">
          <Clock />
        </header>
        <div className="App-body">
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
