import * as mutations from 'src/store/store.mutations'
import { state as source } from 'src/store/store.state'

import data from '../helpers/dummy-data'
const { RESET } = mutations

describe('mutations', () => {
  it('RESET correctly', () => {
    const state = Object.assign({}, source)
    state.page = 1
    state.loading = true
    RESET(state)
    expect(state).to.deep.equal(source)
  })
})

const { SET_DATA } = mutations

describe('mutations', () => {
  it('SET_DATA with data correctly', () => {
    const state = Object.assign({}, source)
    SET_DATA(state, { data, keyword: 'hapi.js', page: 1 })
    expect(state.results).to.deep.equal(data)
    expect(state.keyword).to.equal('hapi.js')
    expect(state.page).to.equal(1)
    expect(state.notFound).to.equal(false)
  })
})

describe('mutations', () => {
  it('SET_DATA notFound correctly', () => {
    const state = Object.assign({}, source)
    SET_DATA(state, { data: null, keyword: 'hapi.js', page: 1, notFound: true })
    expect(state.results).to.equal(null)
    expect(state.keyword).to.equal('hapi.js')
    expect(state.page).to.equal(1)
    expect(state.notFound).to.equal(true)
  })
})

const { SET_SELECTED_ITEM } = mutations

describe('mutations', () => {
  it('SET_SELECTED_ITEM correctly', () => {
    const state = Object.assign({}, source)
    SET_SELECTED_ITEM(state, data[2])
    expect(state.selectedItem).to.deep.equal(data[2])
    expect(state.notFound).to.equal(false)
  })
})

const { LOADING } = mutations

describe('mutations', () => {
  it('LOADING correctly', () => {
    const state = Object.assign({}, source)
    expect(state.loading).to.equal(false)
    LOADING(state)
    expect(state.loading).to.equal(true)
  })
})
