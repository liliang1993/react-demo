import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
const routes = require('./router/index')
// import BasicLayout from './layout/BasicLayout'
// import Articles from './views/Articles/Articles'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Switch>
          <Route path="/" component={BasicLayout} />
        </Switch> */}
        {renderRoutes(routes)}
      </BrowserRouter>
    )
  }
}

export default App
