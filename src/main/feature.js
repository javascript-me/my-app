import React from 'react'
import Menu from './menu'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Agents from '../agents/agents'
import CenterDiv from '../css-patterns/center-div/center-div'
import MultipleMedias from '../css-patterns/multiple-medias/multiple-medias'

import ClassNames from 'classnames'

export default class Feature extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            selectedComponentIndex: 0
        }
    }

    getMenuItemClassNames (index) {
        return ClassNames(
            this.state.selectedComponentIndex === index ? 'selected' : ''
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
                        return <li key={index} className={this.getMenuItemClassNames(index)}>
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