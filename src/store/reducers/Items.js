import { updateObject} from '../utility';
import { GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAIL, POST_ITEM_SUCCESS, POST_ITEM, POST_ITEM_FAIL } from '../actions/actionTypes';

const initialState = {
  data: null,
  error: null,
  networkError: null,
  loading: false
}

const fetchStart = (state, action) => {
  return updateObject(state, {
    error: null,
    networkError: null,
    loading: true
  })
}

const fetchFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    networkError: action.networkError,
    loading: false
  })
}

const getItemsStartSuccess = (state, action) => {
  return updateObject(state, {
    data: action.items,
    error: null,
    networkError: null,
    loading: false
  })
}



const postItemSuccess = (state, action) => {
  return updateObject(state, {
    data: [...state.data, action.item],
    loading: false
  })
}

const getItemsList = (state = initialState, action) => {
  switch(action.type) {
    case GET_ITEMS:
    case POST_ITEM:
      return fetchStart(state, action);
    case GET_ITEMS_FAIL:
    case POST_ITEM_FAIL:
        return fetchFail(state, action);
    case GET_ITEMS_SUCCESS:
      return getItemsStartSuccess(state, action);
    case POST_ITEM_SUCCESS:
        return postItemSuccess(state, action);
    default:
      return state
  }
}

export default getItemsList;