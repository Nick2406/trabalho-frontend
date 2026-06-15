import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RotaPrivada from './components/RotaPrivada';
import Inicio from './pages/Inicio';
import Cadastro from './pages/Cadastro';
import NovoScrobble from './pages/NovoScrobble';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-950 font-sans">
        <Navbar />
        <main className="max-w-5xl mx-auto w-full">
          <Routes>
            <Route 
              path="/novo-scrobble"
              element={
                <RotaPrivada>
                  <NovoScrobble />
                </RotaPrivada>
              } 
            />
            <Route 
              path="/" 
              element={
                <RotaPrivada>
                  <Inicio />
                </RotaPrivada>
              } 
            />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
