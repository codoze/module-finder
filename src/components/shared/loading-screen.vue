<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../style/variables";
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: linear-gradient(rgba(255,255,255,.4) 0%, rgba(255,255,255,1) 100%);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>

<template>
  <transition name="fade">
    <section v-if="isLoading" class="loading-screen fx-col fx-center-center">
      <spinner></spinner>
    </section>
  </transition>
</template>

<script>
import Spinner from 'components/shared/spinner'

import { mapGetters } from 'vuex'

export default {
  components: {
    Spinner
  },
  computed: mapGetters([
    'isLoading'
  ])
}
</script>
