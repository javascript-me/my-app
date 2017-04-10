import React from 'react'
import ReactDOM from 'react-dom'

export default class ResourceAddingPanel extends React.Component {

    constructor (props) {
        super(props)

        this.changeText = this.changeText.bind(this)
        this.addResources = this.addResources.bind(this)

        this.state = {
            value: ''
        }
    }

    static containsChild (host, target) {
        if (!host) return false
        if (!target) return false
        if (host === target) return true
        return ResourceAddingPanel.containsChild(host, target.parentNode)
    }

    pageClickHandler (e) {
        let clickedNode = e.target
        let resourceAddingPanelNode = ReactDOM.findDOMNode(this.refs.resourceCreator);

        if (clickedNode.innerHTML === 'Specify Resources') return
        if (ResourceAddingPanel.containsChild(resourceAddingPanelNode, clickedNode)) return
        this.props.onClose()
        console.log('click else area... ')
    }

    componentDidMount () {
        let clickHandler = (e) => {
            let clickedNode = e.target
            let resourceAddingPanelNode = ReactDOM.findDOMNode(this.refs.resourceCreator);

            if (clickedNode.innerHTML === 'Specify Resources') return
            if (ResourceAddingPanel.containsChild(resourceAddingPanelNode, clickedNode)) return

            window.removeEventListener('click', clickHandler)
            this.props.onClose()
        }

        window.addEventListener('click', clickHandler)
    }

    changeText (e) {
        this.setState({
            value: e.target.value
        })
    }

    addResources () {
        this.props.onAddedResources(this.state.value)
    }

    render () {
        return <div ref='resourceCreator' className='resource-creator'>
            <span className="icon-triangle"></span>
            <div>(Separate multiple resources name with commas)</div>
            <input className='input-field' type='text' value={this.state.value} onChange={this.changeText}></input>
            <div>
                <div className='round-button' onClick={this.addResources}>Add resources</div>
                <div className='round-button' onClick={this.props.onClose}>Close</div>
            </div>
        </div>
    }

}