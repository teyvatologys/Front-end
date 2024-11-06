import logo from '../../assets/non-bg-logo.png'
import SearchIcon from '../../assets/icons/search.svg'
import LoginButtonIcon from '../../assets/login-button.png'
import './index.scss'
import { useNavigate } from 'react-router-dom'

export default function HeaderBar() {
  const navigate = useNavigate()

  return (
    <div id="header-bar">
      <div id='header-bar-left' onClick={() => navigate('/')}>
        <img src={logo} alt="logo" id="logo" />
        <div id="header-title">Teyvatology</div>  
      </div>

      <div id='header-bar-right'>
        <div className='search-bar'>
          <img src={SearchIcon} alt="search" />
          <input type="text" placeholder="Everything about Teyvat..." />
        </div>
        <button className='glover-button'><img src={LoginButtonIcon} alt='login' style={{ width: '40px', height: '40px' }} /></button>
      </div>
    </div>
  )
}