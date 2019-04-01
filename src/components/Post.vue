<template>
  <PostEditor v-bind:title="title" v-bind:body="body" v-bind:id="id" />
</template>

<script>
import PostEditor from "./PostEditor";
export default {
  name: "Post",
  components: { PostEditor },
  props: {
    title: String,
    body: String,
    id: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
