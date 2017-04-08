import React, { Component } from 'react'
import logo from './logo.svg'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Agents from '../agents/agents'
import CssPatterns from '../css-patterns/css-patterns'

export default class Main extends Component {
  render() {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to TW!... </h2>
            </div>
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/agents">Agents</Link></li>
                        <li><Link to="/css-patterns">CSS Patterns</Link></li>
                    </ul>
                    <hr/>
                    <Route exact path="/" component={Agents}/>
                    <Route path="/agents" component={Agents}/>
                    <Route path="/css-patterns" component={CssPatterns}/>
                </div>
            </Router>
        </div>
    )
  }
}
