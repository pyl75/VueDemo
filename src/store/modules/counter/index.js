import{INCREASE, RESET} from 'store/types.js'

const state = {
    count: 0
}

const mutations = {
    [INCREASE] (state) { state.count++ },
    [RESET] (state) { state.count = 0 }
}

export default {state, mutations}