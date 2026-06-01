import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Cadastro from './pages/Cadastro';
import Historico from './pages/Historico';

function App() {
  return (
    <BrowserRouter>
      {/* Fundo escuro global ocupando a tela toda */}
      <div className="min-h-screen bg-zinc-950 font-sans">
        <Navbar />
        
        <main className="max-w-5xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/historico" element={<Historico />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
