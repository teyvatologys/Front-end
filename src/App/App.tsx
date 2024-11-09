import IndexPage from '../views/IndexPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Book from '../views/Book'
import HomePage from '../views/HomePage'

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/book/:id' element={<Book />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
