import React from 'react';

const SignedOutLinks = () => (
  <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <a href="/signup" className="nav-link">SignUp</a>
    </li>
    <li className="nav-item">
      <a href="/signin" className="nav-link">SignIn</a>
    </li>
  </ul>
);

export default SignedOutLinks;
