import Vue from 'vue';
import Vuex from 'vuex'
import { fetchNewsList } from '../api/index.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state : {
        news : []
    },
    actions : {
        FETCH_NEWS(){

        }
    }
})