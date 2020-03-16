import React from 'react';
import { connect } from 'react-redux';
import { logOutRequest } from '../../redux/actions/authActions';

class SignedInLinks extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    const { logOutUser } = this.props;
    logOutUser();
  }

  render() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a href="/items" className="nav-link">Items</a>
        </li>
        <li className="nav-item">
          <button type="button" onClick={this.logout} className="nav-link text-dark">Log Out</button>
        </li>
      </ul>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logOutUser: () => dispatch(logOutRequest()),
});

export default connect(null, mapDispatchToProps)(SignedInLinks);
