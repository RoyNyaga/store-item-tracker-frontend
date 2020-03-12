import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <ul className='navbar-nav ml-auto'>
      <li className='nav-item'>
        <a href='/signup' className='nav-link'>Signup</a>
      </li>
      <li className='nav-item'>
        <a href='/signin' className='nav-link'>Login</a>
      </li>
    </ul>
  )
}

export default SignedOutLinks
