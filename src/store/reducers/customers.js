import { CUSTOMERS_GET } from 'store/definitions'

const initialState = {
  total_count: 1000,
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMERS_GET:
      return Object.assign({}, state, {
        ...state,
        total_count: action.total_count,
        data: action.isReload ? action.data : [...state.data, ...action.data]
      })

    default:
      return state
  }
}