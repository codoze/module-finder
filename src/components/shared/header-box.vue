<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../style/variables";
.header-box {
  background-color: $palatinal-blue;
  padding: 80px 20px 20px 20px;
  &--content {
    .subheading {
      color: white;
    }
  }
}
</style>

<template>
<section class="fx-row fx-center-center header-box">
  <div class="header-box--content fx-col view-container">
    <h2 class="subheading">Module Finder</h2>
    <search></search>
  </div>
</section>
</template>

<script>
import Search from 'components/shared/search-bar'

export default {
  components: {
    Search
  }
}
</script>
