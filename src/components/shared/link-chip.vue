<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../style/variables";
</style>

<template>
    <a :href="href" class="button tiny round" role="button" target="_blank" rel="noopener">
      <i class="material-icons md-18">&#xE157;</i>
      <span v-if="text">{{text}}</span>
    </a>
</template>

<script>
export default {
  props: ['href', 'text']
}
</script>
