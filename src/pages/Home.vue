<template>
  <main class="b-main">
    <section class="b-links">
      <h1>Webtips</h1>
      <ul>
        <li v-for="item in tips">
          <tip-link :tip="item"></tip-link>
        </li>
      </ul>
    </section>
    <section class="b-description">
      <tip-description></tip-description>
    </section>
  </main>
</template>

<script>
  import TipLink from '../blocks/TipLink.vue'
  import TipDescription from '../blocks/TipDescription.vue'
  export default {
    name: 'home',
    components: {
      TipLink,
      TipDescription
    },
    props: {
      tips: {}
    }
  }
</script>

<style scoped >
</style>
