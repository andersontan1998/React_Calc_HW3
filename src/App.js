import React from 'react';
import logo from './logo.svg';
import './App.css';
import Keypad from './Keypad'
import Result from './Result'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h6>Google Calculator Clone using React</h6>
      </header>
      <div id="keypad">
        <Keypad />
      </div>
    </div>
  );
}

export default App;