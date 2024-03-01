import './styles/App.css';
import React, { useState } from 'react';
import Board from './Board';
import { generateBoard } from './SudokuGenerator';

function App() {
    const initialBoards = generateBoard();
    const [currentBoard, setCurrentBoard] = useState(initialBoards.puzzleBoard);
    const [solution, setSolution] = useState(initialBoards.solvedBoard);
    const [difficulty, setDifficulty] = useState('medium');

    const handleNewGame = () => {
        const { solvedBoard, puzzleBoard } = generateBoard(difficulty);
        setCurrentBoard(puzzleBoard); // Update the board displayed to the user
        setSolution(solvedBoard); // Save the solution for when the user wants to solve
    };

    const solvePuzzle = () => {
        setCurrentBoard(solution);
    };

    const checkIfSolved = () => {
        for (let row = 0; row < currentBoard.length; row++) {
            for (let col = 0; col < currentBoard[row].length; col++) {
                if (currentBoard[row][col] === 0 || currentBoard[row][col] !== solution[row][col]) {
                    return false;
                }
            }
        }
        return true;
    };


    const handleCellChange = (rowIndex, colIndex, newValue) => {
        const val = newValue === "" ? 0 : parseInt(newValue, 10);
        const newBoard = currentBoard.map((row, rIdx) =>
            rIdx === rowIndex
                ? row.map((cell, cIdx) =>
                    cIdx === colIndex ? val : cell
                )
                : row
        );

        setCurrentBoard(newBoard);


        if (checkIfSolved()) {
            alert("Congratulations! You've solved the puzzle!");
        }
    };

 
    return (
        <div className="App">
             <h1 className='title honk'>Sudoku</h1>
            <div className="difficultySelectorContainer">
                <label htmlFor="difficultySelect">Choose Difficulty: </label>
                <select id="difficultySelect" className="difficultySelect" onChange={(e) => setDifficulty(e.target.value)} value={difficulty}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            <div className='buttons-container'>
                <button className='newGameButton' onClick={handleNewGame}>Generate Game</button>
            <button className = 'solveButton' onClick={solvePuzzle}>Solve</button>

            </div>
            <Board board={currentBoard} onCellChange={handleCellChange}/>
        </div>
    );
}

export default App;
