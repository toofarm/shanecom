import { EThemes } from 'types'

// Data shape
enum EThemeActions {
  SET_THEME = 'SET_THEME'
}

type Action = {
  type: EThemeActions;
  payload: EThemes
}

// Actions
export const setTheme = (payload : EThemes):Action => ({ type: EThemeActions.SET_THEME, payload })

// Reducer
const themeReducer = (state: EThemes = EThemes.SYSTEM, {type, payload}:Action) => {
  switch (type) {
  case EThemeActions.SET_THEME:
    return (state = payload)
  default:
    return state
  }
}

export default themeReducer