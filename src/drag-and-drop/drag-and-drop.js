import React from 'react'
import DragAndDropUtil from './drag-and-drop-util'

export default class DragAndDrop extends React.Component {

    constructor (props) {
        super(props)
        this.handleEvent = this.handleEvent.bind(this)
        this.state = {
            locationStyle: {left: '300px', top: '300px'},
            isDragging: false
        }
        this.diffX = 0
        this.diffY = 0
    }

    componentDidMount () {
        this.enableDragAndDrop()
    }

    componentWillUnmount () {
        this.disableDragAndDrop()
    }

    disableDragAndDrop () {
        document.removeEventListener('mousedown', this.handleEvent)
        document.removeEventListener('mousemove', this.handleEvent)
        document.removeEventListener('mouseup', this.handleEvent)
    }

    enableDragAndDrop () {
        document.addEventListener('mousedown', this.handleEvent)
        document.addEventListener('mousemove', this.handleEvent)
        document.addEventListener('mouseup', this.handleEvent)
    }

    handleEvent (e) {
        e.type === 'mousedown' && this.handleMouseDown(e)
        e.type === 'mousemove' && this.handleMouseMove(e)
        e.type === 'mouseup' && this.handleMouseUp()
    }

    handleMouseDown(e) {
        if (e.target.className === 'draggable-item') {
            this.diffX = e.clientX - e.target.offsetLeft
            this.diffY = e.clientY - e.target.offsetTop
            this.setState({
                isDragging: true
            })
        }
    }

    handleMouseMove(e) {
        if (this.state.isDragging) {
            let newLeft = e.clientX - this.diffX
            let newTop = e.clientY - this.diffY
            this.setState({
                locationStyle: DragAndDropUtil.createLocationStyle(newLeft, newTop)
            })
        }
    }

    handleMouseUp() {
        this.setState({
            isDragging: false
        })
    }

    changePosition (newLeft, newTop) {
        this.setState({
            locationStyle: DragAndDropUtil.createLocationStyle(newLeft, newTop)
        })
    }

    render () {
        return <div className='draggable-item-container'>
            <div className='draggable-item' style={this.state.locationStyle}>
                Drag Me...
            </div>
            <button onClick={() => this.changePosition(40, 40)}>Change to new position (left: 20px, top: 20px)</button>
        </div>
    }
}