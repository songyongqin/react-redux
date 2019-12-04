// > redux模块对象：createStore, combineReducers
// > 1. createStore(reducer) ： 接收一个reducer函数，返回一个store对象
// > 2. combineReducers(reducers) : 接收多个reducer函数的对象，返回一个新的reducer函数
// > 3. store对象：
// > 		getState() 得到内部state对象
// > 		dispatch(action)	分发action，触发reducer调用，返回一个新的state,调用所有绑定的listener
// > 		subscribe(listener) 订阅一个state监听器

export function createStore(reducer) {
  console.log('reducer', reducer)
  //内部state
  let state
  let listeners = []
  //第一次调用reducer得到初始状态并保存
  state = reducer(state,{type:'@mini-redux'})
  //得到内部管理的state对象
  function getState() {
    return state
  }
  //分发action，会触发reducer调用，返回一个新的state,调用所有绑定的listener
  function dispatch(action) {
    //调用reducer,返回新的state，保存上
    state = reducer(state,action)
    //调用listener中所有的监视回调函数
    listeners.forEach(listener => listener())
    return action
  }
  //订阅一个state监听器
  function subscribe(listener) {
    listeners.push(listener)
  }
  return {getState, dispatch, subscribe}
}

//接收一个包含多个reducer函数的对象，返回一个新的reducer函数
export function combineReducers(reducers) {
  return function (state = {}, action) {
    //依次调用所有reducer，得到N个新的子状态，封装成对象并返回
    //准备一个包含所有新状态的容器对象
    const newState = {}
    const keys = Object.keys(reducers)
    keys.forEach(key => {
      const childReducer = reducers[key]
      const childState = state[key]
      const newChildState = childReducer(childState,action)
      newState[key] = newChildState
    })
    return newState
  }
}

export function combineReducers2(reducers) {

  return function (state = {}, action) {
    //依次调用所有reducer，得到N个新的子状态，封装成对象并返回
    //准备一个包含所有新状态的容器对象
    const keys = Object.keys(reducers)
    return keys.reduce((newState,key) => {
      // const childReducer = reducers[key]
      // const childState = state[key]
      // childReducer(childState,action)
      // newState[key] = newChildState
      newState[key] = reducers[key](state[key],action)
      return newState
    },{})
  }
}