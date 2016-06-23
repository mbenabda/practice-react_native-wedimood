import {
  FETCH_DEVICE_ID_SUCCESS,
  FETCH_DEVICE_ID_FAILURE,
  CHANGE_DEPARTMENT_SUCCESS,
  CHANGE_DEPARTMENT_FAILURE,
  CHANGE_TEAM_SUCCESS,
  CHANGE_TEAM_FAILURE,
} from './constants'

import { handleActions } from 'redux-actions'

const initialState = {
  deviceId: undefined,
  department: 'it',
  team: 'it_distribution',
}

const errorReducer = (state, { payload: error }) => {
  return {
    ...state,
    error,
  }
}

module.exports = handleActions({
  FETCH_DEVICE_ID_SUCCESS: (state, { payload: deviceId }) => {
    return {
      ...state,
      error: undefined,
      deviceId,
    }
  },

  FETCH_DEVICE_ID_FAILURE: errorReducer,

  CHANGE_DEPARTMENT_SUCCESS: (state, { payload: department }) => {
    return {
      ...state,
      error: undefined,
      department,
    }
  },

  CHANGE_DEPARTMENT_FAILURE: errorReducer,

  CHANGE_TEAM_SUCCESS: (state, { payload: team }) => {
    return {
      ...state,
      error: undefined,
      team,
    }
  },

  CHANGE_TEAM_FAILURE: errorReducer,
}, initialState)
