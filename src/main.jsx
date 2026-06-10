import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MusicaProvider } from './context/MusicaContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <MusicaProvider>
        <App />
      </MusicaProvider>
    </AuthProvider>
  </StrictMode>,
)