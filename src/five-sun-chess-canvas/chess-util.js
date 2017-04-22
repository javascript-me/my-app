import CONST from './const'

function calculateNetPosition(offset) {
    return Math.round(offset / CONST.CELL_SIDE_LENGTH)
}

function getNextSide(sequence, startSide) {
    if (sequence.length === 0) return startSide
    return sequence[sequence.length - 1].side === CONST.PIECE_COLOR_BLACK ? CONST.PIECE_COLOR_WHITE : CONST.PIECE_COLOR_BLACK
}

export default {
    calculateNetPosition: calculateNetPosition,
    getNextSide: getNextSide
}