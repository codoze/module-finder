export const RESET = (state) => {
  state.results = null
  state.selectedItem = null
  state.page = null
  state.keyword = null
  state.loading = false
  state.notFound = false
}

export const SET_DATA = (state, { data, keyword, page, notFound = false }) => {
  state.results = data
  state.keyword = keyword
  state.page = page
  state.notFound = notFound
  state.loading = false
}

export const SET_SELECTED_ITEM = (state, data) => {
  state.selectedItem = data
}

export const LOADING = (state) => {
  state.loading = true
}
