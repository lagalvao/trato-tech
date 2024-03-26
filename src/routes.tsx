import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Default from './template/Default'
import Home from './pages/Home'
import Category from './pages/Category'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Home />} />
          <Route path="/categoria/:nomeCategoria" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
