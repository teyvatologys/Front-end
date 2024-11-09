import './index.scss'

import HeaderBar from '../../components/HeaderBar'
import AboveBackground from '../../assets/Library.jpg'
import SevenElements from '../../assets/7-elements.png'
import HomePageDecorationLine1 from '../../assets/home-page-decoration-line.png'
import HomePageDecorationLine2 from '../../assets/home-page-decoration-line-2.png'
import MyButton from '../../components/MyButton'
import { useEffect } from 'react'
import { useAppDispatch } from '../../store'
import { exchangeUserInfo } from '../../utils/apis/user'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const lines = [
    ['Nations', 'Books', 'Dictionary'],
    ['Resourses', 'Characters', 'Weapons', 'Affiliations']
  ]

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get('token')
    if (token) { // If token is not undefined, then this is a redirect from the oauth login)
      void dispatch(exchangeUserInfo({ token })).unwrap()
        .then(() => navigate('/home'))
    }
  }, [dispatch, navigate])

  return (
    <>
      <HeaderBar />
      <div id='home-page-container'>
        <div id='top-container'>
          <img src={AboveBackground} alt='' className='background' />
          <div id='top'>
            <h1>Knowledge across all seven nations of Teyvat</h1>
            <img src={SevenElements} alt='' />
          </div>
        </div>
        <div id='bottom-container'>
          <div id='bottom'>
            <img src={HomePageDecorationLine1} alt='' className='decoration-line top' />
            <div id='buttons-container'>
              {lines.map((line, index) => (
                <div key={index} className='line'>
                  {line.map((word, index) => (
                    <MyButton key={index} isLast={index !== line.length-1}>
                      {word}
                    </MyButton>
                  ))}
                </div>
              ))}
            </div>
            <img src={HomePageDecorationLine2} alt='' className='decoration-line bottom' />
          </div>
        </div>
      </div>
    </>
  )
}