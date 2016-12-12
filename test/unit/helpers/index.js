import Vue from 'vue'

export function getRenderedText ({component, selector, propsData, attribute = 'textContent'}) {
  const Ctor = Vue.extend(component)
  const vm = new Ctor({ propsData }).$mount()
  if (selector) {
    return vm.$el.querySelector(selector)[attribute]
  } else {
    return vm.$el.getAttribute(attribute)
  }
}

// helper for testing action with expected mutations
export const testAction = (action, payload, state, expectedMutations, done) => {
  let count = 0

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count]
    expect(mutation.type).to.equal(type)
    if (payload) {
      expect(mutation.payload).to.deep.equal(payload)
    }
    count++
    if (count >= expectedMutations.length) {
      done()
    }
  }

  // call the action with mocked store and arguments
  action({ commit, state }, payload)

  // check if no mutations should have been dispatched
  if (expectedMutations.length === 0) {
    expect(count).to.equal(0)
    done()
  }
}
