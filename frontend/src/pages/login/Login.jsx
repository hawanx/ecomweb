import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>
          <div className="button-group">
            <button type="submit" className="login-button">Login</button>
          </div>
          <div className="register-link">
            <p>Don't have an account? <a href="/register">Sign up</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
