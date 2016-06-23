import {
  RATE_MOOD_REQUEST,
  RATE_MOOD_SUCCESS,
  RATE_MOOD_FAILURE,
  RECEIVE_RATINGS,
} from './constants'
import moment from 'moment'
import firebase from "firebase"
const ratingsRef = new firebase("https://wedimood.firebaseio.com").child("ratings")

const rateMoodRequest = () => ({
  type: RATE_MOOD_REQUEST,
})

const rateMoodSuccess = () => ({
  type: RATE_MOOD_SUCCESS,
})

const rateMoodFailure = (error) => ({
  type: RATE_MOOD_FAILURE,
  payload: error
})

const rateMood = (rating) => {
  return (dispatch, getState) => {
    dispatch(rateMoodRequest())

    return new Promise((resolve, reject) => {
      const ratingRecord = {
        rated_at: moment.utc().format(),
        rating: rating,
        rating_over: getState().mood.maxRating,
        rated_by: getState().me.deviceId
      }

      ratingsRef.push(ratingRecord, (error) => {
        if(error) {
          dispatch(rateMoodFailure(error))
          reject(error)
        } else {
          dispatch(rateMoodSuccess())
          resolve()
        }
      })
    })
  }
}

const receiveRatings = (ratings) => ({
  type: RECEIVE_RATINGS,
  payload: ratings,
})


const startReceivingRatings = () => {
  return (dispatch) => {
    ratingsRef.on('value', (ratingRecords) => {
      var ratings = []
      ratingRecords.forEach((ratingRecord) => {
        let val = ratingRecord.val();
        val.rated_at = moment.utc(val.rated_at) // parse utc moment
        ratings.push({
          ...val,
          id: ratingRecord.key()
        })
      })
      dispatch(receiveRatings(ratings))
    })
  }
}

module.exports = {
  rateMood,
  startReceivingRatings,
}
