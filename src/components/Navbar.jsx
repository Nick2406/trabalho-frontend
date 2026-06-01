import { NavLink } from 'react-router-dom';

export default function Navbar() {
  // Função para aplicar cor vermelha se o link estiver ativo, ou branco se não estiver
  const linkStyles = ({ isActive }) =>
    isActive
      ? "text-red-500 font-semibold border-b-2 border-red-500 pb-1"
      : "text-zinc-300 hover:text-white transition-colors pb-1";

  return (
    <header className="bg-black py-4 px-8 shadow-md flex flex-col md:flex-row justify-between items-center border-b border-zinc-800">
      {/* Logo Fake */}
      <div className="text-2xl font-black text-white tracking-tighter mb-4 md:mb-0">
        last<span className="text-red-600">.fm</span>
      </div>

      {/* Menu de Navegação */}
      <nav className="flex gap-6 text-sm uppercase tracking-wide font-medium">
        <NavLink to="/" className={linkStyles}>
          Início
        </NavLink>
        <NavLink to="/cadastro" className={linkStyles}>
          Cadastro
        </NavLink>
        <NavLink to="/historico" className={linkStyles}>
          Histórico
        </NavLink>
      </nav>
    </header>
  );
}