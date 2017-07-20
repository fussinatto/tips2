<template>
    <h4><a :href="tip.fields.title | getHash" v-on:click.stop="onTitleClick" class="b-tiplink">{{ tip.fields.title }}</a></h4>   
</template>
<script>
  import store from '../store/store'

  export default {
    name: 'tip-link',
    store,
    props: {
      tip: {}
    },
    methods: {
      onTitleClick (e) {
        this.$store.commit('tip', this.tip.fields)
      }
    },
    filters: {
      getHash (str) {
        return '#' + str.toLowerCase().replace(/\W/g, '-')
      }
    }
  }
</script>

<style scoped>  
</style>
