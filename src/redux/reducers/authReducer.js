import { CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from '../actions/authActions'

const initailState = {
  user: '',
  message: ''
}

const authReducer = (state = initailState, action) => {
  switch (action.type) {
  	case CREATE_USER_SUCCESS:
  		return {
  			user: action.user,
  			message: 'User has been created'
  	}
  	case CREATE_USER_FAILURE:
	  	return {
	  		message: action.errorMessage
	  	}
	  default:
	  	return state
  }
}

export default authReducer
