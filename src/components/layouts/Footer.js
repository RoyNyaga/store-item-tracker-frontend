import React from 'react'

export default class Footer extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <footer className='mt-5'>
        <div className='footer-icons mt-5' />
        <p className='copy-right'>Copyright&copy;FastAndFaster.All rights reserved</p>
      </footer>
    )
  }
}
