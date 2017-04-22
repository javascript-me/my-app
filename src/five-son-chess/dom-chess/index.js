import React from 'react'
import CONST from '../const'
import ReactDOM from 'react-dom'
import ChessUtil from '../chess-util'

export default class DomChess extends React.Component {

    constructor (props) {
        super(props)
        this.handleMouseDown = this.handleMouseDown.bind(this)
        this.handleMouseMove = this.handleMouseMove.bind(this)
    }

    componentDidMount() {
        let rootDom = ReactDOM.findDOMNode(this.root)
        rootDom.addEventListener('mousedown', this.handleMouseDown)
        rootDom.addEventListener('mousemove', this.handleMouseMove)
    }

    handleMouseDown (e) {

        let canvasX = e.clientX - ReactDOM.findDOMNode(this.root).offsetLeft
        let canvasY = e.clientY - ReactDOM.findDOMNode(this.root).offsetTop

        let netX = ChessUtil.calculateNetPosition(canvasX)
        let netY = ChessUtil.calculateNetPosition(canvasY)

        if (!ChessUtil.insideBoard(netX, netY)) return
        if (!ChessUtil.isNewNetXY(this.props.sequence, netX, netY)) return

        this.props.onClick(netX, netY)
    }

    handleMouseMove (e) {

    }

    addPieces() {
        return this.props.sequence.map((item, index) => {
            return <div key={index} className={`piece ${item.side}`}
                style={{
                    width: CONST.PIECE_RADIUS * 2,
                    height: CONST.PIECE_RADIUS * 2,
                    margin: CONST.CELL_SIDE_LENGTH * 0.5 * 0.2,
                    left: item.netX * CONST.CELL_SIDE_LENGTH - CONST.CELL_SIDE_LENGTH * 0.5,
                    top: item.netY * CONST.CELL_SIDE_LENGTH - CONST.CELL_SIDE_LENGTH * 0.5
                }}>&nbsp;</div>
        })
    }

    initBoard () {
        let table = []
        for (let i = 1; i <= CONST.BOARD_ROW_COLUMN_COUNT; i++) {
            let row = []
            for (let j = 1; j <= CONST.BOARD_ROW_COLUMN_COUNT; j++) {
                row.push(<div className='cell' key={j}
                              style={{
                                  width: CONST.CELL_SIDE_LENGTH - CONST.BORDER_WIDTH,
                                  height: CONST.CELL_SIDE_LENGTH - CONST.BORDER_WIDTH,
                                  border: `${CONST.BORDER_WIDTH}px solid #202000`,
                                  borderRightWidth: (j === CONST.BOARD_ROW_COLUMN_COUNT) ? CONST.BORDER_WIDTH : 0,
                                  borderBottomWidth: (i === CONST.BOARD_ROW_COLUMN_COUNT) ? CONST.BORDER_WIDTH : 0
                              }}>
                    &nbsp;
                </div>)
            }
            table.push(<div className='row' key={i}>{row}</div>)

        }
        return table
    }

    render () {
        return <div ref={(ref) => this.root = ref} className='dom-chess' style={{
            width: CONST.CANVAS_SIZE.WIDTH - 2 * CONST.CELL_SIDE_LENGTH + CONST.BORDER_WIDTH,
            height: CONST.CANVAS_SIZE.HEIGHT - 2 * CONST.CELL_SIDE_LENGTH + CONST.BORDER_WIDTH,
            padding: CONST.CELL_SIDE_LENGTH - CONST.BORDER_WIDTH / 2
        }}>
            {
                this.initBoard()
            }
            {
                this.addPieces()
            }
        </div>
    }
}