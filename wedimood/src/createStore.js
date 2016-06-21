import { createStore, applyMiddleware, combineReducers } from 'redux';
import modules from './model'
import thunk from 'redux-thunk';

const dispatchLogger = ({ getState }) => {
  return (next) => (action) => {
    console.log('will dispatch', action)
    let returnValue = next(action)
    console.log('state after dispatch of ', action, getState())
    return returnValue
  }
}

const stateReducers = Object
  .keys(modules)
  .reduce((accumulator, moduleKey) => {
    accumulator[moduleKey] = modules[moduleKey].reducer;
    return accumulator;
  }, {});

module.exports = (data = {}) => {
  return createStore(
    combineReducers(stateReducers),
    data,
    applyMiddleware(dispatchLogger, thunk)
  )
}
