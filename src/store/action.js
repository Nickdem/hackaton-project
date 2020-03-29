import {FETCH_DATA_SUCCESS, FETCH_DATA_ERROR} from './actionType'
import {dat} from './data/db'

export function giveMeData() {
  	return async dispatch => {
    try {
     dispatch(fetchDataSuccess(dat))
    } catch (e) {
      dispatch(fetchDataError(e))
    }
  }
}

export function fetchDataSuccess(projects) {
  return{
    type: FETCH_DATA_SUCCESS,
    projects,
    loading: false
  }
}

export function fetchDataError(e) {
  return{
    type: FETCH_DATA_ERROR,
    error: e
  }
}
