/**
 * Created by pengyunlong on 2018/5/6.
 */
import {INCREASE, RESET} from 'store/types'

export const increase = (({dispatch}) => {
    dispatch(INCREASE) // 调用type为INCREASE的mutation
})

export const reset = (({dispatch}) => {
    dispatch(RESET) // 调用type为RESET的mutation
})