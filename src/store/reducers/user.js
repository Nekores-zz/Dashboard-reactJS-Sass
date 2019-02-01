import {
    USERS_GET,
  } from 'store/definitions'
  
  const initialState = {
    data:[],
    total_count:0,
  }
  
  export default ( state = initialState, action ) => {
    switch(action.type){
      case USERS_GET:
      return Object.assign({}, state, {
        ...state,
        total_count: action.total_count,
        data: action.isReload ? action.data : [...state.data, ...action.data]
      })
        
      default: 
        return state
    }
  }