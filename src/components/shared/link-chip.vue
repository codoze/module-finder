<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../style/variables";
.link-chip {
  margin: 0 4px;
  box-shadow: $shadow-z1;

  font-size: 18px;
  padding: 4px 8px;
  min-height: 0;
  line-height: 0;
  font-size: 14px;
  // border-radius: 56px;
  transition: 200ms;
  text-transform: capitalize;
  i,
  span {
    vertical-align: middle;
  }
  &:hover {
    color: $color-primary;
    // background-color: white;
    box-shadow: $shadow-z2;
  }
}
</style>

<template>
    <a :href="href" class="link-chip button tiny round" role="button" target="_blank" rel="noopener">
      <i class="material-icons md-18">&#xE157;</i>
      <span v-if="text">{{text}}</span>
    </a>
</template>

<script>
export default {
  props: ['href', 'text']
}
</script>
