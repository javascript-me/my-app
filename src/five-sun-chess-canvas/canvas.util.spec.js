import {assert} from 'chai'
import ChessUtil from './chess-util'

describe('CanvasUtil', () => {
    it('calculateNetPosition() will return correct net position', () => {

        assert.equal(2, ChessUtil.calculateNetPosition(120))
        assert.equal(2, ChessUtil.calculateNetPosition(80))

    })

    it('isDuplicateNetXY() will return true if clicking and existing piece position', () => {
        let sequence = [
            {
                netX: 2,
                netY: 3
            }
        ]

        assert.ok(ChessUtil.isNewNetXY(sequence, 2, 3))
        assert.isNotOk(ChessUtil.isNewNetXY(sequence, 2, 4))
    })
})

