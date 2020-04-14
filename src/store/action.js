import {FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, FETCH_NEWS_SUCCESS, FETCH_PROJECT_SUCCESS} from './actionType'
import {dat, newsList} from './data/db'

export function giveMeData() {
  	return async dispatch => {
    try {
      setTimeout(() => {
        dispatch(fetchDataSuccess(dat))
        dispatch(fetchNewsSuccess(newsList))
      }, 500)
    } catch (e) {
      dispatch(fetchDataError(e))
    }
  }
}

export function giveMeProject() {
  return async dispatch => {
    try {
      setTimeout(() => {
        dispatch(fetchProjectSuccess(dat))
      }, 500)
    } catch (e) {
      dispatch(fetchDataError(e))
    }
  }
}

function fetchDataSuccess(projects) {
  return{
    type: FETCH_DATA_SUCCESS,
    projects,
    loading: false
  }
}

function fetchProjectSuccess(projects) {
  return{
    type: FETCH_PROJECT_SUCCESS,
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
