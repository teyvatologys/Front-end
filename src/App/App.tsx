import IndexPage from '../views/IndexPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Book from '../views/Book'

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/book/:id' element={<Book />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
