import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import { connect } from 'react-redux'
import { createUserSessionSuccess, creatUserSessionFailure } from './redux/actions/authActions'
import axios from 'axios'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  checkLoginStatus () {
    const { createUserSession, cancelUserSession } = this.props

    axios
      .get('http://localhost:3001/logged_in', { withCredentials: true })
      .then(response => {
        if (response.data.logged_in === true && this.props.loggedInStatus === 'NOT_LOGGED_IN') {
          createUserSession(response.data.user)
          console.log('this is suppose to be positive', response.data)
        } else if (response.data.logged_in !== true && this.props.loggedInStatus === 'LOGGED_IN') {
          cancelUserSession(response.data.error)
          console.log('this is suppose to benegative', response.data)
        }
        console.log(response.data)
      }).catch(error => {
        console.log('check login error', error)
      })
  }

  componentDidMount () {
    this.checkLoginStatus()
  }

  render () {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <h1>{this.props.loggedInStatus}</h1>
          <Switch>
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => ({
  loggedInStatus: state.auth.signInStatus
})

const mapDispatchToProps = dispatch => ({
  createUserSession: user => dispatch(createUserSessionSuccess(user)),
  cancelUserSession: errorMessage => dispatch(creatUserSessionFailure(errorMessage))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
