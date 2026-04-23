import React from 'react';
import './myrequests.css'; 

const STATUS_LABELS = {
  pending: 'Pending',
  processing: 'Processing',
  ready: 'Ready',
  completed: 'Completed',
  cancelled: 'Cancelled',
};

function StatusBadge({ status }) {
  const raw = typeof status === 'object' ? status.value : status;
  const normalizedStatus = raw?.toLowerCase() || 'unknown';
  const label = STATUS_LABELS[normalizedStatus] || raw || 'Unknown';
  
  return (
    <span className={`status-badge status-${normalizedStatus}`}>
      <span className="status-dot" />
      {label}
    </span>
  );
}

const getValue = (field) =>
  typeof field === 'object' ? (field.display_value ?? field.value) : field;

const formatDate = (dateField) => {
  const v = typeof dateField === 'object' ? dateField.value : dateField;
  if (!v) return '—';
  return new Date(v).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

export default function MyRequests({ requests, loading, service, onUpdate }) {

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

  if (loading) {
    return (
      <div className="my-requests-page">
        <div className="loading-container">
          <span style={{ fontSize: '20px' }}>⏳</span>
          Loading your requests…
        </div>
      </div>
    );
  }

  return (
    <div className="my-requests-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">My Requests</h1>
          <p className="page-subtitle">View and manage your document requests</p>
        </div>
        <button className="new-request-btn">
          <span style={{ fontSize: '16px', lineHeight: 1 }}>＋</span>
          New Request
        </button>
      </div>

      <div className="request-card">
        <div className="card-header">
          <div className="card-title-group">
            <div className="card-icon-box">📄</div>
            <span className="card-title">Recent Requests</span>
            {requests && (
              <span className="badge-count">{requests.length} total</span>
            )}
          </div>
        </div>

        {!requests || requests.length === 0 ? (
          <div className="empty-wrap">
            <div className="empty-icon-circle">📋</div>
            <h3 className="empty-title">No requests yet</h3>
            <p className="empty-desc">
              You haven't submitted any document requests. Start your first one now.
            </p>
            <button className="empty-btn">
              ＋ Submit a Request
            </button>
          </div>
        ) : (
          <>
            <div className="table-wrap">
              <table className="requests-table">
                <thead>
                  <tr>
                    <th>Request ID</th>
                    <th>Document Type</th>
                    <th>Date Submitted</th>
                    <th>Status</th>
                    <th>Urgency</th>
                    <th>Delivery</th>
                    <th className="align-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((request, index) => {
                    const statusValue = request.status || 'unknown';
                    const canCancel = statusValue === 'pending';
                    const purposeText = request.purpose || '';
                    const docType = request.documentType || 'Unknown';

                    return (
                      <tr key={index} className="table-row">
                        <td>
                          <code style={{ background: '#EEF4FF', padding: '2px 6px', borderRadius: '4px', color: '#0D3B7A', fontWeight: 'bold' }}>
                            {request.number}
                          </code>
                        </td>
                        <td>
                          <div className="doc-type-name">
                            {docType}
                          </div>
                          {purposeText && (
                            <div className="doc-type-sub">
                              {purposeText.length > 50 ? purposeText.substring(0, 50) + '…' : purposeText}
                            </div>
                          )}
                        </td>

                        <td>
                          <span className="date-text">{formatDate(request.dateSubmitted)}</span>
                        </td>

                        <td>
                          <StatusBadge status={request.status} />
                        </td>

                        <td className="muted-text">
                          {request.urgency || '—'}
                        </td>

                        <td className="muted-text">
                          {request.deliveryMode || '—'}
                        </td>

                        <td className="align-right">
                          <div className="actions-cell">
                            <button
                              className="btn-view"
                              onClick={() => alert('View details functionality would be implemented here')}
                            >
                              View
                            </button>
                            {canCancel && (
                              <button
                                className="btn-cancel"
                                onClick={() => handleCancelRequest(request)}
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
            </div>

            <div className="table-footer">
              <span className="footer-text">
                {requests.length} request{requests.length !== 1 ? 's' : ''} total
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}