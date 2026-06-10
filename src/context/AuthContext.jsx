import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  // Função para logar (busca todos e filtra no frontend)
  const login = async (email, senha) => {
    try {
      // 1. Pede a lista completa de usuários (sem filtros na URL)
      const response = await fetch('http://localhost:3000/usuarios');
      const users = await response.json();
      
      // 2. O JavaScript procura no Array se existe a combinação exata
      const usuarioEncontrado = users.find(
        (user) => user.email === email && user.senha === senha
      );
      
      // 3. Se encontrou, faz o login
      if (usuarioEncontrado) {
        setUsuarioLogado(usuarioEncontrado);
        return true; // Sucesso
      }
      
      // Se não encontrou, falha
      return false; 
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return false;
    }
  };

  const cadastrarUsuario = async (nome, email, senha) => {
    try {
      const novoUser = { nome, email, senha };
      const response = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoUser),
      });
      return response.ok;
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      return false;
    }
  };

  const logout = () => {
    setUsuarioLogado(null);
  };

  return (
    <AuthContext.Provider value={{ usuarioLogado, login, cadastrarUsuario, logout }}>
      {children}
    </AuthContext.Provider>
  );
}