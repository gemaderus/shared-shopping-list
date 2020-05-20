import { DELETE_ITEM, DELETE_ITEM_SUCCESS, DELETE_ITEM_FAIL, DELETE_ITEM_RESET} from './actionTypes';

const deleteItemStart = () => {
  return {
    type: DELETE_ITEM
  }
}

const deleteItemSuccess = item => {
  return {
    type: DELETE_ITEM_SUCCESS,
    id: item.id
  }
}

const deleteItemFail = error => {
  // const errorStatus = error.message ? error.response.error : null;

  return {
    type: DELETE_ITEM_FAIL,
    error,
  }
}

export const deleteItem = ((id) => {
  return dispatch => {
    dispatch(deleteItemStart());
    fetch(`http://localhost:3004/items/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
   })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      dispatch(deleteItemSuccess(data))
    })
    .catch(function(err) {
      dispatch(deleteItemFail(err))
    });
  }
})