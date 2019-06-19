import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
// import { renderRoutes } from 'react-router-config'
import routes from './router/index'
import BasicLayout from './layout/BasicLayout'
import Articles from './views/Articles/Articles'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={BasicLayout} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
