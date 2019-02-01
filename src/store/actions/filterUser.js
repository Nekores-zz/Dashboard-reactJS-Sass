import {
    FILTER_USERS_GET,
    FILTER_USERS_SET_KEYWORD,
    FILTER_USERS_SET_STATUS,
    FILTER_USERS_SET_TYPE,
    FILTER_USERS_SET_OFFSET,
    FILTER_USERS_SET_SORT_BY,
  } from '../definitions'

  const getFilterUSER = () => {
    return dispatch => {
      dispatch({
        type: FILTER_USERS_GET
      })
    }
  }

  const setKeyword = (keyword) => {
    return dispatch => {
      dispatch({
        type: FILTER_USERS_SET_KEYWORD,
        keyword
      })
    }
  }

  const setStatus = (status) => {
    return dispatch => {
      dispatch({
        type: FILTER_USERS_SET_STATUS,
        status
      })
    }
  }

  const setType = (user_type) => {
    return dispatch => {
      dispatch({
        type: FILTER_USERS_SET_TYPE,
        user_type
      })
    }
  }

  const increaseOffset = () => {
    return (dispatch, getState) => {
      
      const { filterUser, users } = getState()
      // console.log('users ', users);
      // console.log('filterUser ', filterUser);
      if((filterUser.offset+filterUser.limit)<users.total_count){

        dispatch({
          type: FILTER_USERS_SET_OFFSET,
          offset: (filterUser.offset+filterUser.limit),
        })

      }
    }
  }

  const decreaseOffset = () => {
    return (dispatch, getState) => {
      
      const { filterUser } = getState()

      if((filterUser.offset-filterUser.limit)>0){

        dispatch({
          type: FILTER_USERS_SET_OFFSET,
          offset: (filterUser.offset-filterUser.limit),
        })

      }
    }
  }

  const orderBy = (columnData, dataKey, event) => {

    
    // console.log('action time event ', event);
    // console.log('columnData ', columnData);
    // console.log('dataKey ', dataKey);
    
    const sortBy = columnData.dataKey
    return dispatch => {
      dispatch({
        type: FILTER_USERS_SET_SORT_BY,
        sortBy
      })
    }
  }

  
export { 
    getFilterUSER,
    setKeyword,
    setStatus,
    setType,
    increaseOffset,
    decreaseOffset,
    orderBy,
 }