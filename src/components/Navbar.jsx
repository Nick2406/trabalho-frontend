import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkStyles = ({ isActive }) =>
    isActive
      ? "text-red-500 font-semibold border-b-2 border-red-500 pb-1"
      : "text-zinc-300 hover:text-white transition-colors pb-1";

  return (
    <header className="bg-black py-4 px-8 shadow-md flex flex-col md:flex-row justify-between items-center border-b border-zinc-800">
      <div className="text-2xl font-black text-white tracking-tighter mb-4 md:mb-0">
        last<span className="text-red-600">.fm</span>
      </div>
      <nav className="flex gap-6 text-sm uppercase tracking-wide font-medium">
        <NavLink to="/" className={linkStyles}>
          Início
        </NavLink>
        <NavLink to="/novo-scrobble" className={linkStyles}>
          Novo Scrobble
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