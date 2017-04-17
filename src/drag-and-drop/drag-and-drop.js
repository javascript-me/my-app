import React from 'react'

export default class DragAndDrop extends React.Component {

    constructor (props) {
        super(props)
        this.changePosition = this.changePosition.bind(this)
        this.handleMouseDown = this.handleMouseDown.bind(this)

        this.state = {
            locationStyle: {top: '20px', left: '20px'}
        }
    }

    handleMouseDown (e) {
        console.log(e.target.clientX + ' : ' + e.target.clientY)

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
                onMouseDown={this.handleMouseDown}>
                hello
            </div>
            <button onClick={this.changePosition}>Change Position</button>
        </div>


    }
}