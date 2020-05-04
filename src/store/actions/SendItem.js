// import api from '../../api'

import { POST_ITEM, POST_ITEM_SUCCESS, POST_ITEM_FAIL } from './actionTypes';

const postItemStart = () => {
  return {
    type: POST_ITEM
  }
}

const postItemSuccess = item => {
  return {
    type: POST_ITEM_SUCCESS,
    item
  }
}

const postItemFail = error => {
  const errorStatus = error.message ? error.response.status : null;

  return {
    type: POST_ITEM_FAIL,
    error: errorStatus === 422 ? error : null,
    networkError: errorStatus >= 500 ? error : null
  }
}

export const postItem = ((data) => {
  return dispatch => {
    dispatch(postItemStart());
    fetch('http://localhost:3004/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
   })
    .then(function(response) {
      console.log('response', response)
      return response.json();
    })
    .then(function(data) {
      dispatch(postItemSuccess(data))
      console.log('data', data);
    })
    .catch(function(err) {
      dispatch(postItemFail(err))
      console.error('error', err);
    });
  }
})