import * as actions from 'src/store/store.actions'
import data from '../helpers/dummy-data'
import {testAction} from '../helpers'
import { state } from 'src/store/store.state'

describe('actions', () => {
  const { setSelectedItem } = actions

  it('setSelectedItem correctly', done => {
    testAction(setSelectedItem, data[2], state, [
      { type: 'SET_SELECTED_ITEM', payload: data[2] }
    ], done)
  })

  const { resetSelectedItem } = actions

  it('resetSelectedItem correctly', done => {
    testAction(resetSelectedItem, null, state, [
      { type: 'SET_SELECTED_ITEM', payload: null }
    ], done)
  })

  const { reset } = actions

  it('reset correctly', done => {
    testAction(reset, null, state, [
      { type: 'RESET', payload: null }
    ], done)
  })

  const { getData } = actions

  it('getData correctly', done => {
    testAction(getData, { data: null, keyword: 'hapi.js', page: 1, notFound: true }, state, [
      { type: 'LOADING' }
      // { type: 'SET_DATA', payload: { data: null, keyword: 'hapi.js', page: 1, notFound: true } }
    ], done)
  })
})
