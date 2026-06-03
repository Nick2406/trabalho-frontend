import { useContext } from 'react';
import { MusicaContext } from '../context/MusicaContext';
import CardMusica from '../components/CardMusica';

export default function Inicio() {
  // Consumimos as músicas e o estado de carregamento do Contexto
  const { musicas, loading } = useContext(MusicaContext);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-6 border-b border-zinc-800 pb-2">
        Top Músicas
      </h1>

      {/* Estado 1: A carregar dados da API */}
      {loading && (
        <div className="text-center text-zinc-400 py-12">
          A carregar os seus scrobbles...
        </div>
      )}

      {/* Estado 2: API respondeu, mas não há músicas */}
      {!loading && musicas.length === 0 && (
        <div className="text-center bg-zinc-900 border border-zinc-800 rounded-lg p-12">
          <p className="text-zinc-400">Ainda não fez scrobble de nenhuma música.</p>
        </div>
      )}

      {/* Estado 3: Lista de músicas (Grid Responsiva) */}
      {!loading && musicas.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {musicas.map((musica) => (
            <CardMusica key={musica.id} musica={musica} />
          ))}
        </div>
      )}
    </div>
  );
}