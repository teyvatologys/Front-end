import SearchIcon from '../../assets/icons/search.svg'
import LoginButtonIcon from '../../assets/login-button.png'
import './index.scss'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import LoginForm from '../LoginForm'
import Dialog from '../../library/Dialog'
import LeftHeader from '../LeftHeader'
import SignInForm from '../SignInForm'

enum DialogType {
  Login = 'login',
  SignIn = 'signin',
  ForgotPassword = 'forgot-password'
}

export default function HeaderBar() {
  const navigate = useNavigate()
  const [state, setState] = useState<DialogType>()

  return (
    <>
      <div id="header-bar">
        <LeftHeader onClick={() => navigate('/')} />

        <div id='header-bar-right'>
          <div className='search-bar'>
            <img src={SearchIcon} alt="search" />
            <input type="text" placeholder="Everything about Teyvat..." />
          </div>
          <button className='glover-button' onClick={() => setState(DialogType.Login)}>
            <img src={LoginButtonIcon} alt='login' style={{ width: '40px', height: '40px' }} />
          </button>
        </div>
      </div>
      <Dialog open={state !== undefined} onClose={() => setState(undefined)}>
        {state === DialogType.Login ?
          <LoginForm onSwitchToSignIn={() => setState(DialogType.SignIn)} /> :
          (state === DialogType.SignIn ?
            <SignInForm onSwitchToLogIn={() => setState(DialogType.Login)} /> :
            null
          )
        }
      </Dialog>
    </>
  )
}