import axios from 'axios'

const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILURE = 'LOGIN_FAILURE'

const createUserSuccessAction = user => ({
  type: CREATE_USER_SUCCESS,
  user
})

const createUserSessionSuccess = user => ({
  type: LOGIN_SUCCESS,
  user
})

const creatUserSessionFailure = errorMessage => ({
  type: LOGIN_FAILURE,
  errorMessage
})

const createUserFailureAction = errorMessage => ({
  type: CREATE_USER_FAILURE,
  errorMessage
})

const userSessionRequest = name => {
  return function (dispatch) {
  	axios.post('http://localhost:3001/sessions', {
  		user: {
  			name: name
  		}
  	},
  	{ withCredentials: true }
  	).then(response => {
  		if (response.data.logged_in === true) {
  			dispatch(createUserSessionSuccess(response.data.user))
  		} else {
  			dispatch(creatUserSessionFailure(response.data.error))
  		}
  	}).catch(error => {
  		console.log(error)
  	})
  }
}

const createUserRequest = (name) => {
  return function (dispatch) {
  	axios.post('http://localhost:3001/registrations', {
  		user: {
  			name: name
  		}
  	},
  	{ withCredentials: true }
  	).then(response => {
  		if (response.data.status === 'created') {
  			dispatch(createUserSuccessAction(response.data.user))
  		} else {
  			dispatch(createUserFailureAction(response.data.error))
  		}
  	}).catch(error => {
  		console.log(error)
  	})
  }
}

export {
  createUserSuccessAction,
  createUserFailureAction,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  createUserRequest,
  userSessionRequest,
  createUserSessionSuccess,
  creatUserSessionFailure
}
