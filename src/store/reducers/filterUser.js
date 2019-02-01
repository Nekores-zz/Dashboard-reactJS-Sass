import {
    FILTER_USERS_GET,
    FILTER_USERS_SET_KEYWORD,
    FILTER_USERS_SET_STATUS,
    FILTER_USERS_SET_TYPE,
    FILTER_USERS_SET_OFFSET,
    FILTER_USERS_SET_SORT_BY,
  } from 'store/definitions'
  
  const initialState = {
    keyword: '',
    status: 0,
    user_type: 0,
    offset:0,
    limit:10,
    sortBy:'',
  }
  
  export default ( state = initialState, action ) => {
    switch(action.type){
      case FILTER_USERS_GET:
        // console.log('FILTER_USERS_GET ', state);
        return Object.assign({}, state, {
          ...state
        })
      
      case FILTER_USERS_SET_KEYWORD:
        // console.log('FILTER_USERS_SET_KEYWORD ', state);
        return Object.assign({}, state, {
          ...state,
          keyword: action.keyword
        })
  
      case FILTER_USERS_SET_STATUS:
        // console.log('FILTER_USERS_SET_STATUS ', state);
        return Object.assign({}, state, {
          ...state,
          status: action.status
        })
  
      case FILTER_USERS_SET_TYPE:
        // console.log('FILTER_USERS_SET_TYPE ', state);
        return Object.assign({}, state, {
          ...state,
          user_type: action.user_type
        })
  
      case FILTER_USERS_SET_OFFSET:
        // console.log('FILTER_USERS_SET_TYPE ', state);
        return Object.assign({}, state, {
          ...state,
          offset: action.offset
        })
      
      case FILTER_USERS_SET_SORT_BY:
        // console.log('FILTER_USERS_SET_KEYWORD ', state);
        return Object.assign({}, state, {
          ...state,
          sortBy: action.sortBy
        })
        
      default: 
        return state
    }
  }