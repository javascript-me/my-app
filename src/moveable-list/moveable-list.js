import React from 'react'

export default class MoveableList extends React.Component {

    constructor (props) {
        super(props)
        this.handleEvent = this.handleEvent.bind(this)
        this.state = {
            list: ['hello', 'anthony', 'chen']
        }
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
        console.log('down..')
    }

    handleMouseMove(e) {
        console.log('move..')
    }

    handleMouseUp(e) {
        console.log('up..')
    }

    render () {
        return <div className='moveable-list'>
            <ul>
                {
                    this.state.list.map((item, index) => {
                        return <li className='item' key={index}>
                            {item}
                            <div className='shadow'>shadow</div>
                        </li>
                    })
                }
            </ul>
        </div>
    }
}