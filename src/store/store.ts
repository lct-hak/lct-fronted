import { configureStore } from '@reduxjs/toolkit'
import testReducer from './slices/tests'
import userReducer from './slices/user'

export const store = configureStore({
  reducer: {
    test: testReducer,
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch