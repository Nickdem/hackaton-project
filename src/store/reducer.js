import {FETCH_DATA_SUCCESS, FETCH_DATA_ERROR} from './actionType'


const initialState = {
  natProjects: [],
  loading: true,
  error: null
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state, natProjects: action.projects, loading: action.loading
      }
    case FETCH_DATA_ERROR:
      return {
        ...state, error: action.error
      }
    default:
      return state
  }
}
