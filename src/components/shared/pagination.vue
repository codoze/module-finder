<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../style/variables";
.pagination{
  width: 100%;
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>

<template>
  <nav v-if="hasResults" class="pagination pager">
    <ul>
      <li class="prev"><a @click="prevPage" v-show="hasPrevious" href="#">Previous</a></li>
      <li class="next"><a @click="nextPage" href="#">Next</a></li>
    </ul>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['href', 'text'],
  computed: mapGetters([
    'hasResults',
    'hasPrevious'
  ]),
  methods: {
    ...mapActions([
      'nextPage',
      'prevPage'
    ])
  }
}
</script>
