<template>
  <div>
    <AddPost />
    <div v-if="$apollo.loading">Loading...</div>
    <div v-for="post in posts" v-bind:key="post.id">
      <Post
        v-bind:id="post.id"
        v-bind:title="post.title"
        v-bind:body="post.body"
      />
    </div>
  </div>
</template>

<script>
import { GET_POSTS } from "../graphql/queries";
import Post from "./Post";
import AddPost from "./AddPost";

export default {
  name: "Posts",
  components: { AddPost, Post },
  apollo: {
    posts: GET_POSTS
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
