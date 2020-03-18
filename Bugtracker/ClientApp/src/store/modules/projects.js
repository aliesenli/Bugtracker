import axios from 'axios'

const state = {
    projects: []
};

const getters = {
    allProjects: (state) => state.projects
};

const actions = {
    async fetchProjects({ commit }) {
        const response = await axios('https://localhost:5001/api/projects');
        
        commit('setProjects', response.data);
    }
};

const mutations = {
    setProjects: (state, projects) => state.projects = projects,
};

export default ({
    state,
    getters,
    actions,
    mutations
})