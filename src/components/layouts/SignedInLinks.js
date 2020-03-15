import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutRequest } from '../../redux/actions/authActions';

class SignedInLinks extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    const { log_out_user } = this.props;
    log_out_user();
  }

  render() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a href="/items" className="nav-link">Items</a>
        </li>
        <li className="nav-item">
          <a onClick={this.logout} className="nav-link">Log Out</a>
        </li>
      </ul>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  log_out_user: () => dispatch(logOutRequest()),
});

export default connect(null, mapDispatchToProps)(SignedInLinks);
