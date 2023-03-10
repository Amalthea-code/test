<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  methods: {
    ...mapActions({
      fetchPosts: 'posts/fetchPosts',
    }),
  },
  computed: {
    ...mapGetters({
      GET_POSTS: 'posts/GET_POSTS'
    })
  },
  mounted () {
    if (this.GET_POSTS.length === 0) {
      this.fetchPosts()
    }
  }
}
</script>

<style lang="scss">
  #app {
    width: 700px;
    margin: 0 auto;
  }
</style>
