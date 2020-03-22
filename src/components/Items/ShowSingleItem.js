import React from 'react'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import { singleItemRequest } from '../../redux/actions/itemActions'
import { measurementCreateRequest, allMeasurementRequest } from '../../redux/actions/measureActions'
import ListAllMeasurements from '../measurement/ListAllMeasurements'

class ShowSingleItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      numberOfBooks: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    const { match, singleItemRequest, requestAllMeasurement } = this.props
    singleItemRequest(match.params.id)
    requestAllMeasurement()
  }

  handleChange (event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit (event) {
    const { user, item, measureCreate } = this.props
    const { numberOfBooks } = this.state
    const userId = user.id
    const itemId = item.id
    measureCreate(userId, itemId, numberOfBooks)
    const input = document.querySelector('#numberOfBooks')
    input.value = ''
  }

  render () {
    const { item } = this.props
    const {
      loggedInStatus, match, measurements
    } = this.props
    if (item && loggedInStatus === 'LOGGED_IN') {
      return (
        <div className='container mt-5'>
          <div className='row mt-5'>
            <div className='col-md-4'>
              <div className='card text-center'>
                <img className='card-img-top' src={item.photo} alt='Card cap' />
              </div>
            </div>
            <div className='col-md-8'>
              <div className='card text-center'>
                <h3>Enter Number to track Progress</h3>
                <form onSubmit={this.handleSubmit}>
                  <fieldset className='form-group'>
                    <label>Name</label>
                    <input
                      onChange={this.handleChange}
                      type='text'
                      className='form-control igning-link'
                      id='numberOfBooks'
                      placeholder='Enter Number'
                      required
                    />
                  </fieldset>
                  <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
              </div>
            </div>
            <ListAllMeasurements
              itemId={match.params.id}
              measurements={measurements}
            />
          </div>
        </div>
      )
    }
    return (<div />)
  }
}

ShowSingleItem.propTypes = {
  loggedInStatus: Proptypes.string.isRequired

}

const mapStateToProps = state => ({
  item: state.item.item,
  user: state.auth.user,
  measurements: state.measure.measurements,
  loggedInStatus: state.auth.signInStatus
})

const mapDispatchToProps = dispatch => ({
  measureCreate: (userId, postId, measurement) => dispatch(measurementCreateRequest(
    userId,
    postId,
    measurement
  )),
  singleItemRequest: params => dispatch(singleItemRequest(params)),
  requestAllMeasurement: () => dispatch(allMeasurementRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowSingleItem)
