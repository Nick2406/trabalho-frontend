import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MusicaProvider } from './context/MusicaContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MusicaProvider>
      <App />
    </MusicaProvider>
  </StrictMode>,
);