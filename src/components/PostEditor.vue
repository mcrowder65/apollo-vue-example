<template>
  <div>
    <md-card class="card">
      <md-field>
        <label>Title</label>
        <md-input v-model="localTitle" />
      </md-field>
      <br />
      <md-field>
        <label>Body</label>
        <md-textarea v-model="localBody" md-autogrow />
      </md-field>
      <DeletePost v-bind:id="id" />
    </md-card>
  </div>
</template>

<script>
import DeletePost from "./DeletePost";
export default {
  name: "PostEditor",
  components: { DeletePost },
  props: {
    title: String,
    body: String,
    id: String
  },
  data: props => {
    return {
      localTitle: props.title,
      localBody: props.body
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  margin: 10px;
  padding: 10px;
}
</style>
