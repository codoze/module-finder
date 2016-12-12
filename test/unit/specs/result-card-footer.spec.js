import Vue from 'vue'
import CardFooter from 'src/components/shared/result-card-footer'
import store from 'src/store'

var vm = new Vue({
  template: '<card-footer></card-footer>',
  components: { CardFooter },
  store
})

describe('result-card-footer.vue', () => {
  it('mount result-card-footer successfully', () => {
    var $mount = vm.$mount()
    expect($mount).to.be.ok
  })
})
