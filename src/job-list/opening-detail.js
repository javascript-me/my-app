import React from 'react'

export default class OpeningDetail extends React.Component {

    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        console.log('click apply... ')
    }

    render () {
        return <div>
            <div>Title: {this.props.title}</div>
            <div>Priority: {this.props.priority}</div>
            <div>Location: {this.props.location}</div>
            <div>Vacancy: {this.props.vacancy}</div>
            <div onClick={this.handleClick}>Apply</div>
        </div>
    }
}

OpeningDetail.propTypes = {
    title: React.PropTypes.string, 
    priority: React.PropTypes.string, 
    location: React.PropTypes.string, 
    vacancy: React.PropTypes.number
}