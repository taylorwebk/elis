const domain = 'grindhood.com'
export const baseip = `http://${domain}/elis-api/`
export const openNewTab = (url) => {
  const win = window.open(url, '_blank')
  win.focus()
}
