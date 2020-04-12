import {FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, FETCH_NEWS_SUCCESS} from './actionType'
import {dat} from './data/db'
import {newsList} from './data/newsList'

export function giveMeData() {
  	return async dispatch => {
    try {
      setTimeout(() => dispatch(fetchDataSuccess(dat)), 1500)
    } catch (e) {
      dispatch(fetchDataError(e))
    }
  }
}

export function giveMeNews() {
  return async dispatch => setTimeout(() => dispatch(fetchNewsSuccess(newsList)), 2000)
}

function fetchDataSuccess(projects) {
  return{
    type: FETCH_DATA_SUCCESS,
    projects,
    loading: false
  }
}

function fetchNewsSuccess(news) {
  return{
    type: FETCH_NEWS_SUCCESS,
    news
  }
}

function fetchDataError(e) {
  return{
    type: FETCH_DATA_ERROR,
    error: e
  }
}
