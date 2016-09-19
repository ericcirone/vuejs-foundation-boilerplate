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
      msg: 'Hello Vue 2.0!'
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
