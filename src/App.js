import './styles/App.css';
import React, { useState } from 'react';
import Board from './Board';

function App() {

const initalBoard = Array(9).fill(null).map(() => Array(9).fill(0));
const [board, setBoard] = useState(initalBoard);

const handleCellChange = (rowIndex, colIndex, newValue) => {
  const val = parseInt(newValue, 10);

  const newBoard = board.map((row, rIdx) =>
    rIdx === rowIndex
      ? row.map((cell, cIdx) =>
          cIdx === colIndex ? (val >= 1 && val <= 9 ? val : "") : cell
        )
      : row
  );

  setBoard(newBoard);
};

 
  return (
    <div className="App">
      <Board board={board} onCellChange={handleCellChange}/> 
    </div>
  );
}

export default App;
