import { combineReducers } from '@reduxjs/toolkit'
import noteReducer from './NoteReducers'
import themeReducer from './ThemeReducer'

export default combineReducers({
  theme: themeReducer,
  notes: noteReducer,
})
