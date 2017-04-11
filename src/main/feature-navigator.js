import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Agents from '../agents/agents'
import CenterDiv from '../css-patterns/center-div/center-div'
import MultipleMedias from '../css-patterns/multiple-medias/multiple-medias'

import ClassNames from 'classnames'
import Feature from './feature'

export default class FeatureNavigator extends React.Component {

    // constructor (props) {
    //     super(props)
    //
    //     this.state = {
    //         menus: [
    //             {label: 'Home', url: '/', component: Agents},
    //             {label: 'Agents', url: '/agents', component: Agents},
    //             {label: 'Center Div', url: '/center-div', component: CenterDiv},
    //             {label: 'Multiple Media', url: '/multiple-media', component: MultipleMedias}
    //         ],
    //         selectedComponentIndex: 0
    //     }
    // }

    // getMenuItemClassNames (index) {
    //     return ClassNames(
    //         this.state.selectedComponentIndex === index ? 'selected' : ''
    //     )
    // }

    render () {
        return <div>
            <Router>
                <div>
                    <Route exact path="/" component={Agents}/>
                    <Route path='/feature/:featureName' component={Feature}/>
                </div>
            </Router>
        </div>
    }
}
