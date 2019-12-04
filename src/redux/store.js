import {createStore} from 'redux'
// import {createStore} from '../libs/redux/index'
import Reducers from './reducers'
console.log('Reducers',Reducers)
export default createStore(Reducers)

