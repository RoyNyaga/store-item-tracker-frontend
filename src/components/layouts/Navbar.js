import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = props => {
  const { loggedInStatus } = props;
  console.log(`${loggedInStatus}, this is logs`);
  if (loggedInStatus === 'LOGGED_IN') {
    return (
      <nav className="navbar navbar-expand-md fixed-top mb-5">
        <a className="navbar-brand text-white" href="/">Item Tracker</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
          <span className="navbar-toggler-icon"><i className="fas fa-sliders-h text-dark" /></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <SignedInLinks />
        </div>
      </nav>
    );
  }
  return (
    <nav className="navbar navbar-expand-md fixed-top">
      <a className="navbar-brand text-white" href="/">Item Tracker</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
        <span className="navbar-toggler-icon"><i className="fas fa-sliders-h text-dark" /></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarResponsive">
        <SignedOutLinks />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  loggedInStatus: Proptypes.string.isRequired,
};

// Navbar.defaultProps = {
//   loggedInStatus: ''
// }

const mapStateToProps = state => ({
  loggedInStatus: state.auth.signInStatus,
});

export default connect(mapStateToProps, null)(Navbar);
