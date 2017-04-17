import React from 'react'
import ReactDOM from 'react-dom'

export default class DragAndDrop extends React.Component {

    constructor (props) {
        super(props)
        this.changePosition = this.changePosition.bind(this)
        this.handleMouseDown = this.handleMouseDown.bind(this)
        this.handleMouseMove = this.handleMouseMove.bind(this)
        this.handleMouseUp = this.handleMouseUp.bind(this)

        this.state = {
            locationStyle: {top: '20px', left: '20px'},
            isDragging: false
        }
    }

    handleMouseDown (e) {
        this.setState({
            isDragging: e.target.className === 'draggable-item'
        })
    }

    handleMouseMove (e) {
        if (this.state.isDragging) {
            console.log('mouse-x: ' + e.clientX + ', mouse-y: ' + e.clientY)
        }
    }

    handleMouseUp (e) {
        this.setState({
            isDragging: false
        })
    }

    changePosition () {
        let locationStyle = Object.assign({}, this.state.locationStyle)

        locationStyle.top = '40px'
        locationStyle.left = '40px'

        this.setState({
            locationStyle: locationStyle
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
            <button onClick={this.changePosition}>Change Position</button>
        </div>


    }
}