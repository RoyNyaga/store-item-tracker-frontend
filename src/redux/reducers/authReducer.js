import {
  CREATE_USER_SUCCESS, CREATE_USER_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE, LOG_OUT,
} from '../actions/authActions';

const initailState = {
  user: '',
  message: '',
  signInStatus: 'NOT_LOGGED_IN',
};

const authReducer = (state = initailState, action) => {
  switch (action.type) {
  	case CREATE_USER_SUCCESS:
  		return {
  			user: action.user,
  			message: 'User has been created',
  			signInStatus: 'LOGGED_IN',
  		};
  	case CREATE_USER_FAILURE:
	  	return {
	  		message: action.errorMessage,
	  		signInStatus: 'NOT_LOGGED_IN',
	  	};
	  case LOGIN_SUCCESS:
	  	return {
	  		user: action.user,
	  		message: 'Succesfull Login',
	  		signInStatus: 'LOGGED_IN',
	  	};
	  case LOGIN_FAILURE:
	  	return {
	  		message: action.errorMessage,
	  		signInStatus: 'NOT_LOGGED_IN',
	  	};
	  case LOG_OUT:
	  	return {
	  		signInStatus: 'NOT_LOGGED_IN',
	  		user: '',
	  		message: 'logged out successfully',
	  	};
	  default:
	  	return state;
  }
};

export default authReducer;
