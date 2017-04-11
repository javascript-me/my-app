import React from 'react'
import Menu from './menu'
import {Link} from 'react-router-dom'
import ClassNames from 'classnames'

export default class Feature extends React.Component {

    constructor (props) {
        super(props)
    }

    getMenuItemClassNames (url) {
        return ClassNames(
            {selected: url === this.props.match.params.featureName}
        )
    }

    render () {

        let result = Menu.find((item) => {
            return item.url === this.props.match.params.featureName
        })

        return <div>
            <ul className='menus'>
                {
                    Menu.map((item, index) => {
                        return <li key={index} className={this.getMenuItemClassNames(item.url)}>
                            <Link to={item.url}>{item.label}</Link>
                        </li>
                    })
                }
            </ul>
            <hr/>
            {result.component}
        </div>

    }

}