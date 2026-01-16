import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import MinhaLista from './pages/lista/MinhaLista'
import Detalhes from './pages/detalhes/Detalhes'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/minha-lista" element={<MinhaLista />} />
      <Route path="/detalhes/:id" element={<Detalhes />} />
    </Routes>
  )
}

export default App
