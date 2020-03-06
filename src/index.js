import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import store from './redux/store'
import thunk from 'redux-thunk'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
