<template>
<div id="app">
    <div class="row">
        <div class="small-12 columns text-center">
            <img src="./assets/logo.png">
            <h1>{{ msg }}</h1>
            <comp-a></comp-a>
            <foundation></foundation>
        </div>
    </div>
</div>
</template>

<script>
import CompA from './components/CompA.vue'
import Foundation from './components/FoundationExample.vue'
export default {
    data() {
        return {
            msg: 'Vue.js 2 | Foundation 6 | Webpack 2'
        }
    },
    components: {
        CompA,
        Foundation
    },
    ready() {
        $(document).foundation();
    }
}
</script>

<style>
body {
    font-family: Helvetica, sans-serif;
}
</style>
