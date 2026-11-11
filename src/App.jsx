import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Contacto from './page/Contacto'
import Acercade from './page/Acercade'
import Home from './page/Home'
import Footer from './components/Footer'

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/acercade" element={<Acercade />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App