const Header = () => {
  return (
    <div className='header-div d-flex justify-content-center align-items-center'>
      <div className='inner-header-div'>
        <h3>Welcome to Item Tracker</h3>
        <div id='signup-links-div'>
          <a href='/' className='signing-link'>Sign Up</a>
          <a href='/' className='signing-link'>Sign In</a>
        </div>
      </div>
    </div>
  )
}

export default Header
