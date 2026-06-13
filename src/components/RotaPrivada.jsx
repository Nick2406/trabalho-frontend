import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function RotaPrivada({ children }) {
  const { usuarioLogado } = useContext(AuthContext);

  if (!usuarioLogado) {
    return <Navigate to="/cadastro" replace />;
  }

  return children;
}