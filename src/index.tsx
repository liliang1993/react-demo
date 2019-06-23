// import { LocaleProvider } from 'antd'
import React from 'react'
import ReactDOM from 'react-dom'
import './style/reset.less'
import './font/font.less'
import App from './App'
import * as serviceWorker from './serviceWorker'
import reducer from './store'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './store/saga'
import { Provider } from 'react-redux'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
console.log('process.env.REACT_APP_BASEURL', process.env.REACT_APP_BASEURL)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
