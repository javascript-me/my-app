import React, { Component } from 'react'
import logo from './logo.svg'
import SiteRouter from './site-router'

export default class Main extends Component {
    render() {
        return (
            <div className="app">
                <div className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
                    <h2>Welcome to Gallery! [{new Date().toLocaleString()}]</h2>
                </div>
                <SiteRouter />
            </div>
        )
    }
}
