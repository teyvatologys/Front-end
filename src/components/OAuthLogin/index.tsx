import GoogleIcon from '../../assets/google.png'
import { oauthController } from '../../utils/controllers'

interface GetLinkResponse {
  url: string
}

export default function OAuthLogin() {
  const loginWithGoogle = () => {
    oauthController().getGoogleAuthLink().then(res => {
      window.location.href = ((res.data as unknown) as GetLinkResponse).url
    })
  }

  return (
    <div className='login-with-3rd-party-container'>
      <span>or Log In with</span>
      <div className='third-party-login-container'>
        <button className='third-party-login-button' onClick={loginWithGoogle}>
          <img src={GoogleIcon} alt='google' />
        </button>
        {/* Ignore for now, will add in the future */}
        {/* <button className='third-party-login-button'>
          <img src={MetaIcon} alt='google' />
        </button> */}
      </div>
    </div>
  )
}