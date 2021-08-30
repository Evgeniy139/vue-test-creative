import Vue from 'vue'
import Vuex from 'vuex'
import apartments from './modules/apartments'
import game from './modules/game'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        apartments,
        game
    }
})
