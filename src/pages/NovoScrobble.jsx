import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MusicaContext } from '../context/MusicaContext';
import { useNavigate } from 'react-router-dom';

export default function NovoScrobble() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { adicionarMusica } = useContext(MusicaContext);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (dados) => {
    setIsSubmitting(true);
    const sucesso = await adicionarMusica(dados);
    setIsSubmitting(false);

    if (sucesso) {
      navigate('/');
    } else {
      alert("Erro ao salvar a música. Verifique se o JSON Server está rodando.");
    }
  };

  return (
    <div className="p-4 sm:p-8 max-w-2xl mx-auto mt-4 sm:mt-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-b border-zinc-800 pb-2">
        Registrar Novo Scrobble
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 flex flex-col gap-5 shadow-lg">
        
        <div className="flex flex-col gap-2">
          <label className="text-zinc-300 font-medium">Nome da Música</label>
          <input
            type="text"
            placeholder="Ex: Planet Caravan"
            className="bg-black border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-red-500 transition-colors"
            {...register('titulo', { required: true })}
          />
          {errors.titulo && <span className="text-red-500 text-sm">O título é obrigatório.</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-zinc-300 font-medium">Artista</label>
          <input
            type="text"
            placeholder="Ex: Black Sabbath"
            className="bg-black border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-red-500 transition-colors"
            {...register('artista', { required: true })}
          />
          {errors.artista && <span className="text-red-500 text-sm">O artista é obrigatório.</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-zinc-300 font-medium">Álbum</label>
          <input
            type="text"
            placeholder="Ex: Paranoid"
            className="bg-black border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-red-500 transition-colors"
            {...register('album', { required: true })}
          />
          {errors.album && <span className="text-red-500 text-sm">O álbum é obrigatório.</span>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-red-600 hover:bg-red-700 disabled:bg-red-800 text-white font-bold py-3 px-4 rounded mt-2 transition-colors flex justify-center items-center"
        >
          {isSubmitting ? 'Salvando...' : 'Salvar Scrobble'}
        </button>
      </form>
    </div>
  );
}