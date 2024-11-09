import './index.scss'
import ButtonDecorationLine from '../../assets/button-decoration-line.png'
import Star from '../../assets/star.png'
import { useState } from 'react'

interface MyButtonProps {
  children: React.ReactNode
  isLast?: boolean
  onClick?: () => void
}

export default function MyButton(props: MyButtonProps) {
  const { children, isLast = false, onClick } = props
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      className='my-button-container'
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
    >
      {isHovering && <img src={ButtonDecorationLine} alt='' className='button-decoration-line' />}
      {isHovering && <img src={Star} alt='' className='star star-1' />}
      <span>{children}</span>
      {(isLast || isHovering) && <img src={Star} alt='' className='star star-2' />}
      {isHovering && <img src={ButtonDecorationLine} alt='' className='button-decoration-line' />}
    </div>
  )
}