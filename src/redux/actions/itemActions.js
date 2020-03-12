import axios from 'axios'

const ITEM_LIST = 'ITEM_LIST'
const ITEM = 'ITEM'

const listItem = (items) => ({
  type: ITEM_LIST,
  items
})

const item = (item) => ({
  type: ITEM,
  item
})

const listItemRequest = () => {
  return function (dispatch) {
    axios
      .get('https://store-items-tracking.herokuapp.com/items', { withCredentials: true })
      .then(response => {
        dispatch(listItem(response.data.items))
      })
      .catch(error => {
        console.log('check login error', error)
      })
  }
}

const singleItemRequest = (params) => {
  return function (dispatch) {
    axios
      .get(`https://store-items-tracking.herokuapp.com/items/${params}`, { withCredentials: true })
      .then(response => {
        dispatch(item(response.data.items))
      })
      .catch(error => {
        console.log('check login error', error)
      })
  }
}

export {
  ITEM_LIST,
  ITEM,
  listItem,
  item,
  listItemRequest,
  singleItemRequest
}
