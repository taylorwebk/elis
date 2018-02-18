const domain = '127.0.0.1'
export const baseip = `http://${domain}/elis-api/`
export const openNewTab = (url) => {
  const win = window.open(url, '_blank')
  win.focus()
}
