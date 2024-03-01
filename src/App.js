import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const initalBoard = Array(9).fill(null).map(() => Array(9).fill(0));
  const [board, setBoard] = useState(initalBoard);
  
  return (
    <div className="App">
    </div>
  );
}

export default App;
