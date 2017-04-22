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

function isWin(sequence, netX, netY) {

    //左上到右下

    let matchedCount4 = getMatchedCountDimension4(sequence, netX, netY)


    if (matchedCount4 === 4) return true
    return false
}

function increaseEnhancer(value, i) {
    return value + i
}

function decreaseEnhancer(value, i) {
    return value - i
}

function getMatchedCountDimension4(sequence, netX, netY) {
    let matchedCount = 0
    let mySide = sequence[sequence.length - 1].side

    // matchedCount += getMatchedCountTopLeft(sequence, netX, netY, mySide, decreaseEnhancer, decreaseEnhancer)
    // matchedCount += getMatchedCountBottomRight(sequence, netX, netY, mySide, increaseEnhancer, increaseEnhancer)

    matchedCount += getMatchedCount(sequence, netX, netY, mySide, decreaseEnhancer, decreaseEnhancer)
    matchedCount += getMatchedCount(sequence, netX, netY, mySide, increaseEnhancer, increaseEnhancer)

    return matchedCount
}

function getMatchedCount(sequence, netX, netY, mySide, netXEnhancer, netYEnhancer) {
    let matchedCount = 0
    for (let i = 1 ; i <= CONST.TRACK_DISTANCE ; i++) {
        if (existPiece(sequence, netXEnhancer(netX, i), netYEnhancer(netY, i), mySide)) {
            matchedCount++
        } else {
            break
        }
    }
    return matchedCount
}

function existPiece(sequence, netX, netY, side) {
    return sequence.some((item) => {return samePiece(item, netX, netY, side)})
}

function samePiece(item, netX, netY, side) {
    return item.netX === netX && item.netY === netY && item.side === side
}

export default {
    calculateNetPosition: calculateNetPosition,
    getNextSide: getNextSide,
    insideBoard: isValidNetXY,
    isNewNetXY: isNewNetXY,
    movePiece: movePiece,
    isWin: isWin,
    getMatchedCountDimension4: getMatchedCountDimension4,
    existPiece: existPiece,

    getMatchedCount: getMatchedCount,

    increaseEnhancer: increaseEnhancer,
    decreaseEnhancer: decreaseEnhancer
}
