import React from 'react';
import { connect } from 'react-redux'
import { userSessionRequest } from '../../redux/actions/authActions'

class SignIn extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			name: ""
		}
	}


	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value 
		});
	}

	handleSubmit = (e) => {
		const{signInUser} = this.props
		signInUser(this.state.name)
		this.setState({
			name: ""
		})
		this.props.history.push('/items');
		e.preventDefault()
	}

	redirectToHomePage(){
		const{loggedInStatus} = this.props
		if(loggedInStatus === "LOGGED_IN"){
			this.props.history.push('/items');
    	}
	}

	componentDidMount () {
    	this.redirectToHomePage()
    	console.log(this.props.loggedInStatus)
 	}

	render() {
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit}>
				<h4>SignIn</h4>
					<fieldset className="form-group">
						<label>Name</label>
						<input onChange={this.handleChange} type="text" className="form-control" id="name" placeholder="Enter name" required/>
					</fieldset>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
  loggedInStatus: state.auth.signInStatus
})

const mapDispatchToProps = dispatch => ({
	signInUser: name => dispatch(userSessionRequest(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

