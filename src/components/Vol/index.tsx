import './index.scss'
import { Book } from '@teyvatology/teyvatapi-client'

interface Props {
  vol: Book
}

export default function Vol(props: Props) {
  const { vol } = props

  return (
    <div className='book-vol'>
      <h3 className='vol-name'>{vol.name}</h3>
      <h4 className='vol-description'>{vol.description}</h4>
      <div className='vol-divider' />
      <p className='vol-content'>{vol.content}</p>
    </div>
  )
}