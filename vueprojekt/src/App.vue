<template>
  <body id="app" class="main">
    <Header></Header>
    <router-view></router-view>
  </body>
</template>

<script>

//import Header from "@/components/Header.vue";
//import PostPage from "@/components/PostPage";
//import Login from "@/components/Login";

import Header from "@/components/Header";
export default {
  name: 'App',
  components: {
    Header,
    //Header
  }
}
</script>

<style>

.main{

}

* {
  font-family: 'Roboto Slab', serif;
  outline: none;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

}
body {
  background-color: #0277bd;
  color: #263238;
}

a {
  color: #40c4ff;
}
</style>
