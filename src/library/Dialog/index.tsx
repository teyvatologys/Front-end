import { useEffect } from 'react'
import './index.scss'

interface Props {
  children: React.ReactNode;
  open: boolean
  onClose?: () => void;
}

export default function Dialog(props: Props) {
  const { children, open, onClose } = props

  useEffect(() => {
    const handleClose = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose?.()
      }
    }

    if (open) {
      window.addEventListener('keydown', handleClose)
    }

    return () => {
      window.removeEventListener('keydown', handleClose)
    }
  })

  return (
    <div className={`dialog-container ${open ? 'open' : 'close' }`}>
      {children}
    </div>
  )
}