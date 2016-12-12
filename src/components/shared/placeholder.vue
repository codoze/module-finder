<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../style/variables";
.placeholder {
  &--icon {
    font-size: 200px;
  }
  &--text {

  }
}
</style>

<template>
    <div class="placeholder fx-col fx-start-center">
      <i class="material-icons placeholder--icon">{{icon}}</i>
      <h6 class="placeholder--text">{{text}}</h6>
    </div>
</template>

<script>
export default {
  props: ['icon', 'text']
}
</script>
