import {
    USER_DETAIL_GET,
  } from 'store/definitions'
  
  const initialState = {}
  
  export default ( state = initialState, action ) => {
    switch(action.type){
      case USER_DETAIL_GET:
        return Object.assign({}, action.userDetail)
        
      default: 
        return state
    }
  }