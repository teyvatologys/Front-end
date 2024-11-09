import './index.scss'
import { BookFamily } from '@teyvatology/teyvatapi-client'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { bookController } from '../../utils/controllers'
import Vol from '../../components/Vol'
import HeaderBar from '../../components/HeaderBar'

import monstadtBookBg from '../../assets/monstadt_book_bg.png'
import titleDecorationLine from '../../assets/title-decoration-line.png'
import theEnd from '../../assets/the-end.png'
import footerDecorationLine from '../../assets/footer-decoration-line.png'

export default function Book() {
  const { id } = useParams<{ id: string }>()

  const [book, setBook] = useState<BookFamily>()
  useEffect(() => {
    if (!id) return
    bookController().getById(id)
      .then(response => {
        if (response.status === 200) {
          setBook(response.data)
        } else {
          console.error(response)
        }
      })
      .catch(console.error)
  }, [id])

  return (
    <>
      <HeaderBar />
      <img src={monstadtBookBg} alt='book' id='book-bg' />
      <div id='book'>
        <div id='book-content'>
          <div className='book-title-container'>
            <div className='book-title'>
              <h1>{book?.family}</h1>
              <img src={titleDecorationLine} className='title-decoration-line' alt='' />
            </div>
          </div>
          {book?.books?.map((vol, index) => {
            return (
              <Vol vol={vol} key={index} />
            )
          })}
          <div className='footer-container' style={{ marginBottom: '96px' }}>
            <div className='footer'>
              <img src={footerDecorationLine} alt='' style={{ width: '16px', height: 'auto' }} id='footer-decoration-line' />
              <img src={theEnd} alt='' id='the-end' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
