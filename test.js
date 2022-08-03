import assert from 'assert'
import { createBoard } from "./minesweeper.js"

describe('create board', () => {
    it('should return a board with height and width equal to board size', () => {
        const boardSize = 10

        const board = createBoard(boardSize, 0)

        assert.equal(board.length, boardSize)
        assert.equal(board[0].length, boardSize)

    })

    it('should create board cells', () => {
        const board = createBoard(5, 0)

        //assert.deepEqual(, ['isBomb'])
        assert.deepEqual(Object.keys(board[0][0]), ['isBomb'])
    })
})

// var assert = require('assert');
// describe('Array', function() {
//     describe('#indexOf()', function() {
//         it('should return -1 when the value is not present', function() {
//             assert.equal([1, 2, 3].indexOf(4), -1);
//         });
//     });
// });boardSize()s4//