<template>
  <div>
    <h2>
      Найденные уникальные теги:
    </h2>
    <div class="tags">
      <Tag
        v-for="(tag, id) in GET_TAGS"
        :key="id"
      >
        {{ tag }}
      </Tag>
    </div>
  </div>
</template>

<script>
import {
  Tag
} from 'element-ui';
import {
  mapGetters
} from 'vuex';

export default {
  components: {
    Tag
  },
  computed: {
    ...mapGetters({
      GET_TAGS: 'posts/GET_TAGS'
    })
  }
}
</script>

<style lang="scss" scoped>
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
</style>