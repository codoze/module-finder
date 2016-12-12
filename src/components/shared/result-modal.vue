<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../style/variables";

.result-modal {
  background: rgba(0,0,0,.5);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  &--card {
    margin: auto;
    max-width: 800px;
  }
}

.bounce-enter-active {
    animation: fade-in .3s;
    .result-modal--card {
      animation: slide-in .3s;
    }

}
.bounce-leave-active {

    animation: fade-out .3s;
    .result-modal--card {
      animation: slide-out .3s;
    }
  
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1
  }
}
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0
  }
}
@keyframes slide-in {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(200%);
  }
}
@keyframes slide-in {
  0% {
    transform: translateY(200%);
  }
  100% {
    transform: translateY(0);
  }
}

</style>

<template>
  <transition name="bounce">
    <section @click.self="close" v-if="show" class="result-modal fx-row fx-center-center">
      <result-card :data="data" class="result-modal--card"></result-card>
    </section>
  </transition>
</template>

<script>
// import LinkChip from 'components/shared/link-chip'
// import CardFooter from 'components/shared/result-card-footer'
// import TagShip from 'components/shared/tag-chip'
import ResultCard from 'components/shared/result-card'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'result-modal',
  components: {
    ResultCard
    // LinkChip,
    // CardFooter,
    // TagShip
  },
  props: ['data'],
  data () {
    return {
    }
  },
  computed: mapGetters({
    show: 'isSelectedItem',
    data: 'selectedItem'
  }),
  methods: {
    ...mapActions([
      'resetSelectedItem'
    ]),
    close () {
      this.resetSelectedItem()
    }
  }
}
</script>
