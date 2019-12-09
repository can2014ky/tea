const stat = {
  isSideMenuCollapse: true,
};

const mutations = {
  SIDE_MENU_COLLAPSE(state) {
    state.isSideMenuCollapse = !state.isSideMenuCollapse;
  },
};

const actions = {
  toggleSideMenuCollapse({ commit }) {
    commit('SIDE_MENU_COLLAPSE');
  },
};

export default {
  namespaced: true,
  state: stat,
  mutations,
  actions,
};
