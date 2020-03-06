import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <ul className='nav'>
      <li className='nav-item'>
        <NavLink to='/signup' className='nav-link'>Signup</NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to='/signin' className='nav-link'>Login</NavLink>
      </li>
    </ul>
  )
}

export default SignedOutLinks
