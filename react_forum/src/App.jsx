import { useState } from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main>
        <Navbar/>
      </main>
    </>
  )
}

export default App
