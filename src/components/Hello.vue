<template>
  <div class="type-b">
    <h1 class="h1">{{ msg }}</h1>
    <h2>你好，我是移动新朋友，喵～</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  // @import "../assets/scss/reset"
  @import "../assets/scss/px2rem.scss"
  .h1
    font-size: px2rem(36)
  .type-b
    width: px2rem(500)
    height: px2rem(500)
    background: #ffd600
    margin: 0 auto
    h2
      font-size: px2rem(24)
</style>
