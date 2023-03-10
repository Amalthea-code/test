<template>
  <div class="posts">
    <PostElement
      v-for="post in GET_POSTS"
      :key="post.id"
      :unicId="post.id"
      :name="post.name"
      :description="post.description"
      :tags="post.tags"
    />
  </div>
</template>

<script>
import PostElement from '@/components/PostElement.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    PostElement
  },
  computed: {
    ...mapGetters({
      GET_POSTS: 'posts/GET_POSTS'
    })
  }
}
</script>

<style lang="scss" scoped>
  .posts {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
