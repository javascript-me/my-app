import React from 'react'
import CONST from './const'
import ChessUtil from './chess-util'
import ClassNames from 'classnames'
import CanvasChess from './canvas-chess'
import DomChess from './dom-chess'

export default class FiveSonChess extends React.Component {

    constructor (props) {
        super(props)

        this.undo = this.undo.bind(this)
        this.redo = this.redo.bind(this)
        this.reset = this.reset.bind(this)

        this.handleClick = this.handleClick.bind(this)
        this.switchCanvasVersion = this.switchCanvasVersion.bind(this)
        this.switchDomVersion = this.switchDomVersion.bind(this)

        this.state = {
            startSide: CONST.PIECE_COLOR_BLACK,
            sequence: [],
            stackSequence: [],
            isWin: false,
            showCanvasVersion: true,
            showDomVersion: false
        }
    }

    switchCanvasVersion () {
        this.setState({
            showCanvasVersion: !this.state.showCanvasVersion
        })
    }

    switchDomVersion () {
        this.setState({
            showDomVersion: !this.state.showDomVersion
        })
    }

    handleClick (netX, netY) {
        if (this.state.isWin) return

        let sequence = this.state.sequence
        sequence.push({
            netX: netX,
            netY: netY,
            side: ChessUtil.getNextSide(sequence, this.state.startSide)
        })

        let isWin = ChessUtil.isWin(sequence, netX, netY)

        this.setState({
            sequence: sequence,
            isWin: isWin,
            stackSequence: []
        })
    }

    undo () {
        let sequence = this.state.sequence
        let stackSequence = this.state.stackSequence
        ChessUtil.movePiece(sequence, stackSequence)
        this.setState({
            sequence: sequence,
            stackSequence: stackSequence,
            isWin: false
        })
    }

    redo () {
        let sequence = this.state.sequence
        let stackSequence = this.state.stackSequence
        ChessUtil.movePiece(stackSequence, sequence)
        this.setState({
            sequence: sequence,
            stackSequence: stackSequence
        })
    }

    reset () {
        this.setState({
            sequence: [],
            stackSequence: [],
            isWin: false
        })
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
            <div className='five-sun-chess-canvas'>
                <div className='board'>
                    {
                        this.state.showCanvasVersion
                        && <CanvasChess sequence={this.state.sequence} onClick={this.handleClick} />
                    }
                </div>
                <div className='board'>
                    <div className='button-group-slim'>
                        <div className='button-slim' onClick={this.switchCanvasVersion}>{'<'}</div>
                        <div className='button-slim' onClick={this.switchDomVersion}>{'>'}</div>
                    </div>
                    <div className={this.getButtonClassNames(this.state.sequence)} onClick={this.undo}>悔棋</div>
                    <div className={this.getButtonClassNames(this.state.stackSequence)} onClick={this.redo}>进棋</div>
                    <div className='button' onClick={this.reset}>重置</div>
                    {
                        this.state.isWin && <div className='label' onClick={this.reset}>赢啦</div>
                    }
                </div>
                <div className='board'>
                    {
                        this.state.showDomVersion
                        && <DomChess sequence={this.state.sequence} onClick={this.handleClick}  />
                    }
                </div>
            </div>
        )
    }
}