<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul v-for="user in users" :key="user.id">
      <li>
        <User :user="user"></User>
      </li>
    </ul>
  </div>
</template>

<script>
import User from "./User.vue";
export default {
  name: "UsersList",
  props: {
    msg: String
  },
  components: {
    User
  },
  data() {
    return {
      users: []
    };
  },
  create() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => (this.users = json));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
