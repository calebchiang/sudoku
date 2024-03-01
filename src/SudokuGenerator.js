function isValid(board, row, col, num){
    // Check row and col
    for (let i = 0; i < 9; i++){
        if(board[row][i] === num) return false;
    }
    for (let i = 0; i < 9; i++){
        if(board[i][col] === num) return false;
    }

    // Check 3x3 grid
    const startRow = row - row % 3;
    const startCol = col - col % 3;
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (board[i][j] === num) return false;
        }
    }

    return true;
}

function generateBoard(difficulty) {
    const board = Array(9).fill(null).map(() => Array(9).fill(0)); // Initialize empty board
    console.log("Starting board generation");

    const tryFillBoard = (board) => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === 0) {
                    const nums = Array.from({ length: 9 }, (_, i) => i + 1);
                    // Randomize the array of numbers
                    const randomizedNums = nums.sort(() => Math.random() - 0.5);

                    for (let num of randomizedNums) {
                        if (isValid(board, row, col, num)) {
                            board[row][col] = num;
                            if (tryFillBoard(board)) {
                                return true;
                            }
                            board[row][col] = 0; // Backtrack
                        }
                    }
                    return false; // Trigger backtracking
                }
            }
        }
        return true; // Solved
    };

    if (tryFillBoard(board)) {
        console.log("Board generated successfully");


        const puzzleBoard = board.map(row => [...row]);
        removeNumbers(puzzleBoard, difficulty);

        return { solvedBoard: board, puzzleBoard: puzzleBoard };
    } else {
        console.log("Failed to generate board");
        return null; // In case no solution is found
    }
}


function removeNumbers(board, level) {
    let numbersToRemove;
    switch (level) {
        case 'easy':
            numbersToRemove = 20;
            break;
        case 'medium':
            numbersToRemove = 30;
            break;
        case 'hard':
            numbersToRemove = 40;
            break;
        default:
            numbersToRemove = 30;
    }

    while (numbersToRemove > 0) {
        let row = Math.floor(Math.random() * 9);
        let col = Math.floor(Math.random() * 9);
        if (board[row][col] !== 0) { // Ensure we only remove a number once
            board[row][col] = 0;
            numbersToRemove--;
        }
    }
}

export { generateBoard };