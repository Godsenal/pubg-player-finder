import { getPlayers } from '../../api/player';

// named 'defaultState' to avoid naming confilct with mutation's state

const defaultState = {
  status: 'INIT',
  search: {
    keyword: '',
    region: '',
  },
  results: {
    players: [],
  },
  message: '',
};

const getters = {
  playerResults(state) {
    return state.results.players;
  },
};
// Three ways to naming mutations functions
// 1. current way
// 2. name it like ['SEARCH_PLAYER']
// 3. name it like way 2 and extract to constants.

const mutations = {
  searchPlayer(state, payload) {
    const update = {
      status: 'WAITING',
      search: {
        ...payload,
      },
      results: defaultState.results,
    };
    Object.assign(state, update);
  },
  searchPlayerSuccess(state, payload) {
    const update = {
      status: 'SUCCESS',
      results: payload.results,
    };
    Object.assign(state, update);
  },
  searchPlayerFailure(state, payload) {
    const update = {
      status: 'FAILURE',
      message: payload.message,
    };
    Object.assign(state, update);
  },
};

const actions = {
  async searchPlayer({ commit }, { region = 'pc-krjp', keyword = '' }) {
    commit('searchPlayer', { region, keyword });
    try {
      const res = await getPlayers({ region, keyword });
      commit('searchPlayerSuccess', { results: res.data });
    } catch (err) {
      const { status } = err.response;
      let message;
      if (status === 404) {
        message = '사용자를 찾을 수 없습니다.';
      } else {
        message = '에러가 발생하였습니다.';
      }
      commit('searchPlayerFailure', { message });
    }
  },
};

export default {
  namespaced: true,
  state: defaultState,
  getters,
  mutations,
  actions,
};
