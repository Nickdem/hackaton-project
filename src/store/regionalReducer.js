import {FETCH_PROJECT_SUCCESS, FETCH_DATA_ERROR} from './actionType'

const initialState = {
    project: [],
    loading: true,
    error: null
}

export default function regionalReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_PROJECT_SUCCESS:
        return {
          ...state, project: action.projects, loading: action.loading
        }
      case FETCH_DATA_ERROR:
        return {
          ...state, error: action.error
        }
      default:
        return state
    }
  }