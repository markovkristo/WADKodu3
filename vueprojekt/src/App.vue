<template>
  <body id="app" class="main">
    <router-view></router-view>
  </body>
</template>

<script>

export default {
  name: 'App'
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
