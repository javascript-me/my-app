import React from 'react'
import ReactDOM from 'react-dom'

function rect(props) {
    const {ctx, x, y, width, height} = props
    ctx.fillRect(x, y, width, height)
}

export default class FiveSunChessCanvas extends React.Component {

    constructor (props) {
        super(props)
    }

    componentDidMount() {
        this.updateCanvas()
        let canvasDom = ReactDOM.findDOMNode(this.refs.canvas)
        canvasDom.addEventListener('mousedown', this.handleMouseDown)
    }
    
    componentDidUpdate() {
        this.updateCanvas()
    }

    handleMouseDown (e) {
        console.log('down. down.. ')
        console.log('e.clientX: ' + e.clientX)
        console.log('e.clientY: ' + e.clientY)

    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d')
        ctx.clearRect(0,0, 300, 300)

        rect({ctx, x: 10, y: 10, width: 50, height: 50})
        rect({ctx, x: 110, y: 110, width: 50, height: 50})
    }

    render() {
        return (
            <canvas ref="canvas" width={300} height={300}/>
        )
    }
}