import {INCREATE,DECREATE} from './action-types'

export function counter(state = 0,action) {
    switch (action.type) {
        case INCREATE:
          return state + action.data;
        case DECREATE:
            return state - action.data;
        default:
          return state;
    }
}