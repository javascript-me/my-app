import React from 'react'
import CONST from '../const'
import ReactDOM from 'react-dom'
import Chess from '../chess'

function fillRectangle(props) {
    const {context, x, y, width, height} = props
    context.fillRect(x, y, width, height)
}

function strokeRectangle(props) {
    const {context, x, y, width, height} = props
    context.strokeRect(x, y, width, height)
}

export default class CanvasChess extends Chess {

    componentDidMount() {
        this.updateCanvas()
        super.componentDidMount()
    }

    componentDidUpdate() {
        this.updateCanvas()
    }

    updateCanvas() {
        const context = this.root.getContext('2d')
        this.initCanvas(context);
        this.initBoard(context);
        this.addPieces(context);
    }

    addPieces(context) {
        this.props.sequence.forEach((item) => {
            this.addPiece(context, item.netX, item.netY, item.side);
        })
    }

    addPiece(context, netX, netY, color) {
        context.beginPath()
        context.arc(netX * CONST.CELL_SIDE_LENGTH, netY * CONST.CELL_SIDE_LENGTH, CONST.PIECE_RADIUS, 0, 2 * Math.PI, false)
        context.fillStyle = color
        context.strokeStyle = color
        context.stroke()
        context.fill()
    }

    initBoard(context) {
        context.strokeStyle = CONST.LINE_COLOR
        for (let i = 1; i <= CONST.BOARD_ROW_COLUMN_COUNT; i++) {
            for (let j = 1; j <= CONST.BOARD_ROW_COLUMN_COUNT; j++) {
                strokeRectangle({
                    context,
                    x: CONST.CELL_SIDE_LENGTH * j,
                    y: CONST.CELL_SIDE_LENGTH * i,
                    width: CONST.CELL_SIDE_LENGTH,
                    height: CONST.CELL_SIDE_LENGTH
                })
            }
        }
    }

    initCanvas(context) {
        context.clearRect(0, 0, CONST.CANVAS_SIZE.WIDTH, CONST.CANVAS_SIZE.HEIGHT)
        context.fillStyle = CONST.CANVAS_COLOR
        fillRectangle({context, x: 0, y: 0, width: CONST.CANVAS_SIZE.WIDTH, height: CONST.CANVAS_SIZE.HEIGHT})
    }

    render () {
        return <canvas ref={(ref) => {
            this.rootDom = ReactDOM.findDOMNode(ref)
            return this.root = ref
        }} width={CONST.CANVAS_SIZE.WIDTH} height={CONST.CANVAS_SIZE.WIDTH} />
    }
}

CanvasChess.propTypes = {
    sequence: React.PropTypes.array,
    onClick: React.PropTypes.func
}