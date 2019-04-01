<template>
  <div>
    <md-button @click="onClick">Delete</md-button>
  </div>
</template>

<script>
import { GET_POSTS } from "../graphql/queries";
import { DELETE_POST } from "../graphql/mutations";

export default {
  name: "DeletePost",
  props: {
    id: String
  },
  methods: {
    onClick() {
      this.$apollo.mutate({
        mutation: DELETE_POST,
        variables: {
          id: this._props.id
        },
        update: (cache, { data: { deletePost } }) => {
          cache.writeQuery({ query: GET_POSTS, data: { posts: deletePost } });
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
