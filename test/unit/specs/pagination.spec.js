import Vue from 'vue'
import Pagination from 'src/components/shared/pagination'
import store from 'src/store'

var vm = new Vue({
  template: '<pagination></pagination>',
  components: { Pagination },
  store
})

describe('pagination.vue', () => {
  it('mount pagination successfully', () => {
    var $mount = vm.$mount()
    expect($mount).to.be.ok
  })
})
