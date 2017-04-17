import React from 'react'

export default class DragAndDrop extends React.Component {

    constructor (props) {
        super(props)

        this.handleMouseDown = this.handleMouseDown.bind(this)
        this.handleMouseMove = this.handleMouseMove.bind(this)
        this.handleMouseUp = this.handleMouseUp.bind(this)

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
        console.log('e.type: ' + e.type)

        if (e.type === 'mousedown') {

        }


        if (e.type === 'mousemove') {

        }


        if (e.type === 'mouseup') {

        }
    }

    handleMouseDown (e) {
        console.log('down')

        if (e.target.className === 'draggable-item') {
            this.diffX = e.clientX - e.target.offsetLeft
            this.diffY = e.clientY - e.target.offsetTop
            this.setState({
                isDragging: true
            })
        }
    }

    handleMouseMove (e) {
        console.log('move')

        if (this.state.isDragging) {
            let newLeft = e.clientX - this.diffX
            let newTop = e.clientY - this.diffY

            // Here we ensure the green block is not moved out of visible window area.
            if (newLeft < 0) newLeft = 0
            if (newTop < 0) newTop = 0
            if (newLeft + e.target.offsetWidth > window.innerWidth) newLeft = window.innerWidth - e.target.offsetWidth
            if (newTop + e.target.offsetHeight > window.innerHeight) newTop = window.innerHeight - e.target.offsetHeight

            console.log('window.innerWidth: ' + window.innerWidth)
            console.log('window.innerHeight: ' + window.innerHeight)
            console.log('window.outerWidth: ' + window.outerWidth)
            console.log('window.outerHeight: ' + window.outerHeight)
            console.log('e.clientX: ' + e.clientX + ', e.clientY: ' + e.clientY)

            this.setState({
                locationStyle: this.createLocationStyle(newLeft, newTop)
            })
        }
    }

    handleMouseUp (e) {
        console.log('up')
        this.setState({
            isDragging: false
        })
    }

    createLocationStyle (newLeft, newTop) {
        return {left: newLeft + 'px', top: newTop + 'px'}
    }

    changePosition (newLeft, newTop) {
        this.setState({
            locationStyle: this.createLocationStyle(newLeft, newTop)
        })
    }

    render () {
        return <div className='draggable-item-container'>
            <div className='draggable-item' style={this.state.locationStyle}
                onMouseDown={this.handleMouseDown}
                onMouseMove={this.handleMouseMove}
                onMouseUp={this.handleMouseUp}>
                Drag Me...
            </div>
            <button onClick={() => this.changePosition(40, 40)}>Change to new position (left: 20px, top: 20px)</button>
        </div>
    }
}