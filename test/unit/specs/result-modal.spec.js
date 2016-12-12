import Vue from 'vue'
import ResultModal from 'src/components/shared/result-modal'
import store from 'src/store'

var vm = new Vue({
  template: '<result-modal></result-modal>',
  components: { ResultModal },
  store
})

describe('result-modal.vue', () => {
  it('mount result-modal successfully', () => {
    var $mount = vm.$mount()
    expect($mount).to.be.ok
  })
})
