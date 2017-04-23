import React from 'react'
import CONST from '../const'
import ReactDOM from 'react-dom'
import Chess from '../chess'

export default class DomChess extends Chess {

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
        return <div ref={(ref) => {
            this.rootDom = ReactDOM.findDOMNode(ref)
            return this.root = ref
        }} className='dom-chess' style={{
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