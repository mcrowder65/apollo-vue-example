<template>
  <div>
    <md-card>
      <PostEditor v-bind:title="title" v-bind:body="body" v-bind:id="id" />
      <DeletePost v-bind:id="id" />
    </md-card>
  </div>
</template>

<script>
import PostEditor from "./PostEditor";
import DeletePost from "./DeletePost";

export default {
  name: "Post",
  components: { PostEditor, DeletePost },
  props: {
    title: String,
    body: String,
    id: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
