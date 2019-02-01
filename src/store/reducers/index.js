// Redux
import { combineReducers } from 'redux'

// Router
import { connectRouter } from 'connected-react-router'

// Reducers
import { reducer as formReducer } from 'redux-form'
import customers from './customers'


import filterUser from './filterUser'
import user from './user'
import userDetail from './userDetail'

const reducers = (history) => combineReducers({
  router: connectRouter(history),
  filterUser,
  users : user,
  forms: formReducer,
  customers,
  userDetail,
})

export default reducers