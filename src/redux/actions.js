import {INCREATE,DECREATE} from './action-types'

export const increate = (number) => ({type:INCREATE,data:number})
export const decreate = (number) => ({type:DECREATE,data:number})

export const increateAsync = (number) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(increate(number))
        }, 1000);
    }
}