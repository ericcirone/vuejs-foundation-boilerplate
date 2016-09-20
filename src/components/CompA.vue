<template lang="html">
    <div class="row">
        <div class="small-12 columns">
            <h3>
                {{textarea}}
            </h3>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
        textarea: "This is a component!"
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="sass" scoped>
    h3 {
        color: blue;
    }
</style>
