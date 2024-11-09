import './index.scss'

import LeftHeader from '../LeftHeader'
import { userController } from '../../utils/apis/controllers'
import { useState } from 'react'
import { ColorRing } from 'react-loader-spinner'

import InputValidator from '../../utils/inputValidator'
import { Tooltip } from 'react-tooltip'
import OAuthLogin from '../OAuthLogin'

interface LoginRequestData {
  loginId: string
  password: string
}

interface LoginFormState {
  isLogin: boolean,
  alreadyClikedLogIn: boolean // Check if the user clicked the login button
}

interface Props {
  onSwitchToSignIn: () => void
}

export default function LoginForm(props: Props) {
  const onSwitchToSignIn = props.onSwitchToSignIn

  const [loginData, setLoginData] = useState<LoginRequestData>({ loginId: '', password: '' })

  // Manage the state of the login form
  const [state, setState] = useState<LoginFormState>({ isLogin: false, alreadyClikedLogIn: false })
  const isValidLoginId = InputValidator.isValidEmail(loginData.loginId) || InputValidator.isValidUsername(loginData.loginId)
  const isValidPassword = InputValidator.isValidPassword(loginData.password)
  const allowedToLogin = isValidLoginId && isValidPassword

  const login = async () => {
    // Check if the loginId and password are valid
    if (!isValidLoginId || !isValidPassword)
      return

    setState({ isLogin: true, alreadyClikedLogIn: true })
    try {
      const result = await userController().login({
        loginId: loginData.loginId,
        password: loginData.password
      })
      console.log(result)
    } catch (error) {
      console.error(error)
    } finally {
      setState(prev => ({ ...prev, isLogin: false }))
    }
  }

  console.log(state.alreadyClikedLogIn && !isValidPassword)

  return (
    <div className='login-form'>
      <LeftHeader />
      <h1 className='title'>Log In</h1>
      <div className='root-input-container'>
        <div className={`input-container ${(state.alreadyClikedLogIn && !isValidLoginId) ? 'invalid' : ''} login-id-input-container`}>
          {(state.alreadyClikedLogIn && !isValidLoginId) && (
            <Tooltip anchorSelect='div.input-container.login-id-input-container' className='input-tooltip'>
              Invalid username or email
            </Tooltip>
          )}
          <input
            type='text'
            placeholder='Username/Email'
            defaultValue={loginData.loginId}
            onChange={e => setLoginData(prev => ({ loginId: e.target.value, password: prev.password }))}
            readOnly={state.isLogin}
          />
        </div>
        <div className={`input-container ${(state.alreadyClikedLogIn && !isValidPassword) ? 'invalid' : ''} password-input-container`}>
          {(state.alreadyClikedLogIn && !isValidPassword) && (
            <Tooltip anchorSelect='div.input-container.password-input-container' className='input-tooltip'>
              Invalid password
            </Tooltip>
          )}
          <input
            type='password'
            placeholder='Password'
            defaultValue={loginData.password}
            onChange={e => setLoginData(prev => ({ loginId: prev.loginId, password: e.target.value }))}
            readOnly={state.isLogin}
          />
        </div>
        <button className='login-button-container' onClick={() => void login()} disabled={!allowedToLogin || state.isLogin}>
          {state.isLogin ?
            <ColorRing visible={state.isLogin} wrapperClass='loader-spinner' colors={['#1fd5ff', '#5a8eff', '#1bdaff', '#197edb', '#2489e7']} /> :
            <span>Log In</span>
          }
        </button>
        <div className='support-buttons-container'>
          <button className='support-button'>Forgot Password?</button>
          <button className='support-button' onClick={onSwitchToSignIn}>Sign In</button>
        </div>
        <OAuthLogin />
      </div>
    </div>
  )
}
