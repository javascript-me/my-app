import React from 'react'
import Menu from './menu'
import {Link} from 'react-router-dom'
import ClassNames from 'classnames'

export default class Feature extends React.Component {

    getMenuItemClassNames (featureName) {
        return ClassNames(
            {selected: featureName === this.props.match.params.featureName}
        )
    }

    render () {
        let result = Menu.items.find((item) => {
            return item.featureName === this.props.match.params.featureName
        })

        return <div>
            <ul className='menus'>
                {
                    Menu.items.map((item, index) => {
                        return <li key={index} className={this.getMenuItemClassNames(item.featureName)}>
                            <Link to={item.featureName}>{item.label}</Link>
                        </li>
                    })
                }
            </ul>
            <hr/>
            {result.component}
        </div>
    }
}