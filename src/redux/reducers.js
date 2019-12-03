// import {combineReducers} from 'redux'
// import {combineReducers} from '../libs/redux/index'
import {combineReducers} from '../libs/redux/index'
import {ADD_COUNT, RED_COUNT, ADD_MSG} from './action-types'

const initCount = 1
function count(state = initCount, action){
  console.log(state,action)
  switch (action.type) {
    case ADD_COUNT:
      return state + action.data
    case RED_COUNT:
        return state - action.data
    default:
      return state
  }
}

const initMsgs = []
function msgs(state = initMsgs, action){
  switch (action.type) {
    case ADD_MSG:
      return [action.data, ...state]
    default:
      return state
  }
}

export default combineReducers({
  count,
  msgs
})