<template>
  <div>
    <md-card class="card">
      <form>
        <md-field>
          <label>Title</label>
          <md-input v-model="localTitle" />
        </md-field>
        <br />
        <md-field>
          <label>Body</label>
          <md-textarea v-model="localBody" md-autogrow />
        </md-field>
      </form>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "PostEditor",
  props: {
    title: String,
    body: String
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
