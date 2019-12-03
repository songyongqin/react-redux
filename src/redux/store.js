// import {createStore} from 'redux'
import {createStore} from '../libs/redux/index'
import Reducers from './reducers'
// import Reducers from '../libs/redux/index'

export default createStore(Reducers)