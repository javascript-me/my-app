import {assert} from 'chai'
import ChessUtil from './chess-util'
import CONST from './const'

describe('CanvasUtil', () => {

    let dimension3Sequence
    let dimension4Sequence

    beforeEach(() => {

        dimension3Sequence = [
            {
                netX: 2,
                netY: 2,
                side: CONST.PIECE_COLOR_BLACK
            },
            {
                netX: 3,
                netY: 2,
                side: CONST.PIECE_COLOR_BLACK
            },
            {
                netX: 4,
                netY: 2,
                side: CONST.PIECE_COLOR_BLACK
            },
            {
                netX: 5,
                netY: 2,
                side: CONST.PIECE_COLOR_BLACK
            },
            {
                netX: 6,
                netY: 2,
                side: CONST.PIECE_COLOR_BLACK
            }
        ]


        dimension4Sequence = [
            {
                netX: 1,
                netY: 1,
                side: CONST.PIECE_COLOR_BLACK
            },
            {
                netX: 2,
                netY: 2,
                side: CONST.PIECE_COLOR_BLACK
            },
            {
                netX: 3,
                netY: 3,
                side: CONST.PIECE_COLOR_BLACK
            },
            {
                netX: 4,
                netY: 4,
                side: CONST.PIECE_COLOR_BLACK
            },
            {
                netX: 5,
                netY: 5,
                side: CONST.PIECE_COLOR_BLACK
            }
        ]
    })

    it('calculateNetPosition() will return correct net position', () => {

        assert.equal(2, ChessUtil.calculateNetPosition(120, 50))
        assert.equal(2, ChessUtil.calculateNetPosition(80, 50))

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

    it('isWin() can check the result', () => {
        assert.ok(ChessUtil.isWin(dimension4Sequence, 3, 3))
    })

    it('getMatchedCountDimension3() will return count of matched piece from top-left to bottom-right', () => {
        assert.equal(4, ChessUtil.getMatchedCountDimension3(dimension3Sequence, 2, 2, CONST.PIECE_COLOR_BLACK))
        assert.equal(4, ChessUtil.getMatchedCountDimension3(dimension3Sequence, 3, 2, CONST.PIECE_COLOR_BLACK))
        assert.equal(4, ChessUtil.getMatchedCountDimension3(dimension3Sequence, 4, 2, CONST.PIECE_COLOR_BLACK))
        assert.equal(4, ChessUtil.getMatchedCountDimension3(dimension3Sequence, 5, 2, CONST.PIECE_COLOR_BLACK))
        assert.equal(4, ChessUtil.getMatchedCountDimension3(dimension3Sequence, 6, 2, CONST.PIECE_COLOR_BLACK))


        console.log(ChessUtil.getMatchedCountDimension3(dimension3Sequence, 1, 2, CONST.PIECE_COLOR_BLACK))
        assert.equal(0, ChessUtil.getMatchedCountDimension3(dimension3Sequence, 1, 2, CONST.PIECE_COLOR_BLACK))
    })


    it('getMatchedCountDimension4() will return count of matched piece from top-left to bottom-right', () => {
        assert.equal(4, ChessUtil.getMatchedCountDimension4(dimension4Sequence, 1, 1, CONST.PIECE_COLOR_BLACK))
        assert.equal(4, ChessUtil.getMatchedCountDimension4(dimension4Sequence, 2, 2, CONST.PIECE_COLOR_BLACK))
        assert.equal(4, ChessUtil.getMatchedCountDimension4(dimension4Sequence, 3, 3, CONST.PIECE_COLOR_BLACK))
        assert.equal(4, ChessUtil.getMatchedCountDimension4(dimension4Sequence, 4, 4, CONST.PIECE_COLOR_BLACK))
        assert.equal(4, ChessUtil.getMatchedCountDimension4(dimension4Sequence, 5, 5, CONST.PIECE_COLOR_BLACK))

        assert.equal(0, ChessUtil.getMatchedCountDimension4(dimension4Sequence, 1, 2, CONST.PIECE_COLOR_BLACK))
    })

    it('existPiece() will return true when it is the same side', () => {
        assert.ok(ChessUtil.existPiece(dimension4Sequence, 1, 1, CONST.PIECE_COLOR_BLACK))
        assert.ok(ChessUtil.existPiece(dimension4Sequence, 2, 2, CONST.PIECE_COLOR_BLACK))
        assert.ok(ChessUtil.existPiece(dimension4Sequence, 3, 3, CONST.PIECE_COLOR_BLACK))
        assert.ok(ChessUtil.existPiece(dimension4Sequence, 4, 4, CONST.PIECE_COLOR_BLACK))
        assert.ok(ChessUtil.existPiece(dimension4Sequence, 5, 5, CONST.PIECE_COLOR_BLACK))
        assert.isNotOk(ChessUtil.existPiece(dimension4Sequence, 6, 6, CONST.PIECE_COLOR_BLACK))
        assert.isNotOk(ChessUtil.existPiece(dimension4Sequence, 7, 7, CONST.PIECE_COLOR_BLACK))
        assert.isNotOk(ChessUtil.existPiece(dimension4Sequence, 8, 8, CONST.PIECE_COLOR_BLACK))
    })

    it('getMatchedCount() for TopLeft', () => {
        assert.equal(0, ChessUtil.getMatchedCount(dimension4Sequence, 1, 1, CONST.PIECE_COLOR_BLACK, ChessUtil.decreaseEnhancer, ChessUtil.decreaseEnhancer))
        assert.equal(1, ChessUtil.getMatchedCount(dimension4Sequence, 2, 2, CONST.PIECE_COLOR_BLACK, ChessUtil.decreaseEnhancer, ChessUtil.decreaseEnhancer))
        assert.equal(2, ChessUtil.getMatchedCount(dimension4Sequence, 3, 3, CONST.PIECE_COLOR_BLACK, ChessUtil.decreaseEnhancer, ChessUtil.decreaseEnhancer))
        assert.equal(3, ChessUtil.getMatchedCount(dimension4Sequence, 4, 4, CONST.PIECE_COLOR_BLACK, ChessUtil.decreaseEnhancer, ChessUtil.decreaseEnhancer))
        assert.equal(4, ChessUtil.getMatchedCount(dimension4Sequence, 5, 5, CONST.PIECE_COLOR_BLACK, ChessUtil.decreaseEnhancer, ChessUtil.decreaseEnhancer))
    })

    it('getMatchedCount() for BottomRight', () => {
        assert.equal(4, ChessUtil.getMatchedCount(dimension4Sequence, 1, 1, CONST.PIECE_COLOR_BLACK, ChessUtil.increaseEnhancer, ChessUtil.increaseEnhancer))
        assert.equal(3, ChessUtil.getMatchedCount(dimension4Sequence, 2, 2, CONST.PIECE_COLOR_BLACK, ChessUtil.increaseEnhancer, ChessUtil.increaseEnhancer))
        assert.equal(2, ChessUtil.getMatchedCount(dimension4Sequence, 3, 3, CONST.PIECE_COLOR_BLACK, ChessUtil.increaseEnhancer, ChessUtil.increaseEnhancer))
        assert.equal(1, ChessUtil.getMatchedCount(dimension4Sequence, 4, 4, CONST.PIECE_COLOR_BLACK, ChessUtil.increaseEnhancer, ChessUtil.increaseEnhancer))
        assert.equal(0, ChessUtil.getMatchedCount(dimension4Sequence, 5, 5, CONST.PIECE_COLOR_BLACK, ChessUtil.increaseEnhancer, ChessUtil.increaseEnhancer))
    })

})

