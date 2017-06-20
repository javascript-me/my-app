import React from 'react'
import OpeningDetail from './opening-detail.js'

export default class OpeningList extends React.Component {

    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        console.log('click apply... ')
    }

    render () {
        return <div>
            <ul>
                {
                    this.props.data.map((item, index) => {
                        return <li key={index}>
                            <OpeningDetail title={item.title} 
                                priority={item.priority} location={item.location} vacancy={item.vacancy} />
                        </li>
                    })
                }
            </ul>
        </div>
    }
}

OpeningList.propTypes = {
    data: React.PropTypes.array
}
