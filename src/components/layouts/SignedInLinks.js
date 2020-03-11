import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOutRequest } from '../../redux/actions/authActions'

class SignedInLinks extends React.Component {
  constructor (props) {
    super(props)

    this.logout = this.logout.bind(this)
  }

  logout () {
    const { log_out_user } = this.props
    log_out_user()
  }

  render () {
    return (
      <ul className='nav'>
        <li className='nav-item'>
          <NavLink to='/items' className='nav-link'>Item</NavLink>
        </li>
        <li className='nav-item'>
          <button onClick={this.logout} className='nav-link'>Log Out</button>
        </li>
      </ul>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  log_out_user: () => dispatch(logOutRequest())
})

export default connect(null, mapDispatchToProps)(SignedInLinks)
