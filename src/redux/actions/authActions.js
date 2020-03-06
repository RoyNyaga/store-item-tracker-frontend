import axios from 'axios'

const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE'

const createUserSuccessAction = user => ({
  type: CREATE_USER_SUCCESS,
  user
})

const createUserFailureAction = errorMessage => ({
  type: CREATE_USER_FAILURE,
  errorMessage
})

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

export { createUserSuccessAction, createUserFailureAction, CREATE_USER_SUCCESS, CREATE_USER_FAILURE, createUserRequest }
