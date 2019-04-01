<template>
  <div>
    <md-button @click="() => setAdding(true)">Add post</md-button>
    <div v-if="adding === true">
      <md-card>
        <PostEditor v-bind:submit="addPost" />
        <md-button @click="() => setAdding(false)">Cancel adding</md-button>
      </md-card>
    </div>
  </div>
</template>

<script>
import PostEditor from "./PostEditor";
import { CREATE_POST } from "../graphql/mutations";
import { GET_POSTS } from "../graphql/queries";

export default {
  name: "AddPost",
  components: {
    PostEditor
  },
  data: () => {
    return {
      adding: false
    };
  },

  methods: {
    setAdding(adding) {
      this.adding = adding;
    },
    addPost(title, body) {
      this.$apollo.mutate({
        mutation: CREATE_POST,
        variables: {
          title,
          body
        },
        update: (cache, { data: { createPost } }) => {
          cache.writeQuery({ query: GET_POSTS, data: { posts: createPost } });
        }
      });
      this.setAdding(false);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
