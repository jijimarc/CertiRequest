import React from 'react';

export default function MyRequests({ requests, loading, service, onUpdate }) {
  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px', color: '#6b7280', fontSize: '14px' }}>
        Loading your requests...
      </div>
    );
  }

  const formatDate = (dateField) => {
    const dateValue = typeof dateField === 'object' ? dateField.value : dateField;
    if (!dateValue) return '—';
    return new Date(dateValue).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const getValue = (field) =>
    typeof field === 'object' ? (field.display_value ?? field.value) : field;

  const getStatusStyle = (status) => {
    const s = typeof status === 'object' ? status.value : status;
    const base = {
      display: 'inline-flex', alignItems: 'center', gap: '5px',
      padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: '600',
    };
    switch (s) {
      case 'pending':    return { ...base, background: '#fef9c3', color: '#854d0e' };
      case 'processing': return { ...base, background: '#dbeafe', color: '#1d4ed8' };
      case 'ready':      return { ...base, background: '#d1fae5', color: '#065f46' };
      case 'completed':  return { ...base, background: '#dcfce7', color: '#166534' };
      case 'cancelled':  return { ...base, background: '#fee2e2', color: '#991b1b' };
      default:           return { ...base, background: '#f3f4f6', color: '#374151' };
    }
  };

  const getStatusDot = (status) => {
    const s = typeof status === 'object' ? status.value : status;
    const colors = {
      pending: '#ca8a04', processing: '#2563eb', ready: '#059669',
      completed: '#16a34a', cancelled: '#dc2626',
    };
    return colors[s] || '#9ca3af';
  };

  const handleCancelRequest = async (request) => {
    const sysId = typeof request.sys_id === 'object' ? request.sys_id.value : request.sys_id;
    const status = typeof request.status === 'object' ? request.status.value : request.status;
    if (status === 'completed' || status === 'cancelled') {
      alert('This request cannot be cancelled.');
      return;
    }
    if (confirm('Are you sure you want to cancel this request?')) {
      try {
        await service.update(sysId, { status: 'cancelled' });
        onUpdate();
        alert('Request cancelled successfully.');
      } catch (error) {
        alert('Failed to cancel request: ' + error.message);
      }
    }
  };

  const thStyle = {
    padding: '12px 16px', fontSize: '12px', fontWeight: '700',
    color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em',
    textAlign: 'left', background: '#f9fafb', borderBottom: '1px solid #e5e7eb',
  };

  const tdStyle = {
    padding: '14px 16px', fontSize: '14px', color: '#374151',
    borderBottom: '1px solid #f3f4f6', verticalAlign: 'middle',
  };

  return (
    <div style={{ padding: '32px', maxWidth: '1100px', margin: '0 auto', fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

      {/* Page Header */}
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a2e', margin: '0 0 6px' }}>My Requests</h1>
        <p style={{ fontSize: '15px', color: '#6b7280', margin: 0 }}>View and manage your document requests</p>
      </div>

      {/* Card */}
      <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', overflow: 'hidden' }}>

        {requests.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '64px 24px' }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>📄</div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a2e', margin: '0 0 8px' }}>No requests yet</h3>
            <p style={{ fontSize: '14px', color: '#6b7280', margin: '0 0 20px' }}>You haven't submitted any document requests.</p>
            <button style={{
              padding: '10px 20px', background: '#1a1a2e', color: '#fff',
              border: 'none', borderRadius: '8px', fontSize: '14px',
              fontWeight: '600', cursor: 'pointer',
            }}>
              Create New Request
            </button>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={thStyle}>Document Type</th>
                  <th style={thStyle}>Date Submitted</th>
                  <th style={thStyle}>Status</th>
                  <th style={thStyle}>Urgency</th>
                  <th style={thStyle}>Delivery</th>
                  <th style={{ ...thStyle, textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request, index) => {
                  const statusValue = typeof request.status === 'object' ? request.status.value : request.status;
                  const canCancel = statusValue === 'pending';
                  const purposeText = getValue(request.purpose) || '';

                  return (
                    <tr
                      key={index}
                      style={{ transition: 'background 0.15s' }}
                      onMouseEnter={e => e.currentTarget.style.background = '#f9fafb'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      {/* Document Type */}
                      <td style={tdStyle}>
                        <div style={{ fontWeight: '600', color: '#1a1a2e', marginBottom: '3px' }}>
                          {getValue(request.document_type) || 'Unknown'}
                        </div>
                        {purposeText && (
                          <div style={{ fontSize: '12px', color: '#9ca3af' }}>
                            {purposeText.length > 50 ? purposeText.substring(0, 50) + '…' : purposeText}
                          </div>
                        )}
                      </td>

                      {/* Date */}
                      <td style={{ ...tdStyle, color: '#6b7280', whiteSpace: 'nowrap' }}>
                        {formatDate(request.submitted_date)}
                      </td>

                      {/* Status */}
                      <td style={tdStyle}>
                        <span style={getStatusStyle(request.status)}>
                          <span style={{
                            width: '6px', height: '6px', borderRadius: '50%',
                            background: getStatusDot(request.status), flexShrink: 0,
                          }} />
                          {getValue(request.status) || 'pending'}
                        </span>
                      </td>

                      {/* Urgency */}
                      <td style={{ ...tdStyle, color: '#6b7280' }}>
                        {getValue(request.urgency_level) || '—'}
                      </td>

                      {/* Delivery */}
                      <td style={{ ...tdStyle, color: '#6b7280' }}>
                        {getValue(request.delivery_mode) || '—'}
                      </td>

                      {/* Actions */}
                      <td style={{ ...tdStyle, textAlign: 'right', whiteSpace: 'nowrap' }}>
                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                          <button
                            onClick={() => alert('View details functionality would be implemented here')}
                            style={{
                              padding: '6px 14px', fontSize: '13px', fontWeight: '600',
                              border: '1px solid #e5e7eb', borderRadius: '7px',
                              background: '#fff', color: '#374151', cursor: 'pointer',
                            }}
                            onMouseEnter={e => { e.target.style.background = '#f9fafb'; e.target.style.borderColor = '#d1d5db'; }}
                            onMouseLeave={e => { e.target.style.background = '#fff'; e.target.style.borderColor = '#e5e7eb'; }}
                          >
                            View
                          </button>
                          {canCancel && (
                            <button
                              onClick={() => handleCancelRequest(request)}
                              style={{
                                padding: '6px 14px', fontSize: '13px', fontWeight: '600',
                                border: '1px solid #fecaca', borderRadius: '7px',
                                background: '#fff5f5', color: '#dc2626', cursor: 'pointer',
                              }}
                              onMouseEnter={e => { e.target.style.background = '#fee2e2'; }}
                              onMouseLeave={e => { e.target.style.background = '#fff5f5'; }}
                            >
                              Cancel
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* Footer row */}
            <div style={{
              padding: '12px 16px', borderTop: '1px solid #e5e7eb',
              background: '#f9fafb', display: 'flex', alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <span style={{ fontSize: '13px', color: '#6b7280' }}>
                {requests.length} request{requests.length !== 1 ? 's' : ''} total
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}