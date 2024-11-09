import { configureStore } from '@reduxjs/toolkit'
import userReducer, { UserState } from './user'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

interface RootState {
  user: UserState
}

export const store = configureStore({
  reducer: {
    user: userReducer
  }
})

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
