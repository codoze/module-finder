export const results = state => state.results

export const hasResults = state => !!state.results && !state.notFound

export const selectedItem = state => state.selectedItem

export const isSelectedItem = state => !!state.selectedItem

export const isLoading = state => state.loading

export const hasPrevious = state => state.page > 1

export const notFound = state => state.notFound

export const empty = state => !state.notFound && !state.keyword
