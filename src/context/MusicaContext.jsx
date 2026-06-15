/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from 'react';

export const MusicaContext = createContext();

export function MusicaProvider({ children }) {
  const [musicas, setMusicas] = useState([]);
  const [loading, setLoading] = useState(true);

  const buscarMusicas = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/musicas');
      const data = await response.json();
      setMusicas(data.reverse());
    } catch (error) {
      console.error("Erro ao buscar músicas:", error);
    } finally {
      setLoading(false);
    }
  };

  const adicionarMusica = async (novaMusica) => {
    try {
      const response = await fetch('http://localhost:3000/musicas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novaMusica)
      });
      const data = await response.json();
      
      setMusicas([data, ...musicas]);
      return true;
    } catch (error) {
      console.error("Erro ao adicionar música:", error);
      return false;
    }
  };

  useEffect(() => {
    const carregarMusicas = async () => {
      await buscarMusicas();
    };

    carregarMusicas();
  }, []);

  return (
    <MusicaContext.Provider value={{ musicas, loading, adicionarMusica }}>
      {children}
    </MusicaContext.Provider>
  );
}