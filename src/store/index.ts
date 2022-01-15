import { configureStore } from '@reduxjs/toolkit'
import reducers from '../store/reducers/index'

export const store = configureStore({
  reducer: reducers,
  preloadedState: {},
})
