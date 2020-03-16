import { CREATE_ITEM_MEASUREMENT, ALL_MEASUREMENT } from '../actions/measureActions';

const initialState = {
  measurement: '',
  measurements: [],
};

const measureReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ITEM_MEASUREMENT:
      return {
        measurement: action.measure,
      };
    case ALL_MEASUREMENT:
      return {
        measurements: action.measurementList,
      };
    default:
      return state;
  }
};

export default measureReducer;
