<template>
  <main>
    <home :tips="tips"></home>
    <!-- <router-view></router-view>   -->
  </main>
</template>
<script>
  import Home from './pages/Home.vue'
  import * as Mock from './mock/mock_webtips.json'

  export default {
    components: {
      Home
    },
    data () {
      return {
        tips: {}
      }
    },
    mounted () {
      this.fetchTips()
    },
    methods: {
      fetchTips () {
        /* window.fetch(Constants.APIS.WEBTIPS)
          .then(res => {
            return res.json()
          })
          .then(jsonObj => {
            this.tips = jsonObj.items
          })*/
        this.tips = Mock.items
      }
    }
  }
</script>
