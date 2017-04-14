import React from 'react'
import ResourceList from './resource-list'
import ResourceAddingPanel from './resource-adding-panel'
import ClassNames from 'classnames'

export default class Agent extends React.Component {

    constructor (props) {
        super(props)

        this.deleteResource = this.deleteResource.bind(this)
        this.updateResources = this.updateResources.bind(this)

        this.state = {
            resources: this.props.resources,
            visibleResourceAddingPanel: false
        }
    }

    deleteResource (item) {
        let resources = this.state.resources
        let newResources = resources.filter((element) => {
            return element !== item
        })
        this.setState({
            resources: newResources
        })
    }

    updateResources (value) {
        let resources = this.state.resources
        resources = resources.concat(value)
        this.setState({
            resources: resources
        })
    }

    getAgentItemClassName () {
        return ClassNames(
            'agent-item',
            this.props.buildingStatus
        )
    }

    render () {
        return <div className={this.getAgentItemClassName()}>
            <div className="section">
                <span className='host-server'>{this.props.hostServer}</span>
                <div className='statuses'>
                    <span className='status-label'>{this.props.buildingStatus}</span>
                    <span className='status-label'>{this.props.ip}</span>
                    <span className='status-label'>{this.props.path}</span>
                </div>
            </div>
            <div className="section">
                <ResourceAddingPanel updateResources={this.updateResources} />
                <span className='status-label'>Resources: </span>
                <ResourceList resources={this.state.resources} onDelete={this.deleteResource} />
            </div>

        </div>
    }
}
