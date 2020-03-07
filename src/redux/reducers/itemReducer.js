
initialState = {
  items: null,
  item: null
}

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
  	case CREATE_USER_SUCCESS:
  		return {
  			user: action.user,
  			message: 'User has been created',
  			signInStatus: 'LOGGED_IN'
  		}
	  default:
	  	return state
  }
}
