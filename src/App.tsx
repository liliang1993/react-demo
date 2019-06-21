import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
// import { renderRoutes } from 'react-router-config'
// import routes from './router/index'
import BasicLayout from './layout/BasicLayout'
// import Articles from './views/Articles/Articles'
import { connect } from 'react-redux'
import { getInfo } from './store/action'

class App extends Component {
  render() {
    const { info } = this.props
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={BasicLayout} />
        </Switch>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = ({ info }: any) => {
  return { info }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: dispatch(getInfo())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
