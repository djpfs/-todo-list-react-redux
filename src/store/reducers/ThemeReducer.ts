import { getCurrentTheme } from '../actions/ThemeActions.'

export interface ThemeState {
  value: string
}

const initialState: ThemeState = {
  value: getCurrentTheme(),
}

export type ThemeAction = {
  type: string
}

const themeReducer = (
  state = initialState,
  action: ThemeAction = { type: '' }
) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
      }
    default:
      return state
  }
}

export default themeReducer
