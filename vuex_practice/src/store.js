import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    message: ""
  },
  getters: {
    // Vuex側でcountを2倍するものという処理を返す
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3,
    message: state => state.message
  },
  mutations: {
    increment(state, number){
      state.count += number;
    },
    decrement(state, number){
      state.count -= number;
    },
    updateMessage(state, newMessage){
      state.message = newMessage;
    }
  },
  actions: {
    increment({commit}, number){
      // incrementをコミットする
      // numberをmutationsのnumberに渡す
      commit('increment', number);
    },
    decrement({commit}, number){
      commit('decrement', number);
    },
    updateMessage({ commit }, newMessage){
      commit('updateMessage', newMessage);
    }
  }
});
