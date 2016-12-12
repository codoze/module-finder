<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../style/variables";

.card-footer{
  margin-top: 6px;
padding-top: 4px;
border-top: $porcelaine 1px solid;
  &--item{
    min-width: 60px;
    i, span {
      color: $mid-gray;
      vertical-align: middle;
      padding: 0 2px;
    }
  }
  &__date{
    min-width: 220px;
  }
}


</style>

<template>
  <section class="card-footer fx-row fx-space-between-center">
      <div class="card-footer--item card-footer__date flex">
        <i class="material-icons md-18">&#xE192;</i><span>{{data.latest_release_published_at | date}}</span>
      </div>
      <!-- <div class="card-footer--item">
        <i class="material-icons md-18">&#xE8E5;</i><span>{{data.rank}}</span>
      </div> -->
      <div class="card-footer--item">
        <i class="material-icons md-18">&#xE8D0;</i><span>{{data.stars}}</span>
      </div>
      <!-- <div class="card-footer--item">
        <i class="material-icons md-18">&#xE80D;</i><span>{{data.forks}}</span>
      </div> -->
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
