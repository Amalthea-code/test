<template>
  <div class="create">
    <Input
      v-model="name"
      class="create__input"
      placeholder="Название"
      maxlength="255"
      />
    <Input
      v-model="description"
      class="create__textarea"
      type="textarea"
      rows="2"
      placeholder="Описание"
      maxlength="4096"
    />
    <div class="create__tags">
      <Tag
        v-for="tag in tags"
        :key="tag.id"
        closable
        :disable-transitions="false"
        @close="handleClose(tag.id)"
      >
        {{ tag.name }}
      </Tag>
      <Input
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="mini"
        @keyup.enter.native="createTag"
        @blur="createTag"
      />
      <Button
        v-else
        size="small"
        @click="showInput"
      >
        + Новый тег
      </Button>
    </div>
    <Button
      @click="createPost"
    >
      Создать пост
    </Button>
  </div>
</template>

<script>
import {
  Button,
  Input,
  Tag
} from 'element-ui';
import {
  mapActions,
  mapGetters
} from 'vuex';

export default {
  name: 'CreateView',
  components: {
    Button,
    Input,
    Tag
  },
  data () {
    return {
      id: 0,
      name: '',
      description: '',
      tags: [],
      inputVisible: false,
      inputValue: ''
    };
  },
  computed: {
    ...mapGetters({
      GETNEW_ID: 'posts/GETNEW_ID'
    })
  },
  methods: {
    ...mapActions({
      setPost: 'posts/setPost',
      getId: 'posts/getId'
    }),
    createPost () {
      if (!this.name || !this.description) {
        return;
      }
      this.setPost(
        {
          id: this.GETNEW_ID,
          name: this.name,
          description: this.description,
          tags: this.tags
        }
      );
      this.name = '';
      this.description = '';
      this.tags = [];
      this.$router.go(-1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleClose(id) {
      this.tags.find((el, i) => {
        if (el.id === id) {
          this.tags.splice(i, 1);
        }
      })
    },
    newId () {
      if (this.tags.length) {
        return this.tags[this.tags.length - 1].id + 1;
      } else {
        return 0;
      }
    },
    async createTag() {
      let inputValue = this.inputValue;
      if (inputValue && this.tags.length !== 9) {
        this.tags.push({
          id: await this.newId(),
          post_id: await this.GETNEW_ID,
          name: inputValue
        })
      }
      this.inputVisible = false;
      this.inputValue = '';
    }
  }
}
</script>

<style lang="scss" scoped>
  .create {
    display: flex;
    flex-direction: column;
    gap: 10px;

    font-family: sans-serif;

    &__input {
      font-size: 14px;
    }

    &__textarea {
      &:deep(.el-textarea__inner) {
        font-family: sans-serif!important;
        font-size: 14px;
      }
    }

    &__tags {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
  }
</style>
