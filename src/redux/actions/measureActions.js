import axios from 'axios';

const GET_ITEM_MEASUREMENTS = 'GET_ITEM_MEASUREMENTS';
const CREATE_ITEM_MEASUREMENT = 'CREATE_ITEM_MEASUREMENT';
const ALL_MEASUREMENT = 'ALL_MEASUREMENT';

const allMeasurement = measurementList => ({
  type: ALL_MEASUREMENT,
  measurementList,
});

const createItemMeasurement = measure => ({
  type: GET_ITEM_MEASUREMENTS,
  measure,
});

const allMeasurementRequest = () => function (dispatch) {
  axios
    .get('https://store-items-tracking.herokuapp.com/measurements', { withCredentials: true })
    .then(response => {
      dispatch(allMeasurement(response.data.measurements));
    });
};

const measurementCreateRequest = (userId, itemId, measurement) => function (dispatch) {
  axios.post('https://store-items-tracking.herokuapp.com/measurements', {
    measurement: {
      user_id: userId,
      item_id: itemId,
      measurement,
    },
  },
  { withCredentials: true }).then(response => {
    dispatch(createItemMeasurement(response.data.measurement));
  });
};

export {
  GET_ITEM_MEASUREMENTS,
  CREATE_ITEM_MEASUREMENT,
  createItemMeasurement,
  measurementCreateRequest,
  allMeasurement,
  allMeasurementRequest,
  ALL_MEASUREMENT,
};
