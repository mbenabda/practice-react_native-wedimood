import {
  FETCH_DEVICE_ID_REQUEST,
  FETCH_DEVICE_ID_SUCCESS,
  FETCH_DEVICE_ID_FAILURE,

  CHANGE_DEPARTMENT_REQUEST,
  CHANGE_DEPARTMENT_SUCCESS,
  CHANGE_DEPARTMENT_FAILURE,

  CHANGE_TEAM_REQUEST,
  CHANGE_TEAM_SUCCESS,
  CHANGE_TEAM_FAILURE,
} from './constants'

import { AsyncStorage } from 'react-native'
import DeviceInfo from 'react-native-device-info'

const generateUUID = () => {
  return Promise.resolve(DeviceInfo.getUniqueID())
}

const lookupOrCreateInStorage = (key, getPromiseResolvingValue) => {
  return AsyncStorage.getItem(key)
  .then((storedValue) => {
    return storedValue || getPromiseResolvingValue()
      .then((computedValue) => {
        return AsyncStorage.setItem(key, computedValue).then(() => { return computedValue })
      })
  })
}

const fetchDeviceId = () => {
  return (dispatch, getState) => {
    dispatch(fetchDeviceIdRequest())

    return lookupOrCreateInStorage('wedimood:UUID', generateUUID)
    .then((deviceId) => {
      dispatch(fetchDeviceIdSuccess(deviceId))
      return Promise.resolve()
    })
    .catch((error) => {
      dispatch(fetchDeviceIdFailure(error))
      return Promise.reject(error)
    })
  }
}

const fetchDeviceIdRequest = () => ({ type: FETCH_DEVICE_ID_REQUEST })
const fetchDeviceIdSuccess = (deviceId) => ({ type: FETCH_DEVICE_ID_SUCCESS, payload: deviceId })
const fetchDeviceIdFailure = (error) => ({ type: FETCH_DEVICE_ID_FAILURE, payload: error })

const changeDepartment = (department) => {
  return (dispatch, getState) => {
    dispatch(changeDepartmentRequest())

    return Promise.resolve(department)
    .then((dept) => {
      dispatch(changeDepartmentSuccess(dept))
      return Promise.resolve()
    })
    .catch((error) => {
      dispatch(changeDepartmentFailure(error))
    })
  }
}

const changeDepartmentRequest = () => ({ type: CHANGE_DEPARTMENT_REQUEST })
const changeDepartmentSuccess = (department) => ({ type: CHANGE_DEPARTMENT_SUCCESS, payload: department })
const changeDepartmentFailure = (error) => ({ type: CHANGE_DEPARTMENT_FAILURE, payload: error })

const changeTeam = (team) => {
  return (dispatch, getState) => {
    dispatch(changeTeamRequest())

    return Promise.resolve(team)
    .then((teamId) => {
      dispatch(changeTeamSuccess(teamId))
      return Promise.resolve()
    })
    .catch((error) => {
      dispatch(changeTeamFailure(error))
    })
  }
}

const changeTeamRequest = () => ({ type: CHANGE_TEAM_REQUEST })
const changeTeamSuccess = (team) => ({ type: CHANGE_TEAM_SUCCESS, payload: team })
const changeTeamFailure = (error) => ({ type: CHANGE_TEAM_FAILURE, payload: error })

module.exports = {
  fetchDeviceId,
  changeDepartment,
  changeTeam,
}
