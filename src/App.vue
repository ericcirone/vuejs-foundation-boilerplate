<template>
  <div id="app">
      <div class="row">
          <div class="small-12 columns text-center">
              <img src="./assets/logo.png">
              <h1>{{ msg }}</h1>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Vue.js 2 | Foundation 6 | Webpack 2'
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
