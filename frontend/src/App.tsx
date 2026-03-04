import { useState } from 'react'
import './App.css'
import Navbar from './components/layouts/Navbar'
import Home from './pages/Home'

function App() {
  const [theme] = useState<'dark' | 'light'>('dark')

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App