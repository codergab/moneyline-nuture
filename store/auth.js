export const store = () => ({
  user: false,
  registered: false,
});

export const mutations = {
  authenticate(state, payload) {
    state.user = payload;
  },
};

export const actions = {
  authenticate: (context, payload) => {
    console.log(payload);
    context.commit('authenticate', payload);
  },

}


export const getters = {

  // authUser: state => {
  //   return state.user
  // },

  // isUserRegistered

  authenticated: state => {
    if (state.user) {
      return true;
    }

    return false;
  }
}
