import React from 'react'
import { Proptypes } from 'prop-types'
import Measurement from './Measurement'

const ListAllMeasurements = props => {
  const { itemId, measurements } = props

  if (measurements) {
    const filteredMeasurements = measurements.filter(m => m.item_id == itemId)
    return (
      <div className='container-fluid'>
        <div className='row'>
          {filteredMeasurements.map(measure => (
            <Measurement key={measure.id} measureObject={measure} />
          ))}
        </div>
      </div>
    )
  }
  return <div>Empty</div>
}

export default ListAllMeasurements
