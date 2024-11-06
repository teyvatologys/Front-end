import './index.scss'
import StartButton from '../../components/IndexPage/StartButton'
import IndexTitle from '../../components/IndexPage/IndexTitle'
import Header from '../../components/IndexPage/Header'

import background from '../../assets/index.png'

export default function IndexPage() {
  return (
    <div id="index-page">
      <img src={background} alt="library" id="index-image" />
      <Header />
      <div className="center">
        <IndexTitle />
        <StartButton />
      </div>
    </div>
  )
}