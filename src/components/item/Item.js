import React from 'react';

function Item(props) {
  console.log(props)
  return(
    <li>
      <input type="checkbox" id={props.id}/>
      <label htmlFor={props.id}>{props.name}</label>
    </li>
  )
}

export default Item;