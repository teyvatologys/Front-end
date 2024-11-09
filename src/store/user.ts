import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import { exchangeUserInfo, login, signIn } from '../utils/apis/user'

export interface UserState {
  isAuthenticated: boolean
  avatarLink?: string
  username?: string
  email?: string
}

const initialState: UserState = {
  isAuthenticated: !!Cookies.get('jwtToken'),
  avatarLink: undefined,
  username: undefined,
  email: undefined
}


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false
      Cookies.remove('jwtToken')
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      const { token, avatarLink } = action.payload
      state.isAuthenticated = true
      state.avatarLink = avatarLink ?? undefined
      if (token) 
        Cookies.set('jwtToken', token)
    })

    builder.addCase(login.rejected, (state) => {
      state.isAuthenticated = false
      console.log('Login failed')
    })

    builder.addCase(signIn.fulfilled, (state, action) => {
      const { token, avatarLink } = action.payload
      state.isAuthenticated = true
      state.avatarLink = avatarLink ?? undefined
      if (token) 
        Cookies.set('jwtToken', token)
    })

    builder.addCase(signIn.rejected, (state) => {
      state.isAuthenticated = false
      console.log('Sign in failed')
    })

    builder.addCase(exchangeUserInfo.fulfilled, (state, action) => {
      const { token, avatarLink } = action.payload
      state.isAuthenticated = true
      state.avatarLink = avatarLink ?? undefined
      if (token) 
        Cookies.set('jwtToken', token)
    })

    builder.addCase(exchangeUserInfo.rejected, (state) => {
      state.isAuthenticated = false
      console.log('Exchange user info failed')
    })
  }
})

export const { logout } = userSlice.actions
export default userSlice.reducer