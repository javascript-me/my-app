import {assert} from 'chai'
import ChessUtil from './chess-util'

describe('CanvasUtil', () => {

    it('calculateNetPosition() will return correct net position', () => {

        assert.equal(2, ChessUtil.calculateNetPosition(120))
        assert.equal(2, ChessUtil.calculateNetPosition(80))

    })

    it('isNewNetXY() will return true if clicking and existing piece position', () => {
        let sequence = [
            {
                netX: 2,
                netY: 3
            }
        ]

        assert.isNotOk(ChessUtil.isNewNetXY(sequence, 2, 3))
        assert.ok(ChessUtil.isNewNetXY(sequence, 2, 4))
    })

    it('Array methods', () => {

        let list = [1, 2, 3]

        assert.equal(3, list.length)

        let result = list.pop()
        assert.equal(3, result)
        assert.equal(2, list.length)

    })

    it('movePiece() will pop last element from sequenceFrom, then push it to sequenceTo', () => {
        let sequenceFrom = ['a', 'b', 'c']
        let sequenceTo = []

        ChessUtil.movePiece(sequenceFrom, sequenceTo)

        assert.equal(2, sequenceFrom.length)
        assert.equal(1, sequenceTo.length)

        ChessUtil.movePiece(sequenceFrom, sequenceTo)

        assert.equal(1, sequenceFrom.length)
        assert.equal(2, sequenceTo.length)

        ChessUtil.movePiece(sequenceFrom, sequenceTo)

        assert.equal(0, sequenceFrom.length)
        assert.equal(3, sequenceTo.length)

        ChessUtil.movePiece(sequenceFrom, sequenceTo)

        assert.equal(0, sequenceFrom.length)
        assert.equal(3, sequenceTo.length)

    })

})

