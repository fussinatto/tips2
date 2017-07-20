<template>
    <p>{{description}}</p>
</template>
<script>
  import store from '../store/store'

  export default {
    name: 'tip-description',
    store,
    computed: {
      description () {
        return (this.$store.getters.tip).description
      }
    }
  }
</script>

<style scoped>
  
</style>