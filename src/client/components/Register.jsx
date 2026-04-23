import React, { useState } from 'react';
import './registration.css';

const Register = ({ onRegister, onBackToLogin }) => {
  const [step, setStep] = useState(1);
  const [passwordError, setPasswordError] = useState('');
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    contact_number: '',
    user_type: 'student',
    student_id_number: '',
    department: '',
    program: '',
    year_level: '',
    is_regular: 'yes',
    year_of_graduation: '',
    personal_email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if ((name === 'password' || name === 'confirmPassword')) {
      const updatedData = { ...formData, [name]: value };
      if (updatedData.password && updatedData.confirmPassword && updatedData.password !== updatedData.confirmPassword) {
        setPasswordError('Passwords do not match');
      } else if (updatedData.password && updatedData.confirmPassword && updatedData.password === updatedData.confirmPassword) {
        setPasswordError('');
      }
    }
  };

  const nextStep = () => {
    if (step === 1) {
      if (formData.password !== formData.confirmPassword) {
        setPasswordError('Passwords do not match');
        return;
      }
      if (!formData.password || !formData.confirmPassword) {
        setPasswordError('Please fill in both password fields');
        return;
      }
    }
    setPasswordError('');
    setStep(prev => prev + 1);
  };
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    setPasswordError('');
    const { confirmPassword, ...dataToSubmit } = formData;
    onRegister(dataToSubmit);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="step-content fadeIn">
            <h3 className="section-title mb-4">Personal Information</h3>
            <div className="user-type-selector">
              <div 
                className={`type-card ${formData.user_type === 'student' ? 'active' : ''}`}
                onClick={() => setFormData(prev => ({ ...prev, user_type: 'student' }))}
              >
                <span className="type-icon">🎓</span>
                <span className="type-label">Student</span>
              </div>
              <div 
                className={`type-card ${formData.user_type === 'alumni' ? 'active' : ''}`}
                onClick={() => setFormData(prev => ({ ...prev, user_type: 'alumni' }))}
              >
                <span className="type-icon">📜</span>
                <span className="type-label">Alumni</span>
              </div>
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Full Name</label>
              <input 
                type="text" 
                name="fullname"
                className="form-input" 
                placeholder="Ex. John A. Doe" 
                value={formData.fullname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label className="form-label">University Email</label>
              <input 
                type="email" 
                name="email"
                className="form-input" 
                placeholder="john.doe@university.edu" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label className="form-label">Create Password</label>
              <input 
                type="password" 
                name="password"
                className="form-input" 
                placeholder="••••••••" 
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label className="form-label">Confirm Password</label>
              <input 
                type="password" 
                name="confirmPassword"
                className="form-input" 
                placeholder="••••••••" 
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {passwordError && (
                <div className="error-message">{passwordError}</div>
              )}
            </div>
            <div className="form-group">
              <label className="form-label">Contact Number</label>
              <input 
                type="tel" 
                name="contact_number"
                className="form-input" 
                placeholder="+63 9XX XXX XXXX" 
                value={formData.contact_number}
                onChange={handleChange}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="step-content fadeIn">
            <h3 className="section-title mb-4">Academic Background</h3>
            <div className="form-grid">
              <div className="form-group mb-3">
                <label className="form-label">Student ID Number</label>
                <input 
                  type="text" 
                  name="student_id_number"
                  className="form-input" 
                  value={formData.student_id_number}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Department</label>
                <input 
                  type="text" 
                  name="department"
                  className="form-input" 
                  placeholder="e.g. CAS, CBA" 
                  value={formData.department}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group full-width mb-3">
                <label className="form-label">Program / Course</label>
                <input 
                  type="text" 
                  name="program"
                  className="form-input" 
                  placeholder="e.g. BS Computer Science" 
                  value={formData.program}
                  onChange={handleChange}
                />
              </div>

              {formData.user_type === 'student' ? (
                <>
                  <div className="form-group">
                    <label className="form-label">Year Level</label>
                    <select 
                      name="year_level" 
                      className="form-select"
                      value={formData.year_level}
                      onChange={handleChange}
                    >
                      <option value="">Select Year</option>
                      <option value="1st">1st Year</option>
                      <option value="2nd">2nd Year</option>
                      <option value="3rd">3rd Year</option>
                      <option value="4th">4th Year</option>
                      <option value="5th">5th Year+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Regular Student?</label>
                    <select 
                      name="is_regular" 
                      className="form-select"
                      value={formData.is_regular}
                      onChange={handleChange}
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </>
              ) : (
                <>
                  <div className="form-group">
                    <label className="form-label">Date of Graduation</label>
                    <input 
                      type="date" 
                      name="year_of_graduation"
                      className="form-input" 
                      value={formData.year_of_graduation}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Personal Email</label>
                    <input 
                      type="email" 
                      name="personal_email"
                      className="form-input" 
                      placeholder="alternative@gmail.com" 
                      value={formData.personal_email}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <h2 className="register-title">Create Account</h2>
          <p className="register-subtitle">Join the CertiRequest Portal</p>
          
          <div className="progress-stepper">
            <div className={`step-indicator ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>1</div>
            <div className={`step-indicator ${step >= 2 ? 'active' : ''}`}>2</div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="register-body">
            {renderStep()}
          </div>

          <div className="register-footer">
            {step === 1 ? (
              <button type="button" className="btn btn-secondary" onClick={onBackToLogin}>
                Back to Login
              </button>
            ) : (
              <button type="button" className="btn btn-secondary" onClick={prevStep}>
                Previous
              </button>
            )}

            {step === 1 ? (
              <button 
                type="button" 
                className="btn btn-primary" 
                onClick={nextStep}
                disabled={!formData.password || !formData.confirmPassword || formData.password !== formData.confirmPassword}
              >
                Next Step
              </button>
            ) : (
              <button type="submit" className="btn btn-primary">
                Complete Registration
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
