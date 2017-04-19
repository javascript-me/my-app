import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Feature from './feature'

export default class FeatureNavigator extends React.Component {

    render () {
        return <Router>
            <div>
                <Route exact path="/" component={Feature}/>
                <Route path='/feature/:featureName' component={Feature}/>
            </div>
        </Router>
    }
}
