<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <md-card>
      hello
    </md-card>
    <li>
      <a
        href="https://github.com/vuejs/awesome-vue"
        target="_blank"
        rel="noopener"
        >awesome-vue</a
      >
    </li>
  </div>
</template>

<script>
import { MdCard } from "vue-material/dist/components";

export default {
  name: "HelloWorld",

  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
