import IndexPage from '../views/IndexPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Book from '../views/Book'
import HomePage from '../views/HomePage'
import TeyvatologyContext from '../library/TeyvatologyContext'

function App() {
  return (
    <TeyvatologyContext>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/book/:id' element={<Book />} />
        </Routes>
      </BrowserRouter>
    </TeyvatologyContext>
  )
}

export default App
