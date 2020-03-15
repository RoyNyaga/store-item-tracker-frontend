import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import { listItemRequest } from '../../redux/actions/itemActions';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.itemsListRequest();
  }

  render() {
    const { items } = this.props;
    const { loggedInStatus } = this.props;
    if (items && loggedInStatus === 'LOGGED_IN') {
      return (
        <div className="row mt-5">
          {
            items.map(item => (
              <Item
                key={item.id}
                itemObject={item}
              />
            ))
          }
        </div>
      );
    }
    return <div />;
  }
}

const mapStateToProps = state => ({
  items: state.item.items,
  loggedInStatus: state.auth.signInStatus,
});

const mapDispatchToProps = dispatch => ({
  itemsListRequest: () => dispatch(listItemRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
