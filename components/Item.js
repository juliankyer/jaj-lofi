import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import DeleteItem from './DeleteItem';

// import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
// import PriceTag from './styles/PriceTag';
// move price tag stuff/format money func to single item view
import formatMoney from '../lib/formatMoney';

class Item extends Component {
  render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        {item.image && 
          <img src={item.image} alt={item.title} />
        }
        <h3>
          <Link href={{
            pathname: '/item',
            query: { id: item.id }
          }}>
            <a>{item.title}</a>
          </Link>
        </h3>
        {/* TODO -- this should be visible on item details */}
        {/* <PriceTag>{formatMoney(item.price)}</PriceTag> */}
        <p>{item.description}</p>
        <div className='button-list'>
          <Link href={{
            pathname: 'update',
            query: { id: item.id } 
          }}>
            <a>Edit</a>
          </Link>
          <button>Add to cart</button>
          <DeleteItem id={item.id}>Delete This Item</DeleteItem>
        </div>
      </ItemStyles>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;