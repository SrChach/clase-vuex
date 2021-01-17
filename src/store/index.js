import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chocolates: [
      { price: 12, name: 'cremino', disabled: true },
      { price: 12, name: 'vaquita', disabled: false },
      { price: 12, name: 'kinder', disabled: true },
    ],
    currentChocolate: 0,
    addingChocolate: null
  },
  mutations: {
    setEmptyChocolates(state) {
      state.chocolates = []
    },
    addChocolate(state, chocolate) {
      state.chocolates.push(chocolate)
    },
    deleteChocolate(state, position) {
      state.chocolates.splice(position, 1)
    }
  },
  getters: {
    getChocolates: (state) => state.chocolates,
    getCurrentChocolate: (state) => state.chocolates[state.currentChocolate] || null
  },
  actions: {
    suma() {
      return 1 + 2;
    },
    removeChocolate({ state, commit }, position) {
      const toDelete = state.chocolates[position]
      if (!toDelete) return { error: 'El chocolate que intentas borrar no existe' };

      const isDeletable = !toDelete.disabled
      if (!isDeletable) return { error: 'Habilita el chocolate antes de intentar borrarlo' };
      
      commit('deleteChocolate', position)
      return { error: null, data: 'Chocolate borrado' }
    }
  },
})
