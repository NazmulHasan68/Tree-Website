import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../../src/store/features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})