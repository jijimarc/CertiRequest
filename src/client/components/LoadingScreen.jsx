import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <div className="logo-placeholder">CR</div>
        </div>
        <div className="loading-text">
          <h2>CertiRequest</h2>
          <p>Loading your document portal...</p>
        </div>
        <div className="loading-spinner">
          <div className="spinner-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;