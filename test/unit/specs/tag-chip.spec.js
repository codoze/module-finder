import Vue from 'vue'
import TagChip from 'src/components/shared/tag-chip'
import store from 'src/store'

var vm = new Vue({
  template: '<tag-chip></tag-chip>',
  components: { TagChip },
  store
})

describe('tag-chip.vue', () => {
  it('mount tag-chip successfully', () => {
    var $mount = vm.$mount()
    expect($mount).to.be.ok
  })
})
