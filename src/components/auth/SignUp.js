import React from 'react';
import { connect } from 'react-redux'
import { createUserRequest } from '../../redux/actions/authActions'

class SignUp extends React.Component {

	state = {
		name: ""
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value 
		});
	}

	handleSubmit = (e) => {
		const {createUser} = this.props
		createUser(this.state.name)
		this.setState({
			name: ''
		})
		e.preventDefault()
	}

	render() {
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit}>
				<h4>Sign Up</h4>
					<fieldset className="form-group">
						<label>Name</label>
						<input onChange={this.handleChange} type="text" className="form-control" id="name" placeholder="Enter Name"/>
					</fieldset>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	createUser: name => dispatch(createUserRequest(name))
})

export default connect(null, mapDispatchToProps)(SignUp)