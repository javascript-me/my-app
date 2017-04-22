import React from 'react'
import GalleryItems from './gallery-items'
import {Link} from 'react-router-dom'
import ClassNames from 'classnames'

export default class Gallery extends React.Component {

    getMenuItemClassNames (featureName) {
        return ClassNames(
            {selected: this.matchesUrl(featureName)}
        )
    }

    matchesUrl (value) {
        return value === this.props.match.params.featureName
    }

    findMatchedFeature () {
        return GalleryItems.items.find((item) => {
            return this.matchesUrl(item.featureName)
        })
    }

    render () {
        let feature = this.findMatchedFeature()
        return <div className='feature'>
            <ul className='menus'>
                {
                    GalleryItems.items.map((item, index) => {
                        return <li key={index} className={this.getMenuItemClassNames(item.featureName)}>
                            <Link to={'/feature/' + item.featureName}>{item.label}</Link>
                        </li>
                    })
                }
            </ul>
            <div className='horizontal-rule' />
            {
                feature ? feature.component : <div className='error'>Please try clicking above menu... </div>
            }
        </div>
    }
}