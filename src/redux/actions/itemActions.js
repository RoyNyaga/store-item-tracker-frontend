import axios from 'axios';

const ITEM_LIST = 'ITEM_LIST';
const ITEM = 'ITEM';

const listItem = items => ({
  type: ITEM_LIST,
  items,
});

const item = item => ({
  type: ITEM,
  item,
});

const listItemRequest = () => function (dispatch) {
  axios
    .get('https://store-items-tracking.herokuapp.com/items', { withCredentials: true })
    .then(response => {
      dispatch(listItem(response.data.items));
    });
};

const singleItemRequest = params => function (dispatch) {
  axios
    .get(`https://store-items-tracking.herokuapp.com/items/${params}`, { withCredentials: true })
    .then(response => {
      dispatch(item(response.data.items));
    });
};

export {
  ITEM_LIST,
  ITEM,
  listItem,
  item,
  listItemRequest,
  singleItemRequest,
};
