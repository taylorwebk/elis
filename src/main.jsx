import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {
  createStore,
  applyMiddleware
} from 'redux'

import 'semantic-ui-css/semantic.min.css'
import App from './app/App'
import rootReducer from './reducers'

const middleware = applyMiddleware(thunk, logger)
const store = createStore(rootReducer, middleware)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
