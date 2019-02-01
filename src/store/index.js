// Redux 
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// Router
import { routerMiddleware } from 'connected-react-router'

// History
import createBrowserHistory from 'history/createBrowserHistory'

// Reducers
import reducers from './reducers'

// Create browser history state
export const history = createBrowserHistory()

const initialState = {}
const enhancers = []
const middleware = [thunk, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development'){
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function'){
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export const store = createStore(reducers(history), initialState, composedEnhancers)
