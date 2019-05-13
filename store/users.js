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
  }, payload) {
    commit('loadUsers', payload);
  }
};

export const getters = {
  getUsers: state => {
    return state.users
  }
}
