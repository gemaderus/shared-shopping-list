import React, { useEffect } from 'react';
import Item from './Item';

import {getItemsList} from '../../store/actions/Items';
import { connect } from 'react-redux';

function ShoppingList({getItemsList, items}) {

  console.log(items)

  const {loading, error, data} = items

  useEffect(() => {
    getItemsList()
  }, [getItemsList])

  if (loading) return <div>Loading...</div>

  if (error) return <div>Error {error}</div>

  return (
    data && data.length ? <ul className="shopping-list">
      {data.map(i => <Item key={i.id} {...i}/>)}
    </ul> : <div>No hay items</div>
  )
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, {
  getItemsList
})(ShoppingList)
