export default function CardMusica({ musica }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-red-600 transition-colors cursor-pointer flex flex-col h-full shadow-md">
      {/* Espaço para a imagem/capa do álbum */}
      <div className="h-48 bg-zinc-800 flex items-center justify-center">
        <span className="text-zinc-600 text-5xl">🎵</span>
      </div>
      
      {/* Informações da Música */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-white font-bold text-lg truncate" title={musica.titulo}>
          {musica.titulo}
        </h3>
        <p className="text-zinc-400 text-sm font-medium truncate mt-1" title={musica.artista}>
          {musica.artista}
        </p>
        <p className="text-zinc-500 text-xs mt-auto pt-4 truncate" title={musica.album}>
          {musica.album}
        </p>
      </div>
    </div>
  );
}