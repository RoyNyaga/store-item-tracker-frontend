import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './redux/reducers/rootReducer'

const store = createStore(rootReducer, applyMiddleware(thunk))
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))

serviceWorker.unregister()
