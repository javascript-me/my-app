import React, { Component } from 'react'
import logo from './logo.svg'
import Agents from '../agents/agents'

export default class Main extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to TW!... </h2>
        </div>
        <Agents />
      </div>
    )
  }
}
