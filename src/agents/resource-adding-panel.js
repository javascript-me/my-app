import React from 'react'
import ReactDOM from 'react-dom'

export default class ResourceAddingPanel extends React.Component {

    constructor (props) {
        super(props)

        this.changeText = this.changeText.bind(this)
        this.addResources = this.addResources.bind(this)
        this.openResourceAddingPanel = this.openResourceAddingPanel.bind(this)
        this.closeResourceAddingPanel = this.closeResourceAddingPanel.bind(this)

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

    componentDidMount () {
        let clickHandler = (e) => {
            let clickedNode = e.target
            let resourceAddingPanelNode = ReactDOM.findDOMNode(this.refs.resourceCreator)

            console.log('findDOMNode...')

            if (ResourceAddingPanel.containsChild(resourceAddingPanelNode, clickedNode)) return

            // window.removeEventListener('click', clickHandler)

            this.closeResourceAddingPanel()
        }

        window.addEventListener('click', clickHandler)
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
    }

    closeResourceAddingPanel () {
        this.setState({
            visibleResourceAddingPanel: false
        })
    }

    render () {
        return <div ref='resourceCreator'>
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