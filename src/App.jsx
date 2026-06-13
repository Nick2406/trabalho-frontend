import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Cadastro from './pages/Cadastro';
import RotaPrivada from './components/RotaPrivada';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
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
    </BrowserRouter>
  );
}