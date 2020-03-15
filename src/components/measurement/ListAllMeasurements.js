import React from 'react'
import Measurement from './Measurement'

class ListAllMeasurements extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { measurements } = this.props
    const { itemId } = this.props
    if (measurements) {
      const filteredMeasurements = measurements.filter(function (m) {
        return m.item_id == itemId
      })
      return (
        <div className='container-fluid'>
          <div className='row'>
            {filteredMeasurements.map(measure => (
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
