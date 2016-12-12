<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../style/variables";

.card-footer{
  margin-top: 6px;
padding-top: 4px;
border-top: $porcelaine 1px solid;
  &--item{
    margin: 0 6px;
    i, span {
      color: $mid-gray;
      vertical-align: middle;
      padding: 0 2px;
    }
  }
  &__date{
    min-width: 120px;
  }
}


</style>

<template>
  <section v-if="data" class="card-footer fx-row fx-space-between-center">
      <div class="card-footer--item card-footer__date flex">
        <i class="material-icons md-18">&#xE878;</i><span>{{data.latest_release_published_at | date}}</span>
      </div>
      <div class="fx-row fx-space-between-center">
        <div v-show="data.language" class="card-footer--item">
          <i class="material-icons md-18">&#xE86F;</i><span>{{data.language}}</span>
        </div>

        <div class="card-footer--item">
          <i class="material-icons md-18">&#xE8D0;</i><span>{{data.stars}}</span>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  props: ['data'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
