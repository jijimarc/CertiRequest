import React, { useState, useEffect } from 'react';

const Dashboard = ({ requests = [], stats, onNewRequest, user, onRefresh, onLogout }) => {
  const [recentRequests, setRecentRequests] = useState([]);

  useEffect(() => {
    setRecentRequests(requests.slice(0, 5));
  }, [requests]);

  return (
    <div className="content">
      <div className="dashboard-header">
        <div className="welcome-section">
          <h2 className="welcome-title">Welcome back, {user?.name || 'Student'}! 👋</h2>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card total">
          <div className="stat-header">
            <div>
              <div className="stat-title">Total Requests</div>
            </div>
            <div className="stat-icon">📊</div>
          </div>
          <div className="stat-value">{stats?.total?.value || 0}</div>
          <div className="stat-change positive">
            <span className="change-icon">↗️</span>
            {stats?.total?.change || '+0%'} from last month
          </div>
        </div>

        <div className="stat-card pending">
          <div className="stat-header">
            <div>
              <div className="stat-title">Pending Review</div>
            </div>
            <div className="stat-icon">⏳</div>
          </div>
          <div className="stat-value">{stats?.pending?.value || 0}</div>
          <div className="stat-change neutral">
            <span className="change-icon">⏳</span>
            Awaiting processing
          </div>
        </div>

        <div className="stat-card completed">
          <div className="stat-header">
            <div>
              <div className="stat-title">Completed</div>
            </div>
            <div className="stat-icon">✅</div>
          </div>
          <div className="stat-value">{stats?.completed?.value || 0}</div>
          <div className="stat-change positive">
            <span className="change-icon">↗️</span>
            {stats?.completed?.change || '+0%'} from last month
          </div>
        </div>

        <div className="stat-card payments">
          <div className="stat-header">
            <div>
              <div className="stat-title">Total Payments</div>
            </div>
            <div className="stat-icon">💳</div>
          </div>
          <div className="stat-value">{stats?.payments?.value || '$0.00'}</div>
          <div className="stat-change positive">
            <span className="change-icon">↗️</span>
            {stats?.payments?.change || '+0%'} from last month
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Recent Requests */}
        <div className="recent-requests">
          <div className="section-header">
            <div>
              <h3 className="section-title">Recent Requests</h3>
              <p className="section-subtitle">Your latest document requests</p>
            </div>
          </div>

          <div className="requests-list">
            {recentRequests.length > 0 ? (
              recentRequests.map(request => (
                <div key={request.id} className="request-item">
                  <div className="request-icon">
                    {request.documentType?.includes('Transcript') && '📄'}
                    {request.documentType?.includes('Certificate') && '🎓'}
                    {request.documentType?.includes('Verification') && '📋'}
                  </div>
                  <div className="request-info">
                    <div className="request-title">{request.documentType}</div>
                    <div className="request-meta">
                      Submitted on {new Date(request.dateSubmitted).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="request-status">
                    <span className={`status-badge ${request.status}`}>
                      <span className="status-indicator"></span>
                      {request.status?.replace('_', ' ')}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-state">
                <div className="empty-icon">📋</div>
                <div className="empty-title">No requests yet</div>
                <div className="empty-subtitle">Start by creating your first request</div>
                <button className="btn btn-primary" onClick={onNewRequest}>
                  Create Request
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Profile Widget */}
        <div className="sidebar-widgets">
          <div className="widget profile-widget">
            <div className="widget-header">
              <h3 className="widget-title">My Profile</h3>
            </div>
            <div className="widget-content">
              <div className="profile-header">
                <div className="profile-avatar">
                  <span className="avatar-initials">
                    {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
                  </span>
                </div>
                <div className="profile-info">
                  <div className="profile-name">{user?.name || 'Student'}</div>
                  <div className="profile-role">Student</div>
                </div>
              </div>
              <div className="profile-details">
                <div className="profile-field">
                  <span className="profile-label">ID Number</span>
                  <span className="profile-value">{user?.id || 'STU001'}</span>
                </div>
                <div className="profile-field">
                  <span className="profile-label">Email</span>
                  <span className="profile-value">{user?.email || 'student@university.edu'}</span>
                </div>
                <div className="profile-field">
                  <span className="profile-label">Department</span>
                  <span className="profile-value">{user?.department || 'Computer Science'}</span>
                </div>
              </div>
              <button className="btn btn-logout" onClick={onLogout}>
                🚪 Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;