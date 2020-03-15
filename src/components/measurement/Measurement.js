import React from 'react'
import Proptypes from 'prop-types'

class Measurement extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { measureObject } = this.props
    return (
      <div className='col-md-3'>
        <div className='card text-center'>
          <div className='card-body'>
            <h4 className='card-title'>{measureObject.measurement} Counts</h4>
            <p className='card-text'>date: {measureObject.created_at}</p>
          </div>
        </div>
      </div>
    )
  }
}

Measurement.propTypes = {
  measureObject: Proptypes.instanceOf(Object).isRequired
}

export default Measurement
