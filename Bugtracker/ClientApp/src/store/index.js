import Vuex from 'vuex'
import Vue from 'vue'
import tickets from './modules/tickets'
import projects from './modules/projects'
import auth from './modules/auth'
import menu from './modules/menu'

//load Vuex
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        tickets,
        projects,
        auth,
        menu
    }
});
