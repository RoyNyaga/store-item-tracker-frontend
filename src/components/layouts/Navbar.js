import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
  return (
    <nav className='navbar navbar-light bg-dark'>
      <Link to='/' className='navbar-brand' href='/'>Marioplan</Link>
      <SignedInLinks />
      <SignedOutLinks />
    </nav>
  )
}

export default Navbar
