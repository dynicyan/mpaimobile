<template lang='pug'>
  <div class="mp-wrapper">
    <h1 class='mp-logo'>
      <img src="../assets/logo.svg">
    </h1>
    <section class="mp-pic">
      <img src="../assets/group-9.svg">
    </section>
    <section class="mp-subtitle">
      <span>为获得更好的使用体验</span>
      <p class='subdet'>请在PC端访问<strong>creator.miaopai.com</strong></p>
    </section>
    <section class='mp-info'>
      <ul>
        li(v-for='item in minfo')
          i(:class="['icon-' + item.name]")
          .mp-Cnt
            p.mp-infoTitle {{item.title}}
            p.mp-infoS {{item.info}}
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      minfo: [{
        name: 'net',
        title: '发布管理',
        info: '重构视频长传体系 降低发布成本 提高推荐效率'
      },
      {
        name: 'laptop',
        title: '流量倾斜',
        info: '秒拍+微博双平台流量扶持 优质内容瞬间引爆'
      },
      {
        name: 'mbag',
        title: '商业支持',
        info: '广告分成内容植入 流量变现 秒拍营销团队帮你赚钱'
      },
      {
        name: 'present',
        title: '数据管理 ',
        info: '及时复盘数据 优化运营策略'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  // @import "../assets/pub/_rem-calc.scss"
  @import "../assets/scss/reset";
  $imgSrc: (net,'../assets/networking.svg'),(laptop,'../assets/laptop.svg'),(mbag,'../assets/money-bag.svg'),(present,'../assets/presentation.svg');
  .mp-wrapper
    width: 100%;
    &:after
      content: '';
      position: absolute
      width: rem-calc(242)
      height: rem-calc(356)
      right: 0
      top: rem-calc(42)
      background: url(../assets/combined-shape.svg)
      background-size: 100% 100%
    &:before
      content: '';
      position: absolute;
      width: rem-calc(256);
      height: rem-calc(256);
      left: rem-calc(-48);
      top: rem-calc(-80);
      border-radius: 100%;
      background-image: linear-gradient(to top, #f0f0f0, #f5f5f5)
  .mp-logo
    width: rem-calc(206)
    height: rem-calc(64)
    margin: rem-calc(48) auto 0
    img
      width: 100%
      height: auto
  .mp-pic
    width: rem-calc(364)
    height: rem-calc(244)
    margin: rem-calc(80) auto 0
    position: relative
    img
      width: 100%
      height: auto
    &:before
      content: '';
      position: absolute;
      width: rem-calc(112)
      height: rem-calc(112)
      border-radius: 100%
      left: rem-calc(-152)
      bottom: rem-calc(-40)
      background-image: linear-gradient(to top, #fff, rgba(255,255,255, 0.4), rgba(255,255,255, 0.2))
  .mp-subtitle
    text-align: center
    margin-top: rem-calc(44)
    span
      display: inline-block
      color: #888
      font-size: rem-calc(24)
      line-height: rem-calc(32)
      font-weight: normal
      position: relative
      &:before,
      &:after
        content: ''
        position: absolute
        width: rem-calc(80)
        height: rem-calc(3)
        top: rem-calc(15)
        background-color: #e1e1e1
      &:before
        left: rem-calc(-96)
      &:after
        right: rem-calc(-96)
    .subdet
      color: #888
      margin-top: rem-calc(12)
      line-height： rem-calc(48)
      font-size： rem-calc(32)
      strong
        color: #23232b
        margin-left: rem-calc(8)
  .mp-info
    width: 100%
    ul 
     width: 100%
     clear: both
     margin-top: rem-calc(80)
     li 
      width: rem-calc(374)
      padding: 0 rem-calc(64) 0 rem-calc(208)
      height: rem-calc(248)
      margin: 0 auto rem-calc(32)
      border-radius: rem-calc(6)
      background-color: #fff
      position: relative
      display: table
      .mp-Cnt
        display: table-cell
        vertical-align: middle
        .mp-infoTitle
          line-height: rem-calc(64)
          font-size: rem-calc(40)
          color: #23232b
      i
        display: inline-block
        width: rem-calc(96)
        height: rem-calc(96)
        position: absolute
        left: rem-calc(64)
        top: rem-calc(76)
      @each $name, $src in $imgSrc
        .icon-#{$name}
          background-image: url($src);
          background-size: 100% 100%;
</style>
