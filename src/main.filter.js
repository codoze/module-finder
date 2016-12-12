export default {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  },

  date: function (value) {
    if (!value) return ''
    value = new Date(value)
    return value.toLocaleString()
  }
}
