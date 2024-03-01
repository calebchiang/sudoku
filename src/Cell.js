import React from 'react';
import './styles/Cell.css';

function Cell({value, onChange, rowIndex, colIndex}){
    return (
        <input className = 'cell'
            type = "number"
            value = {value}
            onChange = {onChange}
            min = "1"
            max = "9"
    
        />

    );

}

export default Cell;