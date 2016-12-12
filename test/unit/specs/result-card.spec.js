import Vue from 'vue'
import ResultCard from 'src/components/shared/result-card'
import store from 'src/store'

var vm = new Vue({
  template: '<result-card></result-card>',
  components: { ResultCard },
  store
})

describe('result-card.vue', () => {
  it('mount result-card successfully', () => {
    var $mount = vm.$mount()
    expect($mount).to.be.ok
  })
})
