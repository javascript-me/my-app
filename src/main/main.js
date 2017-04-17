import React, { Component } from 'react'
import logo from './logo.svg'
import FeatureNavigator from './feature-navigator'

export default class Main extends Component {
    render() {
        return (
            <div className="app">
                <div className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
                    <h2>Welcome to React!</h2>
                </div>
                <FeatureNavigator />
            </div>
        )
    }
}
