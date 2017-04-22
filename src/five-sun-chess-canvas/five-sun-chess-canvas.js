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
        context.clearRect(0,0, CONST.CANVAS_SIZE.WIDTH, CONST.CANVAS_SIZE.HEIGHT)

        context.fillStyle = CONST.CANVAS_COLOR

        fillRectangle({context, x: 0, y: 0, width: CONST.CANVAS_SIZE.WIDTH, height: CONST.CANVAS_SIZE.HEIGHT})

        context.fillStyle = 'green'



        strokeRectangle({context, x: 0, y: 0, width: CONST.CELL_SIDE_LENGTH, height: CONST.CELL_SIDE_LENGTH})
        strokeRectangle({context, x: 50, y: 50, width: CONST.CELL_SIDE_LENGTH, height: CONST.CELL_SIDE_LENGTH})


    }

    render() {
        return (
            <canvas ref="canvas" width={CONST.CANVAS_SIZE.WIDTH} height={CONST.CANVAS_SIZE.WIDTH} />
        )
    }
}