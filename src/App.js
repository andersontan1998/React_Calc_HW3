import React from 'react';
import './App.css';
import Keypad from './Keypad'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h6 style={{"margin-bottom": "0px"}}>Google Calculator Clone using React</h6>
          <p style={{"fontSize": 16}}> One input operations: click the number before the operator. <br></br> <br></br>
                Two input operations: click a number, an operator, and then a number. <br></br> <br></br>
                Click the Rad button to change between Radians and Degrees for Sine, Cosine, and Tangent.</p>
        </div>
      </header>
      <div id="keypad" style={{"padding-top": "30px"}}>
        <Keypad />
      </div>
    </div>
  );
}

export default App;