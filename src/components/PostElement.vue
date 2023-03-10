<template>
  <Card>
    <div class="post">
      <span class="post__name">
        {{ name }}
      </span>
      <span class="post__text">
        {{ description }}
      </span>
      <div class="post__tags">
        <Tag
          v-for="tag in tags"
          :key="tag.id"
        >
          {{ tag.name }}
        </Tag>
      </div>
      <Button
        class="post__delete"
        @click="deleteHendler"
      >
        Удалить
      </Button>
    </div>
  </Card>
</template>

<script>
import {
  Tag
} from 'element-ui';
import {
  Card,
  Button
} from 'element-ui';
import {
  mapActions
} from 'vuex';

export default {
  components: {
    Card,
    Button,
    Tag
  },
  props: {
    name: String,
    description: String,
    unicId: Number,
    tags: Array
  },
  methods: {
    ...mapActions({
      deletePost: 'posts/deletePost'
    }),
    deleteHendler () {
      this.deletePost(this.unicId);
    }
  }
}
</script>

<style lang="scss" scoped>
  .post {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__name {
      font-size: 20px;
    }

    &__text {
      font-size: 14px;
    }

    &__tags {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
  }
</style>