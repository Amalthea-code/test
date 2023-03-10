<template>
  <div class="create">
    <Input placeholder="Название" v-model="name"></Input>
    <Input type="textarea" rows="2" placeholder="Описание" v-model="description"></Input>
    <div class="create__interface">
      <div class="create__tegs">
        <Input placeholder="Новый тег" v-model="input"></Input>
        <Button>Добавить тег</Button>
      </div>
      <Button
        @click="createPost"
      >
        Создать пост
      </Button>
    </div>
    
  </div>
</template>

<script>
import { Button, Input } from 'element-ui';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CreateView',
  components: {
    Button,
    Input
  },
  data () {
    return {
      id: 0,
      name: '',
      description: '',
      tags: []
    }
  },
  computed: {
    ...mapGetters({
      GETNEW_ID: 'posts/GETNEW_ID'
    })
  },
  methods: {
    ...mapActions({
      fetchPosts: 'posts/fetchPosts',
      setPost: 'posts/setPost',
      getId: 'posts/getId'
    }),
    async createPost () {
      this.setPost(
        {
          id: await this.GETNEW_ID,
          name: "Начало",
          description: "Я пытался раскатать на Vite + TS",
          tags: []
        }
      )
    }
  },
  mounted () {
    this.fetchPosts()
  }
}
</script>
