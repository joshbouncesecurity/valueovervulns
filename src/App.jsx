import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About_Trainer from './pages/About_Trainer'
import Where from './pages/Where'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about-trainer' element={<About_Trainer />} />
        <Route path='where-to-attend' element={<Where />} />
      </Routes>
    </>
  )
}

export default App
