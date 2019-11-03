<template>
  <div id="SignUp">
    <div class="header">
    </div>
    <div class="container">
      <h1>Sign Up</h1>
      <div class="login d-flex flex-column">
        <input type="text" class="mb-3 form-control" v-model="address" placeholder="House" />
        <input type="text" class="mb-3 form-control" v-model="email" placeholder="E-mail" />
        <input type="password" class="mb-3 form-control" v-model="password" placeholder="Password" />
        <button @click="signUp" class="btn btn-success">Sign Up</button>
        <span>
          or go back to
          <router-link to="/SignIn"></router-link>
        </span>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
/* eslint-disable */
import firebase from 'firebase';
export default {
  name: "Schedule",
  data() {
    return {
        address :'',
        email :'',
        password :''
    };
  },
  methods: {
    signUp: function() {
    firebase.auth().createNewUser(this.address,this.username,this.password).then(
        function(user){
            alert('Your account has been created. Now you can login!')
        },
        function(err){
            alert('There was an error<br>'+err.messege)
        }
    );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>