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

    componentDidMount () {
        let thisReactDOM = ReactDOM

        window.addEventListener('click', (e) => {
            let clickedNode = e.target
            let resourceAddingPanelNode = thisReactDOM.findDOMNode(this.refs.resourceCreator);
            //let node = ReactDOM.findDOMNode(this.refs.resourceCreator)
            // console.log(node)
            console.log(clickedNode)
            console.log(resourceAddingPanelNode)

            if (clickedNode === resourceAddingPanelNode) {
                console.log('same node')
            }

            if (clickedNode.parentNode === resourceAddingPanelNode) {
                console.log('is direct child node')
            }

            if (ResourceAddingPanel.containsChild(resourceAddingPanelNode, clickedNode)) {
                console.log('containsChild...')
            }

        })
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