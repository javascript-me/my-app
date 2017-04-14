import React from 'react'
import ReactDOM from 'react-dom'

export default class ResourceAddingPanel extends React.Component {

    constructor (props) {
        super(props)

        this.changeText = this.changeText.bind(this)
        this.addResources = this.addResources.bind(this)
        this.openResourceAddingPanel = this.openResourceAddingPanel.bind(this)
        this.closeResourceAddingPanel = this.closeResourceAddingPanel.bind(this)
        this.clickHandler = this.clickHandler.bind(this)

        this.state = {
            value: '',
            visibleResourceAddingPanel: false
        }
    }

    static containsChild (host, target) {
        if (!host) return false
        if (!target) return false
        if (host === target) return true
        return ResourceAddingPanel.containsChild(host, target.parentNode)
    }

    clickHandler (e) {
        let clickedNode = e.target
        let resourceAddingPanelNode = ReactDOM.findDOMNode(this.refs.resourceCreator)
        if (ResourceAddingPanel.containsChild(resourceAddingPanelNode, clickedNode)) return
        this.closeResourceAddingPanel()
    }

    changeText (e) {
        this.setState({
            value: e.target.value
        })
    }

    addResources () {
        let trimmedString = this.state.value.trim()
        if (!trimmedString) return
        let newResources = trimmedString.split(',')
        this.setState({
            visibleResourceAddingPanel: false
        })
        this.props.updateResources(newResources)
    }

    openResourceAddingPanel () {
        this.setState({
            visibleResourceAddingPanel: true
        })
        window.addEventListener('click', this.clickHandler)
    }

    closeResourceAddingPanel () {
        this.setState({
            visibleResourceAddingPanel: false
        })
        window.removeEventListener('click', this.clickHandler)
    }

    render () {
        return <div ref='resourceCreator' className='resource-creator-wrapper'>
            +
            <span className='add-resource underline' onClick={this.openResourceAddingPanel}>
                Specify Resources
            </span>
            {
                this.state.visibleResourceAddingPanel
                ? <div className='resource-creator'>
                    <span className="icon-triangle"></span>
                    <div>(Separate multiple resources name with commas)</div>
                    <input className='input-field' type='text' value={this.state.value} onChange={this.changeText}></input>
                    <div>
                        <div className='round-button' onClick={this.addResources}>Add resources</div>
                        <div className='round-button' onClick={this.closeResourceAddingPanel}>Close</div>
                    </div>
                </div>
                : null
            }
        </div>
    }

}