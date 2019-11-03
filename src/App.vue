<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.2.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.2.2/firebase-analytics.js"></script>
<template>
  <div id="app" class="centered">
    <router-view to="/" />
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
.centered{
  margin: auto;
  width:233px;
  height: 74px;
  vertical-align: middle;
  padding: 10px;
}
body {
  background-color: #344955;
}
.container{
 margin-top:120px;
}
</style>
