import React from 'react'
import ReactDOM from 'react-dom'
import CONST from './const'
import ChessUtil from './chess-util'
import ClassNames from 'classnames'
import Canvas from './canvas'

// function fillRectangle(props) {
//     const {context, x, y, width, height} = props
//     context.fillRect(x, y, width, height)
// }
//
// function strokeRectangle(props) {
//     const {context, x, y, width, height} = props
//     context.strokeRect(x, y, width, height)
// }

export default class FiveSonChess extends React.Component {

    constructor (props) {
        super(props)

        // this.handleMouseDown = this.handleMouseDown.bind(this)
        // this.handleMouseMove = this.handleMouseMove.bind(this)

        this.undo = this.undo.bind(this)
        this.redo = this.redo.bind(this)
        this.reset = this.reset.bind(this)

        this.updateSequence = this.updateSequence.bind(this)

        this.state = {
            startSide: CONST.PIECE_COLOR_BLACK,
            sequence: []
        }

        this.stackSequence = []
    }

    updateSequence (sequence) {
        this.setState({
            sequence: sequence
        })
    }

    // componentDidMount() {
    //     this.updateCanvas()
    //     let canvasDom = ReactDOM.findDOMNode(this.refs.canvas)
    //     canvasDom.addEventListener('mousedown', this.handleMouseDown)
    //     canvasDom.addEventListener('mousemove', this.handleMouseMove)
    // }
    //
    // componentDidUpdate() {
    //     this.updateCanvas()
    // }

    // handleMouseDown (e) {
    //     let canvasX = e.clientX - e.target.offsetLeft
    //     let canvasY = e.clientY - e.target.offsetTop
    //
    //     let netX = ChessUtil.calculateNetPosition(canvasX)
    //     let netY = ChessUtil.calculateNetPosition(canvasY)
    //
    //     if (!ChessUtil.insideBoard(netX, netY)) return
    //     if (!ChessUtil.isNewNetXY(this.state.sequence, netX, netY)) return
    //
    //     let sequence = this.state.sequence
    //
    //     sequence.push({
    //         netX: netX,
    //         netY: netY,
    //         side: ChessUtil.getNextSide(sequence, this.state.startSide)
    //     })
    //
    //     this.setState({
    //         sequence: sequence
    //     })
    // }
    //
    // handleMouseMove (e) {
    //
    // }

    // updateCanvas() {
    //     const context = this.refs.canvas.getContext('2d')
    //     this.initCanvas(context);
    //     this.initBoard(context);
    //     this.addPieces(context);
    // }
    //
    // addPieces(context) {
    //     this.state.sequence.forEach((item) => {
    //         this.addPiece(context, item.netX, item.netY, item.side);
    //     })
    // }
    //
    // addPiece(context, netX, netY, color) {
    //     context.beginPath()
    //     context.arc(netX * CONST.CELL_SIDE_LENGTH, netY * CONST.CELL_SIDE_LENGTH, CONST.PIECE_RADIUS, 0, 2 * Math.PI, false)
    //     context.fillStyle = color
    //     context.strokeStyle = color
    //     context.stroke()
    //     context.fill()
    // }
    //
    // initBoard(context) {
    //     context.strokeStyle = CONST.LINE_COLOR
    //     for (let i = 1; i <= CONST.BOARD_ROW_COLUMN_COUNT; i++) {
    //         for (let j = 1; j <= CONST.BOARD_ROW_COLUMN_COUNT; j++) {
    //             strokeRectangle({
    //                 context,
    //                 x: CONST.CELL_SIDE_LENGTH * j,
    //                 y: CONST.CELL_SIDE_LENGTH * i,
    //                 width: CONST.CELL_SIDE_LENGTH,
    //                 height: CONST.CELL_SIDE_LENGTH
    //             })
    //         }
    //     }
    // }
    //
    // initCanvas(context) {
    //     context.clearRect(0, 0, CONST.CANVAS_SIZE.WIDTH, CONST.CANVAS_SIZE.HEIGHT)
    //     context.fillStyle = CONST.CANVAS_COLOR
    //     fillRectangle({context, x: 0, y: 0, width: CONST.CANVAS_SIZE.WIDTH, height: CONST.CANVAS_SIZE.HEIGHT})
    // }

    undo () {
        let sequence = this.state.sequence
        ChessUtil.movePiece(sequence, this.stackSequence)
        this.setState({
            sequence: sequence
        })
    }

    redo () {
        let sequence = this.state.sequence
        ChessUtil.movePiece(this.stackSequence, sequence)
        this.setState({
            sequence: sequence
        })
    }

    reset () {
        this.setState({
            sequence: []
        })
        this.stackSequence = []
    }

    getButtonClassNames (sequence) {
        return ClassNames(
            'button',
            {
                disable: sequence.length === 0
            }
        )
    }

    render() {
        return (
            <div className='fix-sun-chess-canvas'>
                <div className='board'>
                    <Canvas sequence={this.state.sequence} startSide={this.state.startSide}
                            onSequenceUpdate={this.updateSequence} />
                </div>
                <div className='board'>
                    <div className={this.getButtonClassNames(this.state.sequence)} onClick={this.undo}>悔棋</div>
                    <div className={this.getButtonClassNames(this.stackSequence)} onClick={this.redo}>进棋</div>
                    <div className='button' onClick={this.reset}>重置</div>
                </div>
            </div>
        )
    }
}