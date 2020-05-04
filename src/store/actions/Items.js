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
  console.log('error', error)
  const errorStatus = error.message ? error.response.status : null;

  return {
    type: GET_ITEMS_FAIL,
    error: errorStatus === 422 ? error : null,
    networkError: errorStatus >= 500 ? error : null
  }
}

export const getItemsList = (() => {
  return dispatch => {
    dispatch(getItemsStart());
    fetch('http://localhost:3004/items')
    .then(function(response) {
      console.log('response', response)
      return response.json();
    })
    .then(function(data) {
      dispatch(getItemsSuccess(data))
      console.log('data', data);
    })
    .catch(function(err) {
      dispatch(getItemsFail(err))
      console.error('error', err);
    });
  }
})