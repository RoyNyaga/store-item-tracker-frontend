import React from 'react'
import { singleItemRequest } from '../../redux/actions/itemActions'
import { measurementCreateRequest } from '../../redux/actions/measureActions'
import ListAllMeasurements from '../measurement/ListAllMeasurements'
import { connect } from 'react-redux'

class showSingleItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      numberOfBooks: "",
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value 
    });
  }

  handleSubmit = (e) => {
    const userId = this.props.user.id
    const itemId = this.props.item.id
    this.props.measureCreate(userId, itemId, this.state.numberOfBooks)
    e.preventDefault()
  }

  componentDidMount () {
    this.props.singleItemRequest(this.props.match.params.id)
  }

  render () {
    const { item } = this.props
    if (item) {
      return (
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='card text-center'>
                <img className='card-img-top' src={item.photo} alt='Card image cap' />
              </div>
            </div>
            <div className='col-md-8'>
              <div className='card text-center'>
                <h3>Enter the number of books for tracking</h3>
                <form onSubmit={this.handleSubmit}>
                  <fieldset className="form-group">
                    <label>Name</label>
                    <input onChange={this.handleChange} type="text" className="form-control" id="numberOfBooks" placeholder="Enter Number"/>
                  </fieldset>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
            <ListAllMeasurements />
          </div>
        </div>
      )
    } else {
      return (<div>here we are</div>)
    }
  }
}

const mapStateToProps = state => ({
  item: state.item.item,
  user: state.auth.user
})

const mapDispatchToProps = dispatch => ({
  measureCreate: (user_id, post_id, measurement) => dispatch(measurementCreateRequest(user_id, post_id, measurement)),
  singleItemRequest: (params) => dispatch(singleItemRequest(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(showSingleItem)