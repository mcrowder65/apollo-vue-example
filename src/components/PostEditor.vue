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
      <div v-if="submit">
        <md-button @click="() => submit(localTitle, localBody)"
          >Submit</md-button
        >
      </div>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "PostEditor",
  components: {},
  props: {
    title: String,
    body: String,
    id: String,
    submit: Function
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
