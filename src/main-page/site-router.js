import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Gallery from './gallery'

export default class SiteRouter extends React.Component {

    render () {
        return <Router>
            <div>
                <Route exact path="/" component={Gallery}/>
                <Route path='/feature/:featureName' component={Gallery}/>
            </div>
        </Router>
    }
}
