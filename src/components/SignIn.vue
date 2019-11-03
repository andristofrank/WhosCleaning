<template>
  <div id="SignIn">
    <div class="header">
    </div>
    <div class="container">
      <h1>Sign In</h1>
      <div class="login d-flex flex-column">
        <input type="text" class="mb-3 form-control" placeholder="E-mail" />
        <input type="password" class="mb-3 form-control" placeholder="Password" />
        <button @click="signin" class="btn btn-success float-right mb-3">Log In</button>
        <p>
          You don`t have an account? You can
          <router-link to="/SignUp">create one</router-link>
        </p>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "SignIn",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods : {
      signin : function(){
          this.$router.replace('schedule');
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>