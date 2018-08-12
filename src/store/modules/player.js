import { getPlayers } from '../../api/player';

export default {
  namespaced: true,
  state: {
    status: 'INIT',
    search: {
      keyword: '',
      region: '',
    },
    results: {
      players: [],
    },
    message: '',
  },
  getters: {
    playerResults(state) {
      return state.results.players;
    },
  },
  mutations: {
    SET_SEARCH(state, { region, keyword }) {
      Object.assign(state.search, { region, keyword });
    },
    SET_STATUS(state, status) {
      Object.assign(state, { status });
    },
    SET_RESULT(state, results) {
      Object.assign(state, { results });
    },
    SET_MESSAGE(state, message) {
      Object.assign(state, { message });
    },
  },
  actions: {
    searchPlayer({ commit, state }, { region = 'pc-krjp', keyword = '' }) {
      commit('SET_STATUS', 'WAITING');
      commit('SET_SEARCH', { region, keyword });
      Object.assign(state, { results: [] });
      getPlayers({ region, keyword })
        .then((res) => {
          commit('SET_RESULT', res.data);
          commit('SET_STATUS', 'SUCCESS');
        })
        .catch((err) => {
          const { status } = err.response;
          let message;
          if (status === 404) {
            message = '사용자를 찾을 수 없습니다.';
          } else {
            message = '에러가 발생하였습니다.';
          }
          commit('SET_STATUS', 'FAILURE');
          commit('SET_MESSAGE', message);
        });
    },
  },
};

