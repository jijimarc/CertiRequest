import React from 'react';

const Sidebar = ({ activeTab, setActiveTab, user, requestCount = 0 }) => {
  // We simply removed the 'new-request' object from this list
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊', badge: null },
    { id: 'my-requests', label: 'My Requests', icon: '📋', badge: requestCount > 0 ? requestCount.toString() : null },
    { id: 'track-request', label: 'Track Request', icon: '👁️', badge: null },
    { id: 'payments', label: 'Payments', icon: '💳', badge: null },
    { id: 'help', label: 'Help & Support', icon: '❓', badge: null },
  ];

  // Conditionally add Staff Portal for staff users
  if (user?.role === 'staff') {
    menuItems.splice(menuItems.length - 1, 0, { 
      id: 'staff-portal', 
      label: 'Staff Portal', 
      icon: '🛠️', 
      badge: null 
    });
  }

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
        {menuItems.map((item) => (
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
            <div className="user-role" style={{ textTransform: 'capitalize' }}>{user?.role || 'Student'}</div>
          </div>
        </div>
        <button className="logout-btn">
          <span className="logout-icon">🚪</span>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;