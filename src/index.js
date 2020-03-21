import React from 'react'
import ReactDOM from 'react-dom'
import { persistStore } from 'redux-persist'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker'
import App from './App'
import rootReducer from './redux/reducers/rootReducer'
import { PersistGate } from 'redux-persist/integration/react'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
const persistor = persistStore(store)
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
