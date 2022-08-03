export function createBoard(boardSize, numberOfMines) {
    const board = []

    for (let i = 0; i < boardSize; i++) {
        const row = []

        for (let j = 0; j < boardSize; j++) {
            const cell = { isBomb: true }
            row.push(cell)
        }
        board.push(row)
    }

    return board
}

export function minesweeper() {
    console.log("minesweeper minesweeper")
}

minesweeper()