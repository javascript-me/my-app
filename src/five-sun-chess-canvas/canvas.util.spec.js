import {assert} from 'chai'
import ChessUtil from './chess-util'

describe('CanvasUtil', () => {
    it('calculateNetPosition() will return correct net position', () => {

        assert.equal(2, ChessUtil.calculateNetPosition(120))
        assert.equal(2, ChessUtil.calculateNetPosition(80))

    })
})

