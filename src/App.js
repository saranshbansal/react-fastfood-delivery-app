import React, { Component } from 'react';
import Dashboard from './modules/Dashboard/Dashboard';
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
