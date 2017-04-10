import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Agents from '../agents/agents'
import CenterDiv from '../css-patterns/center-div/center-div'
import MultipleMedias from '../css-patterns/multiple-medias/multiple-medias'

export default class FeatureNavigator extends React.Component {

    render () {
        return <div>
            <Router>
                <div>
                    <ul className='menus'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/agents">Agents</Link></li>
                        <li><Link to="/center-div">Center Div</Link></li>
                        <li><Link to="/multiple-media">Multiple Media</Link></li>
                    </ul>
                    <hr/>
                    <Route exact path="/" component={Agents}/>
                    <Route path="/agents" component={Agents}/>
                    <Route path="/center-div" component={CenterDiv}/>
                    <Route path="/multiple-media" component={MultipleMedias}/>
                </div>
            </Router>
        </div>
    }
}
