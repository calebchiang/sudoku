import React from 'react';
import Cell from './Cell';

function Board({ board, onCellChange }) {
  console.log(board);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(9, 50px)' }}>
      {board.map((row, rowIndex) => 
        row.map((cellValue, colIndex) => (
          <Cell
          key={`${rowIndex}-${colIndex}`}
          value={cellValue}
          rowIndex={rowIndex} 
          colIndex={colIndex}
          onChange={(e) => onCellChange(rowIndex, colIndex, e.target.value)}
          />
        ))
      )}
    </div>
  );
}

export default Board;
