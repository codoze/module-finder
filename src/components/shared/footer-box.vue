<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../style/variables";
.footer-box {
  background-color: $palatinal-blue;
  padding: 20px;
  &--content {
    .copy {
      color: white;
      margin: 0;
      font-size: 12px;
      line-height: 20px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: bold;
    }
  }
}
</style>

<template>
<section class="footer-box">
  <div class="view-container fx-col fx-center-center">
    <div class="footer-box--content fx-row fx-start-center">
      <span class="copy">built with</span>
      <link-chip href="https://vuejs.org" text="vuejs"></link-chip>
      <link-chip href="http://sass-lang.com/" text="sass"></link-chip>
      <link-chip href="https://webpack.js.org/" text="webpack"></link-chip>
      <link-chip href="https://karma-runner.github.io/1.0/index.html" text="karma"></link-chip>
      <link-chip href="http://chaijs.com/" text="chaijs"></link-chip>
    </div>
    <div class="footer-box--content fx-row fx-start-center">
      <span class="copy">available at</span>
      <link-chip href="https://github.com/mouafa/module-finder" text="github"></link-chip>
    </div>
  </div>
</section>
</template>

<script>
import LinkChip from 'components/shared/link-chip'

export default {
  components: {
    LinkChip
  }
}
</script>
