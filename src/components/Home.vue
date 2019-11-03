<template>
  <div id="Home" class="Whoiscleaning">
      <div class="RoundButton shadow">
      <router-link to="/SignIn">
        <h1 class="text-center">{{msg}}</h1>
      
      </router-link>
      </div>
  </div>
</template>

<script>
export default {
  /*eslint-disable */
  name: "Home",
  data() {
    return {
      msg: "Whos is Cleaning?"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
.Whoiscleaning {
  align-items: center;
}
.shadow{
   -moz-box-shadow: 10px 2px 4px rgba(0, 0, 0,0.5);
  -webkit-box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
  box-shadow: 10px 20px 40px bisque;
}
a {
  text-decoration: none;
}
.RoundButton {
  background-color:#F9AA33;
  border-radius: 50%;
  width: 400px;
  height: 400px;
  display: flex;
  align-content: center;
  align-items: center;
  margin-top:130px;
}
</style>
