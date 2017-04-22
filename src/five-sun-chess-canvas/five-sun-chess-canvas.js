import React from 'react'
import ReactDOM from 'react-dom'
import CONST from './const'

function rectangle(props) {
    const {context, x, y, width, height} = props
    context.fillRect(x, y, width, height)
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
        context.clearRect(0,0, 300, 300)

        context.fillStyle = '#EEEEEE'

        rectangle({context, x: 0, y: 0, width: CONST.SIZE.WIDTH, height: CONST.SIZE.HEIGHT})

        context.fillStyle = 'green'


        rectangle({context, x: 10, y: 10, width: 50, height: 50})
        rectangle({context, x: 110, y: 110, width: 50, height: 50})
    }

    render() {
        return (
            <canvas ref="canvas" width={CONST.SIZE.WIDTH} height={CONST.SIZE.WIDTH} />
        )
    }
}