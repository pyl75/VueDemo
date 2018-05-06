/**
 * Created by pengyunlong on 2018/5/6.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import counter  from 'store/modules/counter'

Vue.use(Vuex) // 确保在new Vuex.Store()之前

export default new Vuex.Store({
    modules: {counter}
})