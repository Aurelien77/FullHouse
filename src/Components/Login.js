import React, { useContext } from 'react';
import { AuthContext } from '../Helpers/AuthContext';

function Login() {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login('user123');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
