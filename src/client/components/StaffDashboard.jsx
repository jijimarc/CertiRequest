import React from 'react';
import './staff.css';
import { getDashboardStats } from '../services/StaffServices';

const NewStaffDashboard = ({ requests = [], user }) => {
  const stats = getDashboardStats(requests);

  return (
    <div className="staff-dashboard-container">
      <div className="staff-welcome-card">
        <h2>Welcome back, {user?.name }! 👋</h2>
      </div>
      <div className="staff-kpi-grid">
        <div className="staff-kpi-card">
          <div className="kpi-header">
            <span className="kpi-title">TOTAL REQUESTS</span>
            <div className="kpi-icon-wrapper">📊</div>
          </div>
          <div className="kpi-value">{stats.total}</div>
        </div>

        <div className="staff-kpi-card">
          <div className="kpi-header">
            <span className="kpi-title">PENDING REVIEW</span>
            <div className="kpi-icon-wrapper">⏳</div>
          </div>
          <div className="kpi-value">{stats.pending}</div>
          <div className="kpi-subtitle">⏳ Awaiting processing</div>
        </div>

        <div className="staff-kpi-card">
          <div className="kpi-header">
            <span className="kpi-title">IN PROCESSING</span>
            <div className="kpi-icon-wrapper">⚙️</div>
          </div>
          <div className="kpi-value">{requests.filter(r => r.status === 'processing').length}</div>
          <div className="kpi-subtitle">📄 Being prepared</div>
        </div>

        <div className="staff-kpi-card">
          <div className="kpi-header">
            <span className="kpi-title">READY FOR PICKUP</span>
            <div className="kpi-icon-wrapper">🎁</div>
          </div>
          <div className="kpi-value">{requests.filter(r => r.status === 'ready').length}</div>
          <div className="kpi-subtitle">🏪 Awaiting student</div>
        </div>

        <div className="staff-kpi-card">
          <div className="kpi-header">
            <span className="kpi-title">COMPLETED</span>
            <div className="kpi-icon-wrapper">✅</div>
          </div>
          <div className="kpi-value">{requests.filter(r => r.status === 'completed' || r.status === 'delivered').length}</div>
          <div className="kpi-subtitle">🏁 Successfully released</div>
        </div>

        <div className="staff-kpi-card">
          <div className="kpi-header">
            <span className="kpi-title">PAID REQUESTS</span>
            <div className="kpi-icon-wrapper">💳</div>
          </div>
          <div className="kpi-value">
            {requests.filter(r => r.paymentStatus === 'paid').length}
          </div>
          <div className="kpi-subtitle">✅ Payment confirmed</div>
        </div>

      </div>

      <div className="staff-recent-activity" style={{ marginTop: '32px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0D2850', marginBottom: '16px' }}>Recent Activity</h3>
        <div className="staff-activity-list" style={{ background: '#fff', borderRadius: '16px', border: '1px solid #EDF2F9', overflow: 'hidden' }}>
          {requests.slice(0, 5).map((req, i) => (
            <div key={req.id} style={{ 
              padding: '16px 24px', 
              borderBottom: i === 4 ? 'none' : '1px solid #EDF2F9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '40px', height: '40px', background: '#F5F8FF', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                  {req.documentType?.includes('Transcript') ? '📄' : '🎓'}
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#0D2850' }}>{req.userName}</p>
                  <p style={{ margin: 0, fontSize: '12px', color: '#8A9BBE' }}>{req.documentType} • {req.number}</p>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span className={`status-badge ${req.status}`} style={{ fontSize: '11px' }}>
                  {req.status}
                </span>
                <p style={{ margin: '4px 0 0', fontSize: '11px', color: '#8A9BBE' }}>
                  {req.dateSubmitted ? new Date(req.dateSubmitted).toLocaleDateString() : 'Today'}
                </p>
              </div>
            </div>
          ))}
          {requests.length === 0 && (
            <div style={{ padding: '48px', textAlign: 'center', color: '#8A9BBE' }}>
              <p>No recent activity found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewStaffDashboard;