import React, { useState } from 'react';
import { postItem } from '../store/actions/sendItem';
import { connect } from 'react-redux';

function AddItem({postItem}) {

  const [data, setData] = useState({name: ''});

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (!data.name.trim()) {
      return
    }

    postItem(data)
  }

  return(
    <form onSubmit={onSubmit} className="add-item" id="add-item">
      <input type="text" onChange={e => setData({...data, name: e.target.value})} name="addItem"/>
      <button type="submit">Añadir</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    items: state.items,
    error: !!state.items.error,
  }
}

export default connect(mapStateToProps, {
  postItem
})(AddItem)