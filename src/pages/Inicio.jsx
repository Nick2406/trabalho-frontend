import { useContext } from 'react';
import { MusicaContext } from '../context/MusicaContext';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Inicio() {
  const { musicas, loading } = useContext(MusicaContext);
  const { usuarioLogado } = useContext(AuthContext);

  return (
    <div className="p-4 sm:p-8 max-w-4xl mx-auto mt-4 sm:mt-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Bem-vindo, {usuarioLogado?.nome}!
          </h1>
          <p className="text-zinc-400 mt-1">Aqui está o seu histórico de scrobbles recentes.</p>
        </div>
        <Link 
          to="/novo-scrobble" 
          className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors whitespace-nowrap"
        >
          + Adicionar Música
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
        </div>
      ) : musicas.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-12 text-center shadow-lg">
          <p className="text-zinc-400 mb-4 text-lg">Você ainda não registrou nenhuma música.</p>
          <Link to="/novo-scrobble" className="text-red-500 font-bold hover:underline">
            Comece a fazer scrobble agora!
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {musicas.map((musica) => (
            <div 
              key={musica.id} 
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 flex items-center justify-between hover:bg-zinc-800/80 transition-colors shadow-sm"
            >
              <div className="flex flex-col">
                <span className="text-white font-bold sm:text-lg">{musica.titulo}</span>
                <span className="text-zinc-400 text-sm sm:text-base">
                  {musica.artista} <span className="text-zinc-600 px-1">&bull;</span> <em className="text-zinc-500">{musica.album}</em>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}