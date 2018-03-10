import React, { Component } from 'react';
import Clock from './lib/clock';
class App extends Component {
  render() {
    return (
      <div className="container-fluid App">
        <header className="row App-header">
          <Clock />
        </header>
        <div className="App-body">
        </div>
      </div>
    );
  }
}

export default App;
