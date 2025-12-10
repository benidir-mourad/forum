import { useState } from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main>
        <Navbar/>
        <Home/>
      </main>
    </>
  )
}

export default App
