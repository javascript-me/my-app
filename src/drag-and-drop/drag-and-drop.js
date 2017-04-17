import React from 'react'

export default class DragAndDrop extends React.Component {

    constructor (props) {
        super(props)

        this.handleMouseDown = this.handleMouseDown.bind(this)
        this.handleMouseMove = this.handleMouseMove.bind(this)
        this.handleMouseUp = this.handleMouseUp.bind(this)

        this.state = {
            locationStyle: {left: '300px', top: '300px'},
            isDragging: false
        }

        this.diffX = 0
        this.diffY = 0
    }

    handleMouseDown (e) {
        if (e.target.className === 'draggable-item') {
            this.diffX = e.clientX - e.target.offsetLeft
            this.diffY = e.clientY - e.target.offsetTop
            this.setState({
                isDragging: true
            })
        }
    }

    handleMouseMove (e) {
        if (this.state.isDragging) {
            this.setState({
                locationStyle: this.createPosition(e.clientX - this.diffX, e.clientY - this.diffY)
            })
        }
    }

    handleMouseUp (e) {
        this.setState({
            isDragging: false,
            locationStyle: this.createPosition(e.clientX - this.diffX, e.clientY - this.diffY)
        })
    }

    createPosition (newLeft, newTop) {
        return {left: newLeft + 'px', top: newTop + 'px'}
    }

    changePosition (newLeft, newTop) {
        this.setState({
            locationStyle: this.createPosition(newLeft, newTop)
        })
    }

    render () {
        return <div className='draggable-item-container'>
            <div className='draggable-item' style={this.state.locationStyle}
                onMouseDown={this.handleMouseDown}
                onMouseMove={this.handleMouseMove}
                onMouseUp={this.handleMouseUp}>
                hello
            </div>
            <button onClick={() => this.changePosition(40, 40)}>Change to new position (left: 20px, top: 20px)</button>
        </div>
    }
}