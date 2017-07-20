import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tip: {}
  },

  getters: {
    tip: state => {
      return state.tip
    }
  },
  // mutations are always synchronous
  mutations: {
    tip: (state, tip) => {
      state.tip = tip
    }
  }
/*
  //commits the mutation, it's asynchronous
  actions: {
    // showing passed with payload, represented as asynchNum (an object)
    asyncDecrement: ({ commit }, asyncNum) => {
      setTimeout(() => {
        //the asyncNum objects could also just be static amounts
        commit('decrement', asyncNum.by);
      }, asyncNum.duration);
    }
  } */
})

export default store
