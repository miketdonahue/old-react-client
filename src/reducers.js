import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

// Use redux for application state and use component state for UI state

// Takes in state and action and returns a new state
const searchTerm = (state = '', action) => {
  // Reducers will get run on every single action that happens
  // So we need to check that it is the correct action for this reducer
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }

  return state;
};

const apiData = (state = {}, action) => {
  if (action.type === ADD_API_DATA) {
    return Object.assign({}, state, { [action.payload.imdbID]: action.payload });
  }

  return state;
};

const rootReducer = combineReducers({
  searchTerm,
  apiData,
});

export default rootReducer;
