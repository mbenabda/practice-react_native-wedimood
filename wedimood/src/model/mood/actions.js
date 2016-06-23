import {
  RATE_MOOD_REQUEST,
  RATE_MOOD_SUCCESS,
  RATE_MOOD_FAILURE,
  RECEIVE_RATINGS,
} from './constants'

import firebase from "firebase"

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

const receiveRatings = (ratings) => ({
  type: RECEIVE_RATINGS,
  payload: ratings,
})

const database = new firebase("https://wedimood.firebaseio.com").child("ratings")

const startReceivingRatings = () => {
  return (dispatch) => {
    database.on('value', (ratingRecords) => {
      var ratings = []
      ratingRecords.forEach((ratingRecord) => {
        ratings.push(ratingRecord.val())
      })
      dispatch(receiveRatings(ratings))
    })
  }
}

module.exports = {
  rateMood,
  startReceivingRatings,
}
