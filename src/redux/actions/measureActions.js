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
    })
    .catch(error => {
      console.log('check login error', error);
    });
};

const measurementCreateRequest = (user_id, item_id, measurement) => function (dispatch) {
  axios.post('https://store-items-tracking.herokuapp.com/measurements', {
    measurement: {
      user_id,
      item_id,
      measurement,
    },
  },
  { withCredentials: true }).then(response => {
    dispatch(createItemMeasurement(response.data.measurement));
  }).catch(error => {
    console.log(error);
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
