import {
  FILTER_CUSTOMERS_GET,
  FILTER_CUSTOMERS_SET_KEYWORD,
  FILTER_CUSTOMERS_SET_TYPE,
  FILTER_CUSTOMERS_SET_OFFSET
} from '../definitions'

const getFilterCUSTOMER = () => {
  return dispatch => {
    dispatch({
      type: FILTER_CUSTOMERS_GET
    })
  }
}

const setKeyword = (keyword) => {
  return dispatch => {
    dispatch({
      type: FILTER_CUSTOMERS_SET_KEYWORD,
      keyword
    })
  }
}

const setType = (customer_type) => {
  return dispatch => {
    dispatch({
      type: FILTER_CUSTOMERS_SET_TYPE,
      customer_type
    })
  }
}

const increaseOffset = () => {
  return (dispatch, getState) => {
    
    const { filterCustomer, customers } = getState()
    if((filterCustomer.offset+filterCustomer.limit)<customers.total_count){

      dispatch({
        type: FILTER_CUSTOMERS_SET_OFFSET,
        offset: (filterCustomer.offset+filterCustomer.limit),
      })

    }
  }
}

const decreaseOffset = () => {
  return (dispatch, getState) => {
    
    const { filterCustomer } = getState()

    if((filterCustomer.offset-filterCustomer.limit)>0){

      dispatch({
        type: FILTER_CUSTOMERS_SET_OFFSET,
        offset: (filterCustomer.offset-filterCustomer.limit),
      })

    }
  }
} 

export {
  getFilterCUSTOMER,
  setKeyword,
  setType,
  increaseOffset,
  decreaseOffset,
}