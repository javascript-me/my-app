import React from 'react'
import CONST from './const'
import ChessUtil from './chess-util'
import ClassNames from 'classnames'
import Canvas from './canvas'

export default class FiveSonChess extends React.Component {

    constructor (props) {
        super(props)

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