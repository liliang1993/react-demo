// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

module.exports = [
  {
    path: '/',
    exact: true,
    component: '../layout/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/article'
      },
      {
        path: '/article',
        name: 'article'
      }
    ]
  }
]
