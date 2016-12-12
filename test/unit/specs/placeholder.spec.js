import Vue from 'vue'
import Placeholder from 'src/components/shared/placeholder'
import store from 'src/store'

var vm = new Vue({
  template: '<placeholder></placeholder>',
  components: { Placeholder },
  store
})

describe('placeholder.vue', () => {
  it('mount placeholder successfully', () => {
    var $mount = vm.$mount()
    expect($mount).to.be.ok
  })
})
