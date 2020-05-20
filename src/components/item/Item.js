import React from 'react';
import {connect} from 'react-redux';

import {deleteItem} from '../../store/actions/deleteItem';

function Item({id, name, deleteItem}) {

  return(
    <li className="item">
      <div className="form-group">
        <input type="checkbox" id={id}/>
        <label htmlFor={id}>{name}</label>
      </div>
      <button onClick={() => deleteItem(id)}>Borrar</button>   
    </li>
  )
}

export default connect(null,{
  deleteItem,
})(Item)