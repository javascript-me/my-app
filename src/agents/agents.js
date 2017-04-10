import React from 'react'
import AgentList from './agent-list'

export default class Agents extends React.Component {

    render () {
        return <div className='agent-container'>
            <AgentList />
        </div>
    }
}

