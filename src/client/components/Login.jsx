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
      if (!email || !password) {
        setError('Please fill in all fields');
        setLoading(false);
        return;
      }

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
      
      if (!result.result || result.result.length === 0) {
        setError('Email not found');
        setLoading(false);
        return;
      }

      const user = result.result[0];

      if (user.password !== password) {
        setError('Invalid password');
        setLoading(false);
        return;
      }

      onLogin({
        id: user.sys_id,                          
        studentIdNumber: user.student_id_number,   
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

  const handleStaffLogin = async () => {
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/now/ui/userinfo', {
        headers: {
          'Accept': 'application/json',
          'X-No-Response-Challenge': 'true'
        }
      });

      if (!response.ok) throw new Error('Not logged into ServiceNow');

      const result = await response.json();
      const snUser = result.result;

      onLogin({
        id: snUser.sys_id,
        name: snUser.user_name || snUser.name || 'Staff Member',
        email: snUser.email || '',
        isStaff: true, // <-- THIS IS THE MAGIC FLAG
        department: 'Registrar'
      });

    } catch (error) {
      console.error('Staff Login Error:', error);
      setError('Staff login failed. Ensure you are logged into the main ServiceNow platform.');
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

        <div style={{ marginTop: '2rem', textAlign: 'center', borderTop: '1px dashed #e2e8f0', paddingTop: '1.5rem' }}>
          <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.75rem' }}>Are you a Registrar employee?</p>
          <button 
            type="button" 
            className="btn btn-secondary" 
            style={{ width: '100%' }}
            onClick={handleStaffLogin}
            disabled={loading}
          >
            🔐 Staff Single Sign-On
          </button>
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