<template>
  <div>
    {{ GET_POSTS }}
  </div>
</template>

<script>
import { GET_POSTS } from "../graphql/queries";

export default {
  name: "Posts",
  apollo: {
    GET_POSTS
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
