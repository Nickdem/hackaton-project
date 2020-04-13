import {FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, FETCH_NEWS_SUCCESS} from './actionType'

const initialState = {
  natProjects: [],
  news: [],
  loading: true,
  error: null
}

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state, natProjects: action.projects, loading: action.loading
      }
    case FETCH_NEWS_SUCCESS:
      return {
        ...state, news: action.news
      }
    case FETCH_DATA_ERROR:
      return {
        ...state, error: action.error
      }
    default:
      return state
  }
}
