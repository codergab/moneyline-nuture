import {
  ALL_USERS
} from '../utils/api-routes';

export const store = () => ({
  users: [],
  responseData: null
});

export const mutations = {
  loadUsers(state, payload) {
    state.users = payload
  },
  additionals(state, payload) {
    state.responseData = payload
  }
};

export const actions = {
  fetchUsers({
    commit
  }) {
    this.$axios.get(ALL_USERS).then(response => {
      const {
        data
      } = response.data;
      const users = data.data;
      console.log(users)
      commit('loadUsers', users);
      commit('additionals', data);
    })
  },

}

export const getters = {
  getUsers: state => {
    return state.users
  }
}
