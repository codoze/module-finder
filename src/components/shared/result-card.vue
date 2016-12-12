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
box-shadow: $shadow-z0;
transition: 300ms;
&:hover {
box-shadow: $shadow-z1;
}
&--header {
  min-height: 40px;
}
&--title{
  margin: 0;
  padding-right: 10px;
  text-transform: capitalize;
  color: $color-primary;
}
&--links{
  margin-bottom: 26px;
  h6 {
    margin: 0;
  }
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
      <tag-ship :text="data.platform"></tag-ship>
    </div>

    <p>{{data.description}}</p>

    <div v-if="expand" class="result-card--links fx-row fx-start-center">
      <h6>links:</h6>
      <link-chip :href="data.homepage" text="homepage"></link-chip>
      <link-chip :href="data.package_manager_url" text="package manager"></link-chip>
      <link-chip :href="data.repository_url" text="repository"></link-chip>
    </div>

    <slot></slot>

    <tag-ship v-if="expand" v-for="tag in data.keywords" :text="tag"></tag-ship>

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
  props: ['data', 'expand'],
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
