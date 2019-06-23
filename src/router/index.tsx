// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BasicLayout from '../layout/BasicLayout'
import Articles from '../views/Articles/Articles'

module.exports = [
  {
    path: '/',
    component: BasicLayout,
    routes: [
      {
        path: '/articles',
        component: Articles
      }
    ]
  }
]
