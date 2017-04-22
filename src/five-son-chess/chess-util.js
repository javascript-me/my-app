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

    let matchedCount1 = getMatchedCountDimension1(sequence, netX, netY)
    let matchedCount2 = getMatchedCountDimension2(sequence, netX, netY)
    let matchedCount3 = getMatchedCountDimension3(sequence, netX, netY)
    let matchedCount4 = getMatchedCountDimension4(sequence, netX, netY)

    return [matchedCount1, matchedCount2, matchedCount3, matchedCount4].indexOf(CONST.TRACK_DISTANCE) >= 0
}

function increaseEnhancer(value, i) {
    return value + i
}

function decreaseEnhancer(value, i) {
    return value - i
}

function fixedEnhancer(value, i) {
    return value
}

function getMatchedCountDimension1(sequence, netX, netY) {
    if (!existPosition(sequence, netX, netY)) return 0

    let matchedCount = 0
    let mySide = sequence[sequence.length - 1].side

    matchedCount += getMatchedCount(sequence, netX, netY, mySide, fixedEnhancer, decreaseEnhancer)
    matchedCount += getMatchedCount(sequence, netX, netY, mySide, fixedEnhancer, increaseEnhancer)

    return matchedCount
}

function getMatchedCountDimension2(sequence, netX, netY) {
    if (!existPosition(sequence, netX, netY)) return 0

    let matchedCount = 0
    let mySide = sequence[sequence.length - 1].side

    matchedCount += getMatchedCount(sequence, netX, netY, mySide, decreaseEnhancer, increaseEnhancer)
    matchedCount += getMatchedCount(sequence, netX, netY, mySide, increaseEnhancer, decreaseEnhancer)

    return matchedCount
}

function getMatchedCountDimension3(sequence, netX, netY) {
    if (!existPosition(sequence, netX, netY)) return 0

    let matchedCount = 0
    let mySide = sequence[sequence.length - 1].side

    matchedCount += getMatchedCount(sequence, netX, netY, mySide, decreaseEnhancer, fixedEnhancer)
    matchedCount += getMatchedCount(sequence, netX, netY, mySide, increaseEnhancer, fixedEnhancer)

    return matchedCount
}

function getMatchedCountDimension4(sequence, netX, netY) {
    if (!existPosition(sequence, netX, netY)) return 0

    let matchedCount = 0
    let mySide = sequence[sequence.length - 1].side

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
function existPosition(sequence, netX, netY) {
    return sequence.some((item) => {return samePosition(item, netX, netY)})
}

function samePiece(item, netX, netY, side) {
    return item.netX === netX && item.netY === netY && item.side === side
}

function samePosition(item, netX, netY) {
    return item.netX === netX && item.netY === netY
}

export default {
    calculateNetPosition: calculateNetPosition,
    getNextSide: getNextSide,
    insideBoard: isValidNetXY,
    isNewNetXY: isNewNetXY,
    movePiece: movePiece,
    isWin: isWin,

    getMatchedCountDimension3: getMatchedCountDimension3,
    getMatchedCountDimension4: getMatchedCountDimension4,


    existPiece: existPiece,

    getMatchedCount: getMatchedCount,

    increaseEnhancer: increaseEnhancer,
    decreaseEnhancer: decreaseEnhancer
}
