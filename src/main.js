import Vue from "vue";
import App from "./App.vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import VueApollo from "vue-apollo";
import "vue-material/dist/theme/default.css";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// HTTP connexion to the API
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: "http://localhost:4000/graphql"
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache
});

Vue.use(VueApollo);

Vue.use(VueMaterial);
Vue.config.productionTip = false;
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});
new Vue({
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
