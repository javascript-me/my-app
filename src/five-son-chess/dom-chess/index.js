import React from 'react'
import CONST from '../const'

export default class DomChess extends React.Component {

    initBoard () {
        let table = []
        for (let i = 1; i <= CONST.BOARD_ROW_COLUMN_COUNT; i++) {
            let row = []
            for (let j = 1; j <= CONST.BOARD_ROW_COLUMN_COUNT; j++) {
                row.push(<div className='cell'
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
            table.push(<div className='row'>{row}</div>)
        }
        return table
    }

    render () {
        return <div className='dom-chess' style={{
            width: CONST.CANVAS_SIZE.WIDTH - 2 * CONST.CELL_SIDE_LENGTH + CONST.BORDER_WIDTH,
            height: CONST.CANVAS_SIZE.HEIGHT - 2 * CONST.CELL_SIDE_LENGTH + CONST.BORDER_WIDTH
        }}>
            {
                this.initBoard()
            }
        </div>
    }
}