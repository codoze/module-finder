const apiKey = 'aa72e2586e7572ee5ae80fcd4c01dc87'

export const getData = ({ commit, state }, { keyword, page = 1 }) => {
  window.fetch(`https://libraries.io/api/search?q=${keyword}&api_key=${apiKey}&per_page=${state.perPage}&page=${page}`)
  .then((res) => res.json())
  .then((data) => {
    if (data.length) {
      commit('SET_DATA', { data, keyword, page })
    } else {
      commit('SET_DATA', { data: null, keyword, page, notFound: true })
    }
  })
  .catch((err) => console.log('parsing failed', err))
}

export const setSelectedItem = ({ commit, state }, data) => {
  commit('SET_SELECTED_ITEM', data)
}

export const resetSelectedItem = ({ commit, state }) => {
  commit('SET_SELECTED_ITEM', null)
}

export const nextPage = ({ commit, dispatch, state }) => {
  commit('LOADING')
  dispatch('getData', { keyword: state.keyword, page: ++state.page })
}

export const prevPage = ({ commit, dispatch, state }) => {
  commit('LOADING')
  dispatch('getData', { keyword: state.keyword, page: --state.page })
}

export const reset = ({ commit }) => commit('RESET')
