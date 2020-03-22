import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { createUserRequest } from '../../redux/actions/authActions';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { createUser, history } = this.props;
    const { name } = this.state;
    createUser(name);
    this.setState({
      name: '',
    });
    history.push('/');
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h4>Sign Up</h4>
          <fieldset className="form-group">
            <label>Name</label>
            <input onChange={this.handleChange} type="text" className="form-control" id="name" placeholder="Enter Name" required />
          </fieldset>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

SignUp.propTypes = {
  createUser: Proptypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createUser: name => dispatch(createUserRequest(name)),
});

export default connect(null, mapDispatchToProps)(SignUp);
