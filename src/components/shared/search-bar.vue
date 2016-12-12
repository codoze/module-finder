<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../style/variables";
.search-bar {
    // margin: 20px 100px;
    &--input {
        position: relative;
        vertical-align: top;
        border-radius: 2px;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16),0 0 0 1px rgba(0,0,0,0.08);
        transition: box-shadow 200ms cubic-bezier(0.4, 0.0, 0.2, 1);
        input {
            border: none;
            height: 44px;
            padding: 8px 10px 8px 44px;
        }
        i.search-icon {
            top: 10px;
            left: 10px;
            position: absolute;
            color: $color-primary;
        }
        .reset-btn {
            padding: 5px;
            top: 5px;
            right: 5px;
            position: absolute;
            cursor: pointer;
            color: $mid-gray;
            transition: 300ms;
            &:hover {
              color: $palatinal-blue;
            }
        }
    }
}
</style>

<template>
<section class="search-bar">
    <div class="form search-bar--input">
      <i class="material-icons search-icon">&#xE8B6;</i>
      <input @keyup.enter="search" v-model="keyword" type="text" name="search" placeholder="Search for modules ...">
      <i v-if="keyword" @click="clear" class="material-icons reset-btn">&#xE5CD;</i>
    </div>
</section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    ...mapActions([
      'getData',
      'reset'
    ]),
    search () {
      this.getData({keyword: this.keyword})
    },
    clear () {
      this.keyword = ''
      this.reset()
    }
  }
}
</script>
