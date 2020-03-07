import React from 'react'
import Item from './Item'

class ItemList extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='row'>
        <Item />
      </div>
    )
  }
}

export default ItemList
