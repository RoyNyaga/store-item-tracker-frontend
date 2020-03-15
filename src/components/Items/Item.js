import React from 'react';
import Proptypes from 'prop-types';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { itemObject } = this.props;
    return (
      <div className="col-md-4">
        <div className="card text-center">
          <img className="card-img-top" src={itemObject.photo} alt="Card image cap" />
          <div className="card-body">
            <h4 className="card-title">{itemObject.name}</h4>
            <a href={`item/${itemObject.id}`} className="btn btn-secondary">Track Item</a>
          </div>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  itemObject: Proptypes.instanceOf(Object).isRequired,
};

export default Item;
