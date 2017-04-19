import React from 'react'
import Menu from './menu'
import {Link} from 'react-router-dom'
import ClassNames from 'classnames'

export default class Feature extends React.Component {

    getMenuItemClassNames (featureName) {
        return ClassNames(
            {selected: this.matchesUrl(featureName)}
        )
    }

    matchesUrl (value) {
        return value === this.props.match.params.featureName
    }

    findMatchedFeature () {
        return Menu.items.find((item) => {
            return this.matchesUrl(item.featureName)
        })
    }

    render () {
        let feature = this.findMatchedFeature()
        return <div className='feature'>
            <ul className='menus'>
                {
                    Menu.items.map((item, index) => {
                        return <li key={index} className={this.getMenuItemClassNames(item.featureName)}>
                            <Link to={'/feature/' + item.featureName}>{item.label}</Link>
                        </li>
                    })
                }
            </ul>
            <hr/>
            {
                feature ? feature.component : <div className='error'>Please try clicking above menu... </div>
            }
        </div>
    }
}