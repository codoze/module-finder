export function date (value) {
  if (!value) return ''
  let d = new Date(value)
  // return value.toLocaleString()
  return `${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`
}
