import React from 'react'
import DragAndDropUtil from '../drag-and-drop/drag-and-drop-util'

export default class MoveableList extends React.Component {

    constructor (props) {
        super(props)
        this.handleEvent = this.handleEvent.bind(this)
        this.state = {
            list: [
                {
                    label: 'hello...',
                    isDragging: false,
                    locationStyle: {left: '0px', top: '0px'},
                    diffX: 0,
                    diffY: 0
                },
                {
                    label: 'anthony',
                    isDragging: false,
                    locationStyle: {left: '0px', top: '0px'},
                    diffX: 0,
                    diffY: 0
                },
                {
                    label: 'chen',
                    isDragging: false,
                    locationStyle: {left: '0px', top: '0px'},
                    diffX: 0,
                    diffY: 0
                },
            ]
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
        let firstClassName = DragAndDropUtil.getFirstClassName(e.target.className)

        if (firstClassName !== 'dragging-icon') return

        let index = DragAndDropUtil.getItemIndexFromClassNames(e.target.className)
        let list = this.state.list

        list.forEach((item, i) => {
            if ((i === index)) {
                item.isDragging = true

                console.log('e.clientX: ' + e.clientX)
                console.log('e.target.offsetLeft: ' + e.target.offsetLeft)

                //offsetLeft is compare with its parent dom.

                item.diffX = e.clientX - e.target.offsetLeft
                item.diffY = e.clientY - e.target.offsetTop
            } else {
                item.isDragging = false
                item.diffX = 0
                item.diffY = 0
            }

        })

        this.setState({
            list: list
        })

    }

    handleMouseMove(e) {
        let list = this.state.list
        list.forEach((item) => {
            if (item.isDragging) {
                // let newLeft = e.clientX - item.diffX
                let newTop = e.clientY - item.diffY
                item.locationStyle = DragAndDropUtil.createLocationStyle(0, newTop)
            }
        })

        this.setState({
            list: list
        })

    }

    handleMouseUp(e) {
        let list = this.state.list
        list.forEach((item) => {
            item.isDragging = false
        })

        this.setState({
            list: list
        })
    }

    render () {
        return <div className='moveable-list'>
            <ul>
                {
                    this.state.list.map((item, index) => {
                        return <li className={`item ${index}`} key={index}>
                            <div className='shadow' style={item.locationStyle}>shadow</div>

                            <div className={`dragging-icon ${index}`}>Dragging ICON</div>
                            <div className='label'>{item.label}</div>

                        </li>
                    })
                }
            </ul>
            <div>{JSON.stringify(this.state.list, null, 4)}</div>
        </div>
    }
}