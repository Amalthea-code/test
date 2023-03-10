<template>
  <div class="home">
    <Button @click="clickHandler">
      Новый пост
    </Button>
    <PostsList />
    <TagList />
  </div>
</template>

<script>
import {
  Button
} from 'element-ui';
import PostsList from '@/components/PostsList.vue';
import TagList from '@/components/TagList.vue';

export default {
  name: 'HomeView',
  components: {
    Button,
    PostsList,
    TagList
  },
  methods: {
    clickHandler() {
      this.$router.push('/create');
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    flex-direction: column;
    gap: 20px;

    font-family: sans-serif;
  }
</style>
