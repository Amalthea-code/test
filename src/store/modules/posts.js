export default {
  namespaced: true,
  state: {
    posts: []
  },
  mutations: {
    SET_POSTS (state, payload) {
      state.posts = payload
    },
    SET_POST (state, payload) {
      state.posts = state.posts.push(payload)
    }
  },
  actions: {
    async fetchPosts ({ commit }) {
      const result = await import("@/posts.json")
      commit('SET_POSTS', result)
    }
  },
  getters: {
    GET_POSTS: (state) => {
      return state.posts
    },
    GETNEW_ID: (state) => {
      return Math.max(...state.posts.map(i => i.id)) + 1
    }
  }
}