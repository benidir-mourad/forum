import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Questions from './pages/subpages/Questions.jsx'
import Responses from './pages/subpages/Responses.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index='/home' element={<Home />} />
        <Route path='question' element={<Questions />} />
        <Route path='response' element={<Responses />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
