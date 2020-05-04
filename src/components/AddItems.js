import React, { useState } from 'react';
import { postItem } from '../store/actions/SendItem';
import { connect } from 'react-redux';

function AddItem({postItem}) {

  const [data, setData] = useState({name: ''});
  console.log('soy el data', data)

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (!data.name.trim()) {
      return
    }

    postItem(data)
    console.log('soy el data', data)
  }

  return(
    <form onSubmit={onSubmit} className="add-item" id="add-item">
      <input type="text" onChange={e => setData({...data, name: e.target.value})} name="addItem"/>
      <button type="submit">Añadir</button>
    </form>
  )
}

const mapStateToProps = state => {
  console.log('soy el state', state)
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, {
  postItem
})(AddItem)