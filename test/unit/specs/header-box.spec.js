import Vue from 'vue'
import HeaderBox from 'src/components/shared/header-box'
import store from 'src/store'

var vm = new Vue({
  template: '<header-box></header-box>',
  components: { HeaderBox },
  store
})

describe('header-box.vue', () => {
  it('mount header-box successfully', () => {
    var $mount = vm.$mount()
    expect($mount).to.be.ok
  })
})
