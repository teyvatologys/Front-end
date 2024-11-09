import { createAsyncThunk } from '@reduxjs/toolkit'
import { oauthController, userController } from './controllers'
import { CreateUserRequestBody, LoginRequestBody, LoginResponse } from '@teyvatology/teyvatapi-client'

export const login = createAsyncThunk<LoginResponse, LoginRequestBody>(
  'user/login',
  async (payload: LoginRequestBody) => {
    const result = await userController().login(payload)
    return result.data
  }
)

export const signIn = createAsyncThunk<LoginResponse, CreateUserRequestBody>(
  'user/signIn',
  async (payload: CreateUserRequestBody) => {
    const result = await userController().create(payload)
    return result.data
  }
)

export const exchangeUserInfo = createAsyncThunk<LoginResponse, { token: string }>(
  'user/exchangeUserInfo',
  async (payload: { token: string }) => {
    const result = await oauthController().exchangeUserInfo({
      headers: {
        Authorization: `Bearer ${payload.token}`
      }
    })
    return result.data
  }
)