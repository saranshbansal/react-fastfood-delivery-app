import React, { Component } from 'react';
import Clock from './lib/clock';
import SortableComponent from './components/DnD/DragAndDrop';
class App extends Component {
  render() {
    return (
      <div className="container-fluid App">
        <header className="row App-header">
          <Clock />
        </header>
        <div className="App-body">
          <SortableComponent />
        </div>
      </div>
    );
  }
}

export default App;
