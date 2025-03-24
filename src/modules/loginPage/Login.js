import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.elements[0].value;
    if (username) {
      localStorage.setItem('username', username);
      navigate('/home');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Voyage Vista</h1>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Log In</button>
        </form>
        <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
        <div className="signup-prompt">
          Don't have an account? <a href="/signup">Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
