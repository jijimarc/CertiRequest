import React from 'react';

const Sidebar = ({ activeTab, setActiveTab, user, requestCount = 0 }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊', badge: null, showFor: 'student' },
    { id: 'my-requests', label: 'My Requests', icon: '📋', badge: requestCount > 0 ? requestCount.toString() : null, showFor: 'student' },
    { id: 'staff-dashboard', label: 'Staff Dashboard', icon: '🛠️', badge: null, showFor: 'staff' },
    { id: 'request-queue', label: 'Request Queue', icon: '📥', badge: null, showFor: 'staff' },
    { id: 'track-request', label: 'Track Request', icon: '👁️', badge: null, showFor: 'student' },
    { id: 'payments', label: 'Payments', icon: '💳', badge: null, showFor: 'student' },
    { id: 'help', label: 'Help & Support', icon: '❓', badge: null, showFor: 'all' },
  ];

  const visibleMenuItems = menuItems.filter(item => {
    if (item.showFor === 'all') return true;
    if (user?.isStaff) return item.showFor === 'staff';
    return item.showFor === 'student';
  });
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo-placeholder">CR</div>
          <div className="brand-info">
            <div className="brand-name">CertiRequest</div>
            <div className="brand-subtitle">Document Portal</div>
          </div>
        </div>
      </div>

      <div className="nav-menu">
        {visibleMenuItems.map((item) => (
          <div key={item.id} className="nav-item">
            <button
              className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.label}</span>
              {item.badge && <span className="nav-badge">{item.badge}</span>}
            </button>
          </div>
        ))}
      </div>

      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar-small">
            {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
          </div>
          <div className="user-details">
            <div className="user-name">{user?.name || 'User'}</div>
            <div className="user-role" style={{ textTransform: 'capitalize' }}>
              {user?.isStaff ? 'Staff Portal' : 'Student'}
            </div>
          </div>
        </div>
        <button className="logout-btn">
          <span className="logout-icon">Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;