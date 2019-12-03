import {ADD_COUNT, RED_COUNT, ADD_MSG } from './action-types'

export const addCount = (num)=>({type:ADD_COUNT, data:num})
export const redCount = (num)=>({type:RED_COUNT, data:num})
export const addMsg = (msg)=>({type:ADD_MSG, data:msg})

