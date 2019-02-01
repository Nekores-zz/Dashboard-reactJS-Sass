import {
  FILTER_CUSTOMERS_GET,
  FILTER_CUSTOMERS_SET_KEYWORD,
  FILTER_CUSTOMERS_SET_TYPE,
  FILTER_CUSTOMERS_SET_OFFSET,
  FILTER_CUSTOMERS_SET_SORT_BY,  
} from 'store/definitions'

const initialState = {
  keyword: '',
  customer_type: 0,
  offset: 0,
  limit: 10,
}

export default ( state = initialState, action ) => {
  switch(action.type){
    case FILTER_CUSTOMERS_GET:
      return Object.assign({}, state, {
        ...state
      })
    case FILTER_CUSTOMERS_SET_KEYWORD:
      return Object.assign({}, state, {
        ...state,
        keyword: action.keyword
      })

    case FILTER_CUSTOMERS_SET_TYPE:
      return Object.assign({}, state, {
        ...state,
        customer_type: action.customer_type
      })

    case FILTER_CUSTOMERS_SET_OFFSET:
      return Object.assign({}, state, {
        ...state,
        offset: action.offset
      })

    case FILTER_CUSTOMERS_SET_SORT_BY:
      return Object.assign({}, state, {
        ...state,
        keyword: action.keyword
      })

    default: 
      return state
  }
}