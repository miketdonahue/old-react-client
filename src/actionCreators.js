import axios from 'axios';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function addApiData(apiData) {
  return { type: ADD_API_DATA, payload: apiData };
}

// Returns a thunk function; We dispatch it into the redux store
// Redux will call this function and wait for it to dispatch
export function getApiDetails(imdbID) {
  return (dispatch) => {
    axios
      .get(`http://localhost:3000/${imdbID}`)
      .then((response) => {
        dispatch(addApiData(response.data));
      })
      .catch((error) => {
        console.log('axios error', error);
      });
  };
}
