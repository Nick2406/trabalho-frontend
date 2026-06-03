import { createContext, useState, useEffect } from 'react';

// Criação do Contexto
// eslint-disable-next-line react-refresh/only-export-components
export const MusicaContext = createContext();

// Componente Provider que vai abraçar a nossa aplicação
export function MusicaProvider({ children }) {
  const [musicas, setMusicas] = useState([]);
  const [loading, setLoading] = useState(true);

  // Busca inicial dos dados na API falsa
  useEffect(() => {
    fetch('http://localhost:3000/musicas')
      .then((response) => response.json())
      .then((data) => {
        setMusicas(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar músicas da API:", error);
        setLoading(false);
      });
  }, []);

  // Função para adicionar uma nova música (Scrobble)
  const adicionarMusica = async (novaMusica) => {
    try {
      const response = await fetch('http://localhost:3000/musicas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novaMusica),
      });
      
      const musicaSalva = await response.json();
      
      // Atualiza o estado local para a tela reagir instantaneamente
      setMusicas((prevMusicas) => [...prevMusicas, musicaSalva]);
    } catch (error) {
      console.error("Erro ao salvar música:", error);
    }
  };

  return (
    <MusicaContext.Provider value={{ musicas, loading, adicionarMusica }}>
      {children}
    </MusicaContext.Provider>
  );
}

export default MusicaContext;