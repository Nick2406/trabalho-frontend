import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { usuarioLogado, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/cadastro');
  };

  return (
    <nav className="bg-zinc-900 border-b border-zinc-800 p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-red-500 font-bold text-2xl tracking-tighter">
          Last.fm
        </Link>

        <div className="flex items-center gap-6">
          {usuarioLogado ? (
            <>
              <span className="text-zinc-400 text-sm hidden md:block">
                Olá, <strong className="text-white">{usuarioLogado.nome}</strong>
              </span>
              <Link to="/" className="text-zinc-300 hover:text-white transition-colors font-medium">
                Início
              </Link>
              <Link to="/novo-scrobble" className="text-zinc-300 hover:text-white transition-colors font-medium">
                Novo Scrobble
              </Link>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:text-red-400 font-medium transition-colors"
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <Link
                to="/cadastro"
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded font-medium transition-colors"
              >
                Entrar
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}