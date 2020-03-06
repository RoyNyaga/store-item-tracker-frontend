import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <ul className='nav'>
      <li className='nav-item'>
        <NavLink to='/' className='nav-link'>Log Out</NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to='/' className='nav-link'>NN</NavLink>
      </li>
    </ul>
  )
}

export default SignedInLinks
