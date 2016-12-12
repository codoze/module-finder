import Vue from 'vue'
import ResultList from 'src/components/shared/result-list'
import store from 'src/store'

var vm = new Vue({
  template: '<result-list></result-list>',
  components: { ResultList },
  store
})

describe('result-list.vue', () => {
  it('mount result-list successfully', () => {
    var $mount = vm.$mount()
    expect($mount).to.be.ok
  })
})
