import { ITEM_LIST, ITEM } from '../actions/itemActions'

const initialState = {
  items: [],
  item: null
}

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ITEM_LIST:
      return {
        items: action.items
      }
    case ITEM:
      return {
        item: action.item
      }
    default:
      return state
  }
}

export default itemReducer
