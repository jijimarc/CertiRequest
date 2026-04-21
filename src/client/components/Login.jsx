import React, { useState } from 'react';
import './login.css';

const Login = ({ onLogin, onGoToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validate inputs
      if (!email || !password) {
        setError('Please fill in all fields');
        setLoading(false);
        return;
      }

      // Call login API - FIXED: removed %3D encoding issue
      const response = await fetch(`/api/now/table/x_2001423_certireq_customer?sysparm_query=email=${encodeURIComponent(email)}&sysparm_limit=1`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-No-Response-Challenge': 'true'
        }
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const result = await response.json();
      
      // Check if user exists
      if (!result.result || result.result.length === 0) {
        setError('Email not found');
        setLoading(false);
        return;
      }

      const user = result.result[0];

      // Simple password verification
      if (user.password !== password) {
        setError('Invalid password');
        setLoading(false);
        return;
      }

      // Login successful
      onLogin({
        id: user.sys_id,
        name: user.fullname,
        email: user.email,
        department: user.department || 'General',
        avatar: null
      });

    } catch (error) {
      console.error('Login Error:', error);
      setError('Login error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1 className="login-title">CertiRequest</h1>
          <p className="login-subtitle">Document Request Portal</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group mb-4">
            <label className="form-label">University Email</label>
            <input
              type="email"
              className="form-input"
              placeholder="john.doe@university.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <div className="error-alert">
              <span className="error-icon">⚠️</span>
              {error}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary login-btn"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="login-divider">
          <span>or</span>
        </div>

        <div className="login-footer">
          <p className="login-footer-text">Don't have an account?</p>
          <button
            type="button"
            className="btn btn-secondary register-btn"
            onClick={onGoToRegister}
          >
            Create New Account
          </button>
        </div>

        <div className="login-help">
          <a href="#" className="help-link">Forgot your password?</a>
        </div>
      </div>

      <div className="login-background">
        <div className="background-shape shape-1"></div>
        <div className="background-shape shape-2"></div>
        <div className="background-shape shape-3"></div>
      </div>
    </div>
  );
};

export default Login;