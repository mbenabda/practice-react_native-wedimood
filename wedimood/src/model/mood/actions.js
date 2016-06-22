import {
  RATE_MOOD_REQUEST,
  RATE_MOOD_SUCCESS,
  RATE_MOOD_FAILURE,
} from './constants'

const rateMoodRequest = () => ({
  type: RATE_MOOD_REQUEST,
})

const rateMoodSuccess = (moodId) => ({
  type: RATE_MOOD_SUCCESS,
  payload: moodId
})

const rateMoodFailure = (error) => ({
  type: RATE_MOOD_FAILURE,
  payload: error
})

const rateMood = (moodId) => {
  return (dispatch, getState) => {
    dispatch(rateMoodRequest())

    return Promise.resolve()
    .then(() => {
      dispatch(rateMoodSuccess(moodId))
      return Promise.resolve()
    })
    .catch((error) => {
      dispatch(rateMoodFailure(error))
    })
  }
}

module.exports = {
  rateMood
}
