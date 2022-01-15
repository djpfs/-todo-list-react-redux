export enum actionTypes {
  TOGGLE_THEME = 'TOGGLE_THEME',
}

export const getCurrentTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('theme')
    if (typeof storedPrefs === 'string') {
      return storedPrefs
    }

    const userMedia = window.matchMedia(`(prefers-color-scheme: dark)`)
    if (userMedia.matches) {
      return 'dark'
    }
  }

  return 'light'
}

export const changeTheme = () => (dispatch: any) => {
  const root = window.document.documentElement
  const isDark = getCurrentTheme() === 'dark'

  root.classList.remove(isDark ? 'dark' : 'light')
  root.classList.add(isDark ? 'light' : 'dark')

  localStorage.setItem('theme', isDark ? 'light' : 'dark')
  dispatch({ type: actionTypes.TOGGLE_THEME })
}
