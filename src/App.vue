<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='sass'>
	// @import "./assets/pub/mobile-mixin/_Response.scss"
	@import "./assets/pub/_mobile-response.scss"
	body
		background-image: linear-gradient(to top, #eeeeee, #f9f9f9);
</style>
