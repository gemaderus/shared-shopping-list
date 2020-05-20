// import api from '../../api'

import { GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAIL } from './actionTypes';

const getItemsStart = () => {
  return {
    type: GET_ITEMS
  }
}

const getItemsSuccess = items => {
  return{
    type: GET_ITEMS_SUCCESS,
    items: items
  }
}

const getItemsFail = error => {
  // const errorStatus = error.message ? error.response : null;

  return {
    type: GET_ITEMS_FAIL,
    error,
  }
}

export const getItemsList = (() => {
  return dispatch => {
    dispatch(getItemsStart());
    fetch('http://localhost:3004/items')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      dispatch(getItemsSuccess(data))
    })
    .catch(function(err) {
      dispatch(getItemsFail(err))
    });
  }
})