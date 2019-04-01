<template>
  <div>
    <md-card>
      <PostEditor
        v-bind:title="title"
        v-bind:body="body"
        v-bind:id="id"
        v-bind:submit="update"
      />
      <DeletePost v-bind:id="id" />
    </md-card>
  </div>
</template>

<script>
import PostEditor from "./PostEditor";
import DeletePost from "./DeletePost";
import { UPDATE_POST } from "../graphql/mutations";
import { GET_POSTS } from "../graphql/queries";

export default {
  name: "Post",
  components: { PostEditor, DeletePost },
  props: {
    title: String,
    body: String,
    id: String
  },
  methods: {
    update(title, body) {
      this.$apollo.mutate({
        mutation: UPDATE_POST,
        variables: {
          id: this._props.id,
          title,
          body
        },
        update: (cache, { data: { updatePost } }) => {
          cache.writeQuery({ query: GET_POSTS, data: { posts: updatePost } });
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
