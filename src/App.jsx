
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './Seconnecter/AuthContext'
import Seconnecte from './Seconnecter/Seconnecte'
import Senregistrer from './Seconnecter/Senregistrer'

function App() {

  return (
    <AuthProvider>
    
      <BrowserRouter>
        <Routes>

          <Route path="/seconnecter" element={<Seconnecte />} />
          <Route path="/senregisrerpourconect" element={<Senregistrer />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
