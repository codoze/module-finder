import Vue from 'vue'
import LoadingScreen from 'src/components/shared/loading-screen'
import store from 'src/store'

var vm = new Vue({
  template: '<loading-screen></loading-screen>',
  components: { LoadingScreen },
  store
})

describe('loading-screen.vue', () => {
  it('mount loading-screen successfully', () => {
    var $mount = vm.$mount()
    expect($mount).to.be.ok
  })
})
