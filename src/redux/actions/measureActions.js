import axios from 'axios'

const GET_ITEM_MEASUREMENTS = 'GET_ITEM_MEASUREMENTS'
const CREATE_ITEM_MEASUREMENT = 'CREATE_ITEM_MEASUREMENT'
const ALL_MEASUREMENT = 'ALL_MEASUREMENT'

const allMeasurement = (measurementList) => ({
  type: ALL_MEASUREMENT,
  measurementList
})

const createItemMeasurement = (measure) => ({
  type: GET_ITEM_MEASUREMENTS,
  measure
})

const allMeasurementRequest = () => {
  return function (dispatch) {
    axios
      .get('http://localhost:3001/measurements', { withCredentials: true })
      .then(response => {
        dispatch(allMeasurement(response.data.measurements))
      })
      .catch(error => {
        console.log('check login error', error)
      })
  }
}

const measurementCreateRequest = (user_id, item_id, measurement) => {
  return function (dispatch) {
    axios.post('http://localhost:3001/measurements', {
      measurement: {
        user_id: user_id,
        item_id: item_id,
        measurement: measurement
      }
    },
    { withCredentials: true }
    ).then(response => {
      dispatch(createItemMeasurement(response.data.measurement))
    }).catch(error => {
      console.log(error)
    })
  }
}

export {
  GET_ITEM_MEASUREMENTS,
  CREATE_ITEM_MEASUREMENT,
  createItemMeasurement,
  measurementCreateRequest,
  allMeasurement,
  allMeasurementRequest
}
