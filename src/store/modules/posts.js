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
      state.posts.push(payload)
    },
    DELETE_POST (state, payload) {
      state.posts.find((el, i) => {
        if (el.id === payload) {
          state.posts.splice(i, 1)
        }
      })
    }
  },
  actions: {
    async fetchPosts ({ commit }) {
      const result = await import("@/posts.json")
      commit('SET_POSTS', result.default)
    },
    async setPost ({ commit }, post) {
      await fetch('example.com/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }),
      commit('SET_POST', post)
    },
    async deletePost ({ commit }, id) {
      await fetch('example.com/api/posts', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      commit('DELETE_POST', id)
    }
  },
  getters: {
    GET_POSTS: (state) => {
      return state.posts
    },
    GETNEW_ID: (state) => {
      if (!state.posts.length) {
        return 0
      } else {
        return Math.max(...state.posts.map(i => i.id)) + 1
      }
    },
    GET_TAGS: (state) => {
      return [...new Set(state.posts.map((el)=> {
        return el.tags.map(el => el.name)
      }).flat())]
      
    }
  }
}