import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loggedInStatus === 'LOGGED_IN') {
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
  }
}

const mapStateToProps = state => ({
  loggedInStatus: state.auth.signInStatus,
});

export default connect(mapStateToProps, null)(Navbar);
