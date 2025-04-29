import React, { useState } from 'react';

interface AuthFormProps {
  isLogin: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validazione base
    if (!email || !password) {
      setError('Inserisci email e password');
      return;
    }
    
    if (!isLogin && !phoneNumber) {
      setError('Inserisci il numero di telefono per la registrazione');
      return;
    }
    
    // Qui andrà la logica di autenticazione con il backend
    console.log(isLogin ? 'Login' : 'Registrazione', { email, password, phoneNumber });
  };

  return (
    <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          {isLogin ? 'Accedi al tuo account' : 'Registra un nuovo account'}
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          {isLogin 
            ? 'Inserisci le tue credenziali per accedere' 
            : 'Crea un account per iniziare la prova gratuita di 30 giorni'}
        </p>
      </div>
      
      {error && (
        <div className="p-3 text-sm text-red-700 bg-red-100 rounded-md">
          {error}
        </div>
      )}
      
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          {!isLogin && (
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Numero di telefono
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                required
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          )}
        </div>

        {isLogin && (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-900">
                Ricordami
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Password dimenticata?
              </a>
            </div>
          </div>
        )}

        <div>
          <button
            type="submit"
            className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {isLogin ? 'Accedi' : 'Registrati'}
          </button>
        </div>
      </form>
      
      <div className="text-sm text-center">
        {isLogin ? (
          <p>
            Non hai un account?{' '}
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Registrati
            </a>
          </p>
        ) : (
          <p>
            Hai già un account?{' '}
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Accedi
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
