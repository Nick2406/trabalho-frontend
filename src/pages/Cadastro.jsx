import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {
  const [isLogin, setIsLogin] = useState(true);
  const [mensagemErro, setMensagemErro] = useState('');
  const [mensagemSucesso, setMensagemSucesso] = useState('');
  
  const { login, cadastrarUsuario } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (dados) => {
    setMensagemErro('');
    setMensagemSucesso('');

    if (isLogin) {
      const sucesso = await login(dados.email, dados.senha);
      if (sucesso) {
        navigate('/');
      } else {
        setMensagemErro('Email ou senha incorretos.');
      }
    } else {
      const sucesso = await cadastrarUsuario(dados.nome, dados.email, dados.senha);
      if (sucesso) {
        setMensagemSucesso('Conta criada com sucesso! Faça login para continuar.');
        setIsLogin(true);
        reset();
      } else {
        setMensagemErro('Erro ao criar conta. Tente novamente.');
      }
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto mt-10">
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          {isLogin ? 'Entrar no Last.fm' : 'Criar Nova Conta'}
        </h1>

        {mensagemErro && <div className="bg-red-900/50 border border-red-500 text-red-400 px-4 py-2 rounded mb-4 text-sm">{mensagemErro}</div>}
        {mensagemSucesso && <div className="bg-green-900/50 border border-green-500 text-green-400 px-4 py-2 rounded mb-4 text-sm">{mensagemSucesso}</div>}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          
          {/* Campo Nome (Aparece apenas se for cadastro) */}
          {!isLogin && (
            <div className="flex flex-col gap-1">
              <label className="text-zinc-400 text-sm">Nome Completo</label>
              <input
                type="text"
                className="bg-black border border-zinc-700 rounded p-2 text-white focus:outline-none focus:border-red-500"
                {...register('nome', { required: !isLogin })}
              />
              {errors.nome && <span className="text-red-500 text-xs">Obrigatório.</span>}
            </div>
          )}

          <div className="flex flex-col gap-1">
            <label className="text-zinc-400 text-sm">E-mail</label>
            <input
              type="email"
              className="bg-black border border-zinc-700 rounded p-2 text-white focus:outline-none focus:border-red-500"
              {...register('email', { required: true })}
            />
            {errors.email && <span className="text-red-500 text-xs">Obrigatório.</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-zinc-400 text-sm">Senha</label>
            <input
              type="password"
              className="bg-black border border-zinc-700 rounded p-2 text-white focus:outline-none focus:border-red-500"
              {...register('senha', { required: true, minLength: 6 })}
            />
            {errors.senha?.type === 'required' && <span className="text-red-500 text-xs">Obrigatório.</span>}
            {errors.senha?.type === 'minLength' && <span className="text-red-500 text-xs">Mínimo de 6 caracteres.</span>}
          </div>

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2 transition-colors"
          >
            {isLogin ? 'Entrar' : 'Cadastrar'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-zinc-500">
          {isLogin ? "Ainda não tem uma conta? " : "Já possui uma conta? "}
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              reset();
              setMensagemErro('');
              setMensagemSucesso('');
            }}
            className="text-red-500 hover:underline font-medium"
          >
            {isLogin ? 'Crie agora.' : 'Faça login.'}
          </button>
        </div>
      </div>
    </div>
  );
}