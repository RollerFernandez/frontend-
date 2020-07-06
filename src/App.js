import React, { Component } from 'react'
import RootNavigator from './routes/main'
import { BrowserRouter as Router } from 'react-router-dom'

export default class extends Component {
  render() {
    return (
      <Router>
        <RootNavigator />
      </Router>
    )
  }
}

