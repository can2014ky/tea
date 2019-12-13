const stat = {
  isSideMenuCollapse: true,
  themeClassName: 'theme-default',
  localLanguage: 'zh',
};

const mutations = {
  SIDE_MENU_COLLAPSE(state) {
    state.isSideMenuCollapse = !state.isSideMenuCollapse;
  },
  THEME_CLASS_NAME(state, status) {
    state.themeClassName = status;
  },
  LOCAL_LANGUAGE(state, status) {
    state.localLanguage = status;
  },
};

const actions = {
  toggleSideMenuCollapse({ commit }) {
    commit('SIDE_MENU_COLLAPSE');
  },
  toggleTheme({ commit }, status) {
    commit('THEME_CLASS_NAME', status);
    // document.body.className = status;
  },
  toggleLocalLanguage({ commit }, status) {
    commit('LOCAL_LANGUAGE', status);
  },
};

export default {
  namespaced: true,
  state: stat,
  mutations,
  actions,
};
