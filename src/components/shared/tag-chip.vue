<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../style/variables";
</style>

<template>
    <div class="chip">
      <span>{{text}}</span>
    </div>
</template>

<script>
export default {
  props: ['text']
}
</script>
