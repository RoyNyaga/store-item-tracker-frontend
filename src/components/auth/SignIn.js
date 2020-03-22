import React from 'react'
import { connect } from 'react-redux'
import { userSessionRequest } from '../../redux/actions/authActions'
import Proptypes from 'prop-types'

class SignIn extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    this.redirectToHomePage()
  }

  handleChange (event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit (event) {
    const { signInUser, history } = this.props
    const { name } = this.state
    signInUser(name)
    this.setState({
      name: ''
    })
    history.push('/items')
    event.preventDefault()
  }

  redirectToHomePage () {
    const { loggedInStatus, history } = this.props
    if (loggedInStatus === 'LOGGED_IN') {
      history.push('/items')
    }
  }

  render () {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <h4>SignIn</h4>
          <fieldset className='form-group'>
            <label>Name</label>
            <input onChange={this.handleChange} type='text' className='form-control' id='name' placeholder='Enter name' required />
          </fieldset>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    )
  }
}

SignIn.propTypes = {
  signInUser: Proptypes.func.isRequired,
  loggedInStatus: Proptypes.string.isRequired
}

const mapStateToProps = state => ({
  loggedInStatus: state.auth.signInStatus
})

const mapDispatchToProps = dispatch => ({
  signInUser: name => dispatch(userSessionRequest(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
