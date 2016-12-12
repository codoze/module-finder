import Vue from 'vue'
import Spinner from 'src/components/shared/spinner'
import store from 'src/store'

var vm = new Vue({
  template: '<spinner></spinner>',
  components: { Spinner },
  store
})

describe('spinner.vue', () => {
  it('mount spinner successfully', () => {
    var $mount = vm.$mount()
    expect($mount).to.be.ok
  })
})
