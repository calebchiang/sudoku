import React from 'react';
import './styles/Cell.css';

function Cell({value, onChange, rowIndex, colIndex}){
    const isRightBorder = (colIndex + 1) % 3 === 0 && colIndex !== 8;
    const isBottomBorder = (rowIndex + 1) % 3 === 0 && rowIndex !== 8;

    let cellClass = 'cell';
    if (isRightBorder && isBottomBorder) {
        cellClass += ' border-bottom-right';
    } else if (isRightBorder) {
        cellClass += ' border-right';
    } else if (isBottomBorder) {
        cellClass += ' border-bottom';
    }

    return (
        <input className ={cellClass}
            type = "number"
               value={value === 0 ? "" : value}
            onChange = {onChange}
            min = "1"
            max = "9"
    
        />

    );

}

export default Cell;