import axios from 'axios';

const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOG_OUT = 'LOG_OUT';

const logOutUser = () => ({
  type: LOG_OUT,
});

const createUserSuccessAction = user => ({
  type: CREATE_USER_SUCCESS,
  user,
});

const createUserSessionSuccess = user => ({
  type: LOGIN_SUCCESS,
  user,
});

const creatUserSessionFailure = errorMessage => ({
  type: LOGIN_FAILURE,
  errorMessage,
});

const createUserFailureAction = errorMessage => ({
  type: CREATE_USER_FAILURE,
  errorMessage,
});

const userSessionRequest = name => function (dispatch) {
  axios.post('https://store-items-tracking.herokuapp.com/sessions', {
    user: {
      name,
    },
  },
  { withCredentials: true }).then(response => {
    if (response.data.logged_in === true) {
      dispatch(createUserSessionSuccess(response.data.user));
    } else {
      dispatch(creatUserSessionFailure(response.data.error));
    }
  }).catch(error => {
    console.log(error);
  });
};

const createUserRequest = name => function (dispatch) {
  axios.post('https://store-items-tracking.herokuapp.com/registrations', {
    user: {
      name,
    },
  },
  { withCredentials: true }).then(response => {
    if (response.data.status === 'created') {
      dispatch(createUserSuccessAction(response.data.user));
    } else {
      dispatch(createUserFailureAction(response.data.error));
    }
  }).catch(error => {
    console.log(error);
  });
};

const logOutRequest = () => function (dispatch) {
  axios
    .delete('https://store-items-tracking.herokuapp.com/logout', { withCredentials: true })
    .then(response => {
      dispatch(logOutUser());
    })
    .catch(error => {
      console.log('check login error', error);
    });
};

export {
  createUserSuccessAction,
  createUserFailureAction,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOG_OUT,
  createUserRequest,
  userSessionRequest,
  createUserSessionSuccess,
  creatUserSessionFailure,
  logOutUser,
  logOutRequest,
};
