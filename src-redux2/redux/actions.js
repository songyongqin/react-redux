import {INCREATE,DECREATE} from './action-types'

export const increate = (number) => ({type:INCREATE,data:number})
export const decreate = (number) => ({type:DECREATE,data:number})