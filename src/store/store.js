import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import loadWords from '../api/loadWords';
import { SET_WORDS,
         SET_SESSION_STATE,
         SET_CORR_ANSW_TO_ZERO,
         INCREASE_CORRECT_ANSWERS,
       } from './mutations';
import { LOAD_WORDS,
         CLEAR_STATE,
       } from './actions';
import { setWords,
         setCorrAnswToZero,
         setDefaultState,
         setLoadingState,
         setStartedState,
         setStartedWithErrorState, 
        } from '../helpers/actionCreators';

Vue.use(Vuex);

export const defaultSessionState = {
  loading: false,
  started: false,
  startedWithError: false,
  willBeFinished: false,
  finished: false,
};

const store = new Vuex.Store({
  state: {
    words: [],
    correctAnswers: 0,
    successfulSessionCorrAnsw: 5,
    sessionState: defaultSessionState,
  },
  plugins: [createLogger({ collapsed: false })],
  mutations: {
    [SET_WORDS](state, payload) {
      state.words = payload.words;
    },
    [INCREASE_CORRECT_ANSWERS](state) {
      state.correctAnswers++;
    },
    [SET_CORR_ANSW_TO_ZERO](state) {
      state.correctAnswers = 0;
    },
    [SET_SESSION_STATE](state, payload) {
      state.sessionState = payload.state;
    },
  },
  actions: {
    [LOAD_WORDS]({ commit }) {
      commit(setLoadingState());

      loadWords()
        .then(
          r => { 
            commit(setWords(r));
            commit(setStartedState());
          },
        )
        .catch(() => commit(setStartedWithErrorState()));
    },
    [CLEAR_STATE]({ commit }) {
      commit(setCorrAnswToZero());
      commit(setDefaultState());
    },
  },
});

export default store;

