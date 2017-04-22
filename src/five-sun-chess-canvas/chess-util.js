import CONST from './const'

function calculateNetPosition(offset) {
    return Math.round(offset / CONST.CELL_SIDE_LENGTH)
}

function getNextSide(sequence, startSide) {
    if (sequence.length === 0) return startSide
    return sequence[sequence.length - 1].side === CONST.PIECE_COLOR_BLACK ? CONST.PIECE_COLOR_WHITE : CONST.PIECE_COLOR_BLACK
}

function isValidNetXY(netX, netY) {
    return (1 <= netX && netX <= CONST.BOARD_ROW_COLUMN_COUNT + 1)
    && (1 <= netY && netY <= CONST.BOARD_ROW_COLUMN_COUNT + 1)
}

function isNewNetXY(sequence, netX, netY) {
    return sequence.every((item) => {
        return item.netX !== netX || item.netY !== netY
    })
}

function movePiece(sequenceFrom, sequenceTo) {
    if (sequenceFrom.length === 0) return
    sequenceTo.push(sequenceFrom.pop())
}

export default {
    calculateNetPosition: calculateNetPosition,
    getNextSide: getNextSide,
    insideBoard: isValidNetXY,
    isNewNetXY: isNewNetXY,
    movePiece: movePiece
}
