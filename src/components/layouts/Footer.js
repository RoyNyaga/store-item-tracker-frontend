import React from 'react'

export default class Footer extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <footer>
        <div className='footer-icons'>
          <a href='/signin'>Login</a>
          <a href='/signup'>Sign up</a>
        </div>
        <p className='copy-right'>Copyright&copy;FastAndFaster.All rights reserved</p>
      </footer>
    )
  }
}
