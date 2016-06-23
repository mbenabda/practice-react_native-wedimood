import {
  RATE_MOOD_REQUEST,
  RATE_MOOD_SUCCESS,
  RATE_MOOD_FAILURE,
  RECEIVE_RATINGS,
} from './constants'

import { handleActions } from 'redux-actions'

const availableRatings = ["angry", "sad", "bored", "fine", "happy", "awesome", ].reduce((acc, code) => {
  acc.ratings.push({
    code,
    value: acc.value,
  })
  acc.value++
  return acc
}, { value: 0, ratings: [] }).ratings

const initialState = {
  availableRatings: availableRatings,
  maxRating: availableRatings.reduce((acc, current) => { return Math.max(acc, current.value)}, 0),
  ratingsById: {},
  producedRatingIdsByDeviceId: {},
}

module.exports = handleActions({
  RECEIVE_RATINGS: (state, {payload: ratings}) => {
    const mapped = ratings.reduce((acc, rating) => {
      acc.ratingsById[rating.id] = rating

      acc.producedRatingIdsByDeviceId[rating.rated_by] = acc.producedRatingIdsByDeviceId[rating.rated_by] || []
      acc.producedRatingIdsByDeviceId[rating.rated_by].push(rating.id)
      return acc
    }, {
      ratingsById: {},
      producedRatingIdsByDeviceId: {},
    })

    return {
      ...state,
      producedRatingIdsByDeviceId: mapped.producedRatingIdsByDeviceId,
      ratingsById: mapped.ratingsById,
    }
  }
}, initialState)
