import React, { useState } from 'react';
import App1 from './App1';
import './loginpage.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic here
    console.log('Email:', email);
    console.log('Password:', password);

    // You can add your authentication logic here
    if (email === "n@gmail.com" && password === "pp12") {
      setIsLoggedIn(true);
      console.log("Login successful");
    } else {
      console.log("Login failed");
    }
  };

  return (
    <div id='X1'>
      {isLoggedIn ? (
        <App1 />
      ) : (
        <>
          <h2>Login</h2>
          <form id='X2'>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <br />
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default LoginForm;
