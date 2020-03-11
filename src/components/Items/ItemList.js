import React from 'react'
import Item from './Item'
import { connect } from 'react-redux'
import { listItemRequest } from '../../redux/actions/itemActions'

class ItemList extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.itemsListRequest()
  }

  render () {
    const { items } = this.props
    if (items) {
      return (
        <div className='row'>
          {
            items.map(item => (
              <Item
                key={item.id}
                itemObject={item}
              />
            ))
          }
        </div>
      )
    } else {
      return <div />
    }
  }
}

const mapStateToProps = state => ({
  items: state.item.items
})

const mapDispatchToProps = dispatch => ({
  itemsListRequest: () => dispatch(listItemRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
