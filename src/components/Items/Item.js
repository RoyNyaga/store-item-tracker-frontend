import React from 'react'

class Item extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='col-md-4'>
        <div className='card text-center'>
          <img className='card-img-top' src='...' alt='Card image cap' />
          <div className='card-body'>
            <h4 className='card-title'>Card title</h4>
            <p className='card-text'>Some quick example text to build on the card title and make up </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Item
