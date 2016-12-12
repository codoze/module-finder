<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../style/variables";

.result-card {
background-color: white;
width: 100%;
margin-top: 10px;
padding: 20px;
border: $porcelaine 1px solid;
border-radius: 2px;
&--header {
  min-height: 40px;
}
&--title{
  margin: 0;
  padding-right: 10px;
  text-transform: capitalize;
  color: $color-primary;
}
}

</style>

<template>
  <section @click="open" class="result-card">
    <div class="result-card--header fx-row fx-space-between-center">
      <div class="fx-row fx-start-center">
        <h4 class="result-card--title">{{data.name}}</h4>
        <span class="label round primary">{{data.latest_release_number}}</span>
      </div>
      <link-chip :href="data.homepage" text="home"></link-chip>
    </div>

    <h6>{{data.description}}</h6>

    <tag-ship v-for="tag in data.keywords" :text="tag"></tag-ship>

    <slot name="versions"></slot>

    <card-footer :data="data"></card-footer>

  </section>
</template>

<script>
import LinkChip from 'components/shared/link-chip'
import CardFooter from 'components/shared/result-card-footer'
import TagShip from 'components/shared/tag-chip'

import { mapActions } from 'vuex'

export default {
  components: {
    LinkChip,
    CardFooter,
    TagShip
  },
  props: ['data'],
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    ...mapActions([
      'setSelectedItem'
    ]),
    open () {
      this.setSelectedItem(this.data)
    }
  }
}
</script>
