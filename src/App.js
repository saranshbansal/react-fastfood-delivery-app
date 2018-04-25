import React, { Component } from 'react';
import Dashboard from './modules/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1>Order & Out</h1>
          <p>A web application that allows users to order food.</p>
        </div>
        <Dashboard />
      </div>
    );
  }
}

export default App;
