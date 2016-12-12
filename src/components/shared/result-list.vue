<style scoped lang="scss">
.result-list {
  min-height: 100vh;
  &--item {
    cursor: pointer;
  }
  &--placeholder{
    padding: 40px 10px;
  }
}
</style>

<template>
  <section class="result-list fx-col">
    <placeholder v-if="empty" icon="search" text="try to find modules by keyword" class="result-list--placeholder"></placeholder>
    <placeholder v-if="notFound" icon="error_outline" text="it's empty here" class="result-list--placeholder"></placeholder>
    <result-card v-for="item in results" :data="item" class="result-list--item"></result-card>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import ResultCard from 'components/shared/result-card'
import Placeholder from 'components/shared/placeholder'

export default {
  components: {
    ResultCard,
    Placeholder
  },
  created: function () {
    this.getData({})
  },
  computed: mapGetters([
    'results',
    'empty',
    'notFound'
  ]),
  methods: {
    ...mapActions([
      'getData'
    ])
  }
}
</script>
