import React from 'react';

export default class SignUp extends React.Component {

	state = {
		name: ""
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value 
		});
	}

	handleSubmit = (e) => {
		e.preventDefault()
		console.log(this.state)
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
