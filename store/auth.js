export const store = () => ({
  user: false,
  registered: false,
});

export const mutations = {
  authenticate(state, payload) {
    state.user = payload;
  },

  logout(state) {
    state.user = false
  }
};

export const actions = {
  authenticate: (context, payload) => {
    console.log(payload);
    context.commit('authenticate', payload);
  },

  logout: (context) => {
    context.commit('logout')
  }


}


export const getters = {

  authUser: state => {
    const {
      first_name,
      last_name
    } = state.user.user;
    return `${first_name} ${last_name}`;
  },


  authUserRole: state => {
    const {
      userRole
    } = state.user.user.roles[0].name;
    return userRole;
  },

  // isUserRegistered

  authenticated: state => {
    if (state.user) {
      return true;
    }

    return false;
  }
}
