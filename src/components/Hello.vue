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
  @import "../assets/scss/reset"
  // @import "../assets/pub/_rem-calc.scss"
  .h1
    font-size: rem-calc(36)
  .type-b
    width: rem-calc(500)
    height: rem-calc(500)
    background: #ffd600
    margin: 0 auto
    h2
      font-size: rem-calc(24)
</style>
