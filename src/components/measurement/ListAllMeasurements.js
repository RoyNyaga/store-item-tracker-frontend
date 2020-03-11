import React from 'react'
import Measurement from './Measurement'

class ListAllMeasurements extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
  	const { measurements } = this.props
  	if (measurements) {
  		return (
    		<div className='container-fluid'>
          <div className='row'>
        {measurements.map(measure => (
              <Measurement key={measure.id} measureObject={measure} />
	        ))}
      </div>
        </div>
      )
  	} else {
  		return <div>Empty</div>
  	}
  }
}

export default ListAllMeasurements
