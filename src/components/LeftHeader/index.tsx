import './index.scss'

import logo from '../../assets/non-bg-logo.png'

interface Props {
  onClick?: () => void;
}

export default function LeftHeader(props: Props) {
  const onClick = props.onClick

  return (
    <div className='header-bar-left' onClick={onClick} style={{ cursor: !onClick ? 'default' : 'pointer' }}>
      <img src={logo} alt="logo" className="logo" />
      <div className="header-title">Teyvatology</div>  
    </div>
  )
}