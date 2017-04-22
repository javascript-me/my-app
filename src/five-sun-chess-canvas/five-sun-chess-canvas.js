import React from 'react'
import ReactDOM from 'react-dom'
import CONST from './const'

function fillRectangle(props) {
    const {context, x, y, width, height} = props
    context.fillRect(x, y, width, height)
}

function strokeRectangle(props) {
    const {context, x, y, width, height} = props
    context.strokeRect(x, y, width, height)
}

export default class FiveSunChessCanvas extends React.Component {

    constructor (props) {
        super(props)
    }

    componentDidMount() {
        this.updateCanvas()
        let canvasDom = ReactDOM.findDOMNode(this.refs.canvas)
        canvasDom.addEventListener('mousedown', this.handleMouseDown)
        canvasDom.addEventListener('mousemove', this.handleMouseMove)
    }
    
    componentDidUpdate() {
        this.updateCanvas()
    }

    handleMouseDown (e) {
        console.log('down. down.. ')
        console.log('e.clientX: ' + e.clientX)
        console.log('e.clientY: ' + e.clientY)


    }

    handleMouseMove (e) {
        console.log('move. move.. ')
        console.log('e.clientX: ' + e.clientX)
        console.log('e.clientY: ' + e.clientY)
    }

    updateCanvas() {
        const context = this.refs.canvas.getContext('2d')
        this.initCanvas(context);
        this.initBoard(context);
        this.addPiece(context, 2, 2, CONST.PIECE_COLOR_BLACK);
        this.addPiece(context, 2, 4, CONST.PIECE_COLOR_WHITE);
        this.addPiece(context, 3, 6, CONST.PIECE_COLOR_BLACK);
    }

    addPiece(context, xPosition, yPosition, color) {
        context.beginPath()
        context.arc(xPosition * CONST.CELL_SIDE_LENGTH, yPosition * CONST.CELL_SIDE_LENGTH, CONST.PIECE_RADIUS, 0, 2 * Math.PI, false)
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

    render() {
        return (
            <canvas ref="canvas" width={CONST.CANVAS_SIZE.WIDTH} height={CONST.CANVAS_SIZE.WIDTH} />
        )
    }
}