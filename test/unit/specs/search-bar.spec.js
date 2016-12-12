import Vue from 'vue'
import SearchBar from 'src/components/shared/search-bar'
import store from 'src/store'

var vm = new Vue({
  template: '<search-bar></search-bar>',
  components: { SearchBar },
  store
})

describe('search-bar.vue', () => {
  it('mount search-bar successfully', () => {
    var $mount = vm.$mount()
    expect($mount).to.be.ok
  })
})
