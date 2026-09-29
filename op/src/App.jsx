import { Navigate, Route, Routes } from 'react-router-dom'
import ArquivosHartmann from './pages/home/home.jsx'
import Acesso from './pages/acesso/acesso.jsx'
import { useAgente } from './context/agenteContext.js'
import './App.css'

// Os arquivos só podem ser vistos por agentes logados
function RotaProtegida({ children }) {
  const { agente } = useAgente()
  return agente ? children : <Navigate to="/entrar" replace />
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/entrar" element={<Acesso modo="entrar" />} />
      <Route path="/cadastro" element={<Acesso modo="cadastro" />} />
      <Route
        path="/home"
        element={
          <RotaProtegida>
            <ArquivosHartmann />
          </RotaProtegida>
        }
      />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  )
}

export default App
