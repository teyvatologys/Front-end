import '../LoginForm/index.scss'
import './index.scss'

import LeftHeader from '../LeftHeader'
import { userController } from '../../utils/apis/controllers'
import { useState } from 'react'
import { ColorRing } from 'react-loader-spinner'
import OAuthLogin from '../OAuthLogin'

interface SignInRequestData {
  usename: string
  email: string
  password: string
}

interface LoginFormState {
  isSigningIn: boolean
}

interface Props {
  onSwitchToLogIn: () => void
}

export default function SignInForm(props: Props) {
  const onSwitchToLogIn = props.onSwitchToLogIn

  const [signInData, setSignInData] = useState<SignInRequestData>({ usename: '', email: '', password: '' })
  const [verificationCode, setVerificationCode] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  // Manage the state of the login form
  const [state, setState] = useState<LoginFormState>({ isSigningIn: false })

  return (
    <div className='login-form signin-form'>
      <LeftHeader />
      <h1 className='title'>Sign In</h1>
      <div className='root-input-container'>
        <div className='input-container'>
          <input
            type='email'
            placeholder='Email'
            defaultValue={signInData.email}
            onChange={e => setSignInData(prev => ({ email: e.target.value, usename: prev.usename, password: prev.password }))}
            readOnly={state.isSigningIn}
          />
        </div>
        <div className='input-container verification-code-container'>
          <input
            type='text'
            placeholder='Verification Code'
            defaultValue={verificationCode}
            onChange={e => setVerificationCode(e.target.value)}
            readOnly={state.isSigningIn}
          />
          <div className='divider' />
          <button className='send-code-button'>Send</button>
        </div>
        <div className='input-container'>
          <input
            type='text'
            placeholder='Username'
            defaultValue={signInData.usename}
            onChange={e => setSignInData(prev => ({ email: prev.email, usename: e.target.value, password: prev.password }))}
            readOnly={state.isSigningIn}
          />
        </div>
        <div className='input-container'>
          <input
            type='password'
            placeholder='Enter your password'
            defaultValue={signInData.password}
            onChange={e => setSignInData(prev => ({ email: prev.email, usename: prev.usename, password: e.target.value }))}
            readOnly={state.isSigningIn}
          />
        </div>
        <div className='input-container'>
          <input
            type='password'
            placeholder='Re-enter your password'
            defaultValue={signInData.password}
            onChange={e => setConfirmPassword(e.target.value)}
            readOnly={state.isSigningIn}
          />
        </div>
        <button className='login-button-container' disabled={state.isSigningIn}>
          {state.isSigningIn ?
            <ColorRing visible={state.isSigningIn} wrapperClass='loader-spinner' colors={['#1fd5ff', '#5a8eff', '#1bdaff', '#197edb', '#2489e7']} /> :
            <span>Sign In</span>
          }
        </button>
        <div className='login-container'>
          Have an account? <button onClick={() => onSwitchToLogIn()}>Log In</button>
        </div>
        <OAuthLogin />
      </div>
    </div>
  )
}
