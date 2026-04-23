import React from 'react';
import './staff.css';
import { getDashboardStats } from '../services/StaffServices';

const NewStaffDashboard = ({ requests = [], user }) => {
  const stats = getDashboardStats(requests);

  return (
    <div className="staff-dashboard-container">
      <div className="staff-welcome-card">
        <h2>Welcome back, {user?.name || 'Admin'}! 👋</h2>
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
            <span className="kpi-title">COMPLETED</span>
            <div className="kpi-icon-wrapper">✅</div>
          </div>
          <div className="kpi-value">{stats.completed}</div>
        </div>

        <div className="staff-kpi-card">
          <div className="kpi-header">
            <span className="kpi-title">TOTAL PAYMENTS</span>
            <div className="kpi-icon-wrapper">💳</div>
          </div>
          <div className="kpi-value">
            ${stats.payments.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewStaffDashboard;