import React from 'react'
import ChessUtil from './chess-util'
import CONST from './const'

export default class Chess extends React.Component {

    constructor (props) {
        super(props)
        this.handleMouseDown = this.handleMouseDown.bind(this)
        this.handleMouseMove = this.handleMouseMove.bind(this)
    }

    componentDidMount() {
        this.rootDom.addEventListener('mousedown', this.handleMouseDown)
        this.rootDom.addEventListener('mousemove', this.handleMouseMove)
    }

    componentWillUnmount () {
        this.rootDom.removeEventListener('mousedown', this.handleMouseDown)
        this.rootDom.removeEventListener('mousemove', this.handleMouseMove)
    }

    handleMouseDown (e) {
        let canvasX = e.clientX + document.body.scrollLeft - this.rootDom.offsetLeft
        let canvasY = e.clientY + document.body.scrollTop - this.rootDom.offsetTop

        let netX = ChessUtil.calculateNetPosition(canvasX, CONST.CELL_SIDE_LENGTH)
        let netY = ChessUtil.calculateNetPosition(canvasY, CONST.CELL_SIDE_LENGTH)

        if (!ChessUtil.insideBoard(netX, netY)) return
        if (!ChessUtil.isNewNetXY(this.props.sequence, netX, netY)) return

        this.props.onClick(netX, netY)
    }

    handleMouseMove (e) {

    }

    render () {
        return <div>Parent class should not be used directly. </div>
    }
}