import './styles/App.css';
import React, { useState } from 'react';
import Board from './Board';
import { generateBoard } from './SudokuGenerator';

function App() {
const [board, setBoard] = useState(generateBoard());

const handleNewGame = () => {
    setBoard(generateBoard()); // Generate a new board for a new game
};

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
        <button className='newGameButton' onClick={handleNewGame}>Generate Game</button>
        <Board board={board} onCellChange={handleCellChange}/>
    </div>
  );
}

export default App;
