import React, { Component } from 'react'
import logo from './logo.svg'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Agents from '../agents/agents'
import CenterDiv from '../css-patterns/center-div/center-div'
import MultipleMedias from '../css-patterns/multiple-medias/multiple-medias'

export default class Main extends Component {
  render() {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to TW! </h2>
            </div>
            <Router>
                <div>
                    <ul>
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
    )
  }
}
