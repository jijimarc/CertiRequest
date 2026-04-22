import React, { useState } from 'react';

const StaffDashboard = ({ requests = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredRequests = requests.filter(req => {
    const matchesSearch = (req.number && req.number.toLowerCase().includes(searchTerm.toLowerCase())) || 
                          (req.userName && req.userName.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = filterStatus === 'All' || req.status === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const getStatusStyle = (status) => {
    const s = status ? status.toLowerCase() : '';
    const base = {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '600',
    };

    switch (s) {
      case 'pending':
        return { ...base, background: '#fef9c3', color: '#854d0e', border: '1px solid #fde047' };
      case 'processing':
        return { ...base, background: '#dbeafe', color: '#1e40af', border: '1px solid #bfdbfe' };
      case 'completed':
        return { ...base, background: '#dcfce7', color: '#166534', border: '1px solid #bbf7d0' };
      default:
        return { ...base, background: '#f3f4f6', color: '#374151' };
    }
  };

  const getUrgencyStyle = (urgency) => {
    const u = urgency ? urgency.toLowerCase() : '';
    const base = {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '2px 10px',
      borderRadius: '4px',
      fontSize: '11px',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
    };

    if (u === 'rush') {
      return { 
        ...base, 
        background: '#fef2f2', 
        color: '#991b1b', 
        border: '1px solid #fecaca' 
      };
    }
    
    return { 
      ...base, 
      background: '#f8fafc', 
      color: '#475569', 
      border: '1px solid #e2e8f0' 
    };
  };

  // Internal styles to match the project's dashboard aesthetic
  const containerStyle = {
    padding: '24px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const cardStyle = {
    background: '#fff',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    overflow: 'hidden',
  };

  const filterSectionStyle = {
    display: 'flex',
    gap: '16px',
    padding: '20px',
    borderBottom: '1px solid #f3f4f6',
    background: '#fff',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const inputStyle = {
    padding: '10px 16px',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    fontSize: '14px',
    flex: '1',
    minWidth: '250px',
    outline: 'none',
  };

  const selectStyle = {
    padding: '10px 12px',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    fontSize: '14px',
    background: '#fff',
    outline: 'none',
    cursor: 'pointer',
  };

  const thStyle = {
    padding: '12px 20px',
    fontSize: '12px',
    fontWeight: '700',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    textAlign: 'left',
    background: '#f9fafb',
    borderBottom: '1px solid #e5e7eb',
  };

  const tdStyle = {
    padding: '16px 20px',
    fontSize: '14px',
    color: '#374151',
    borderBottom: '1px solid #f3f4f6',
  };

  const actionBtnStyle = {
    padding: '6px 12px',
    fontSize: '13px',
    fontWeight: '600',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    border: '1px solid #e5e7eb',
    background: '#fff',
    marginRight: '8px',
  };

  const disabledBtnStyle = {
    opacity: '0.5',
    cursor: 'not-allowed',
    background: '#f3f4f6',
    color: '#9ca3af',
    borderColor: '#e5e7eb',
  };

  return (
    <div style={containerStyle}>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', marginBottom: '4px' }}>Request Queue</h2>
        <p style={{ color: '#64748b', fontSize: '14px' }}>Manage, approve, and process student document requests</p>
      </div>

      <div style={cardStyle}>
        {/* Search and Filter */}
        <div style={filterSectionStyle}>
          <div style={{ display: 'flex', flex: 1, gap: '12px', alignItems: 'center' }}>
            <span style={{ fontSize: '18px' }}>🔍</span>
            <input
              type="text"
              placeholder="Search by Request ID or User Name..."
              style={inputStyle}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#4b5563' }}>Filter Status:</span>
            <select 
              style={selectStyle}
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={thStyle}>Request ID</th>
                <th style={thStyle}>User Name</th>
                <th style={thStyle}>Document Type</th>
                <th style={thStyle}>Date Requested</th>
                <th style={thStyle}>Urgency</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.length > 0 ? (
                filteredRequests.map((req) => {
                  const isPending = req.status === 'pending';
                  return (
                    <tr key={req.id} style={{ transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                      <td style={{ ...tdStyle, fontWeight: '700', color: '#1e293b' }}>{req.number}</td>
                      <td style={tdStyle}>{req.userName}</td>
                      <td style={tdStyle}>{req.documentType}</td>
                      <td style={{ ...tdStyle, color: '#64748b' }}>{req.dateSubmitted}</td>
                      <td style={tdStyle}>
                        <span style={getUrgencyStyle(req.urgency)}>{req.urgency}</span>
                      </td>
                      <td style={tdStyle}>
                        <span style={getStatusStyle(req.status)}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'currentColor' }}></span>
                          {req.status}
                        </span>
                      </td>
                      <td style={{ ...tdStyle, whiteSpace: 'nowrap' }}>
                        <button style={actionBtnStyle} onClick={() => alert(`Viewing ${req.id}`)}>View</button>
                        
                        <button 
                          style={{ 
                            ...actionBtnStyle, 
                            background: isPending ? '#dcfce7' : '#f3f4f6', 
                            color: isPending ? '#15803d' : '#9ca3af', 
                            borderColor: isPending ? '#bbf7d0' : '#e5e7eb',
                            ...(isPending ? {} : disabledBtnStyle)
                          }}
                          onClick={() => isPending && alert(`Approved ${req.id}`)}
                          disabled={!isPending}
                        >
                          Approve
                        </button>

                        <button 
                          style={{ 
                            ...actionBtnStyle, 
                            background: isPending ? '#fee2e2' : '#f3f4f6', 
                            color: isPending ? '#b91c1c' : '#9ca3af', 
                            borderColor: isPending ? '#fecaca' : '#e5e7eb',
                            ...(isPending ? {} : disabledBtnStyle)
                          }}
                          onClick={() => isPending && alert(`Rejected ${req.id}`)}
                          disabled={!isPending}
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="7" style={{ ...tdStyle, textAlign: 'center', padding: '48px', color: '#64748b' }}>
                    <div style={{ fontSize: '32px', marginBottom: '12px' }}>📭</div>
                    <p>No requests found matching your search criteria.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div style={{ padding: '16px 20px', background: '#f9fafb', borderTop: '1px solid #e5e7eb', fontSize: '13px', color: '#64748b' }}>
          Showing {filteredRequests.length} of {requests.length} requests
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
