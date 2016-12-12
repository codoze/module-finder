import * as getters from 'src/store/store.getters'
import data from '../helpers/dummy-data'
import { state as source } from 'src/store/store.state'

describe('getters', () => {
  const { results } = getters

  it('results correctly', () => {
    const state = Object.assign({}, source)
    state.results = data
    expect(results(state)).to.deep.equal(data)
  })

  const { hasResults } = getters

  it('hasResults truthy', () => {
    const state = Object.assign({}, source)
    state.results = data
    state.notFound = false
    expect(hasResults(state)).to.equal(true)
  })

  it('hasResults falsy', () => {
    const state = Object.assign({}, source)
    state.results = null
    state.notFound = true
    expect(hasResults(state)).to.equal(false)
  })

  const { selectedItem } = getters

  it('selectedItem correctly', () => {
    const state = Object.assign({}, source)
    state.selectedItem = data[2]
    expect(selectedItem(state)).to.deep.equal(data[2])
  })

  const { isSelectedItem } = getters

  it('isSelectedItem truthy', () => {
    const state = Object.assign({}, source)
    state.selectedItem = data[2]
    expect(isSelectedItem(state)).to.equal(true)
  })

  it('isSelectedItem falsy', () => {
    const state = Object.assign({}, source)
    state.selectedItem = null
    expect(isSelectedItem(state)).to.equal(false)
  })

  const { isLoading } = getters

  it('isLoading truthy', () => {
    const state = Object.assign({}, source)
    state.loading = true
    expect(isLoading(state)).to.equal(true)
  })

  it('isLoading falsy', () => {
    const state = Object.assign({}, source)
    state.loading = false
    expect(isLoading(state)).to.equal(false)
  })

  const { hasPrevious } = getters

  it('hasPrevious truthy', () => {
    const state = Object.assign({}, source)
    state.page = 2
    expect(hasPrevious(state)).to.equal(true)
  })

  it('hasPrevious falsy', () => {
    const state = Object.assign({}, source)
    state.page = 1
    expect(hasPrevious(state)).to.equal(false)
  })

  const { notFound } = getters

  it('notFound truthy', () => {
    const state = Object.assign({}, source)
    state.notFound = true
    expect(notFound(state)).to.equal(true)
  })

  it('notFound falsy', () => {
    const state = Object.assign({}, source)
    state.notFound = false
    expect(notFound(state)).to.equal(false)
  })

  const { empty } = getters

  it('empty truthy', () => {
    const state = Object.assign({}, source)
    state.results = null
    state.keyword = null
    expect(empty(state)).to.equal(true)
  })

  it('empty falsy', () => {
    const state = Object.assign({}, source)
    state.results = data
    state.keyword = 'hapi'
    expect(empty(state)).to.equal(false)
  })
})
