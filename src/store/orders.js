import * as frb from 'firebase'

class Order {
  constructor (name, phone, adId, done = false, id = null) {
    this.name = name
    this.phone = phone
    this.adId = adId
    this.done = done
    this.id = id
  }
}
export default {
  state: {
    orders: []
  },
  mutations: {
    loadOrders (state, payload) {
      state.orders = payload
    }
  },
  actions: {
    async createOrder ({commit}, {name, phone, adId, ownerId}) {
      const order = new Order(name, phone, adId)
      commit('clearError')
      try {
        await frb.database().ref(`/users/${ownerId}/orders`).push(order)
      } catch (error) {
        commit('setError', error.message)
        throw error
      }
    },
    async fetchOrders ({commit, getters}) {
      commit('setLoading', true)
      commit('clearError')
      const resultOrders = []
      try {
        const frbVal = await frb.database().ref(`/users/${getters.user.id}/orders`).once('value')
        const orders = frbVal.val()
        Object.keys(orders).forEach(key => {
          const o = orders[key]
          resultOrders.push(
            new Order(o.name, o.phone, o.adId, o.done, key)
          )
        })
        commit('loadOrders', resultOrders)
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
    async markOrderDone ({commit, getters}, payload) {
      commit('clearError')
      try {
        console.log(payload)
        await frb.database().ref(`/users/${getters.user.id}/orders`).child(payload).update({
          done: true
        })
      } catch (error) {
        commit('setError', error.message)
        throw error
      }
    }
  },
  getters: {
    doneOrders (state) {
      return state.orders.filter(o => o.done)
    },
    undoneOrders (state) {
      return state.orders.filter(o => !o.done)
    },
    orders (state, getters) {
      return getters.undoneOrders.concat(getters.doneOrders)
    }
  }
}
