import React from 'react'
import OpeningList from './opening-list.js'

export default class CategoryList extends React.Component {

    render () {
        
        return <div>
            <ul>
                {
                    this.props.listData.map((item, index) => {                     
                        return <li key={index}>
                            <div>Region: {item.region}</div>
                            <OpeningList data={item.openings} />
                        </li>
                    })
                }
            </ul>
        </div>
    }
}

CategoryList.propTypes = {
    listData: React.PropTypes.array
}