import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import ItemList from './components/Items/ItemList'
import ShowSingleItem from './components/Items/ShowSingleItem'
import { connect } from 'react-redux'
import { createUserSessionSuccess, creatUserSessionFailure } from './redux/actions/authActions'
import axios from 'axios'
import Footer from './components/layouts/Footer'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  checkLoginStatus () {
    const { createUserSession, cancelUserSession } = this.props
    axios
      .get('https://store-items-tracking.herokuapp.com/logged_in', { withCredentials: true })
      .then(response => {
        if (response.data.logged_in === true && this.props.loggedInStatus === 'NOT_LOGGED_IN') {
          createUserSession(response.data.user)
        } else if (response.data.logged_in !== true && this.props.loggedInStatus === 'LOGGED_IN') {
          cancelUserSession(response.data.error)
        }
      }).catch(error => {
        console.log('check login error', error)
      })
  }

  componentDidMount () {
    this.checkLoginStatus()
  }

  loginMessage (loggedInStatus) {
    if (loggedInStatus === 'NOT_LOGGED_IN') {
      return <div id='signup-links-div'>
        <a href='/signup' className='signing-link'>Sign Up</a>
        <a href='/signin' className='signing-link'>Sign In</a>
        <h3>To have access to tracking Items.</h3>
             </div>
    } else {
      return <div id='signup-links-div'>
        <a className='signing-link' href='/items'>Checkout Items to Track</a>
      </div>
    }
  }

  displayWhenLoggedIn (loggedInStatus) {
    if (loggedInStatus === 'LOGGED_IN') {
      return <div className='jumbotron'>
        <h1 className='display-3'>Store Item Tracker</h1>

      </div>
    }
  }

  displayWhenLoggedOut (loggedInStatus) {
    if (loggedInStatus === 'NOT_LOGGED_IN') {
      return <div className='header-div d-flex justify-content-center align-items-center mb-5'>
        <div className='inner-header-div'>
          <h3>Welcome to Item Tracker</h3>
          {this.loginMessage(loggedInStatus)}
        </div>
             </div>
    }
  }

  render () {
    const { loggedInStatus } = this.props
    return (
      <BrowserRouter>
        <div className='App container-fluid'>
          <Navbar />
          {this.displayWhenLoggedOut(loggedInStatus)}
          {this.displayWhenLoggedIn(loggedInStatus)}
          <Switch>
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/items' component={ItemList} />
            <Route exact path='/item/:id' component={ShowSingleItem} />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => ({
  loggedInStatus: state.auth.signInStatus,
  message: state.auth.message,
  user: state.auth.user
})

const mapDispatchToProps = dispatch => ({
  createUserSession: user => dispatch(createUserSessionSuccess(user)),
  cancelUserSession: errorMessage => dispatch(creatUserSessionFailure(errorMessage))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
