import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

class Navbar extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    if (this.props.loggedInStatus === 'LOGGED_IN') {
      return (
        <nav className='navbar navbar-light bg-dark'>
          <Link to='/' className='navbar-brand' href='/'>Marioplan</Link>
          <SignedInLinks />
        </nav>
      )
    }
    return (
      <nav className='navbar navbar-light bg-dark'>
        <Link to='/' className='navbar-brand' href='/'>Marioplan</Link>
        <SignedOutLinks />
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  loggedInStatus: state.auth.signInStatus
})

export default connect(mapStateToProps, null)(Navbar)
