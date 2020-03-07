import React from 'react';
import { connect } from 'react-redux'
import { userSessionRequest } from '../../redux/actions/authActions'

class SignIn extends React.Component {

	state = {
		name: ""
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
		e.preventDefault()
	}

	render() {
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit}>
				<h4>SignIn</h4>
					<fieldset className="form-group">
						<label>Name</label>
						<input onChange={this.handleChange} type="text" className="form-control" id="name" placeholder="Enter name"/>
					</fieldset>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	signInUser: name => dispatch(userSessionRequest(name))
})

export default connect(null, mapDispatchToProps)(SignIn)

