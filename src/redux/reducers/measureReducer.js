import { GET_ITEM_MEASUREMENT, CREATE_ITEM_MEASUREMENT } from '../actions/measureActions'

const initialState = {
  measurement: ''
}

const measureReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ITEM_MEASUREMENT:
      return {
        measurement: action.measure
      }
    default:
      return state
  }
}

export default measureReducer
