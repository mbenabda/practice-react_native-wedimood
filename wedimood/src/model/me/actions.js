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

const fetchDeviceId = () => {
  return (dispatch, getState) => {
    dispatch(fetchDeviceIdRequest())

    return Promise.resolve('dev-mehdi')
    .then((deviceId) => {
      dispatch(fetchDeviceIdSuccess(deviceId))
      return Promise.resolve()
    })
    .catch((error) => {
      dispatch(fetchDeviceIdFailure(e))
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
