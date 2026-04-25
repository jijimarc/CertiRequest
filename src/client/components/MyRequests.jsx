import React, { useState } from 'react';
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

function RequestDetailsModal({ request, onClose }) {
  if (!request) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" style={{ maxWidth: '500px' }} onClick={e => e.stopPropagation()}>
        <div style={{ padding: '20px 24px', background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff' }}>
          <div>
            <p style={{ fontSize: '11px', fontWeight: '700', opacity: 0.6, textTransform: 'uppercase', margin: '0 0 4px' }}>Request Details</p>
            <h3 style={{ margin: 0, fontSize: '18px' }}>{request.number}</h3>
          </div>
          <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', color: '#fff', cursor: 'pointer' }}>✕</button>
        </div>
        
        <div style={{ padding: '24px', overflowY: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
            <div>
              <p style={{ fontSize: '11px', fontWeight: '700', color: '#8A9BBE', textTransform: 'uppercase', margin: '0 0 6px' }}>Document Type</p>
              <p style={{ fontSize: '14px', fontWeight: '600', color: '#0D2850', margin: 0 }}>{request.documentType}</p>
            </div>
            <div>
              <p style={{ fontSize: '11px', fontWeight: '700', color: '#8A9BBE', textTransform: 'uppercase', margin: '0 0 6px' }}>Urgency</p>
              <p style={{ fontSize: '14px', fontWeight: '600', color: '#0D2850', margin: 0 }}>{request.urgency || 'Standard'}</p>
            </div>
            <div>
              <p style={{ fontSize: '11px', fontWeight: '700', color: '#8A9BBE', textTransform: 'uppercase', margin: '0 0 6px' }}>Status</p>
              <StatusBadge status={request.status} />
            </div>
            <div>
              <p style={{ fontSize: '11px', fontWeight: '700', color: '#8A9BBE', textTransform: 'uppercase', margin: '0 0 6px' }}>Delivery Mode</p>
              <p style={{ fontSize: '14px', fontWeight: '600', color: '#0D2850', margin: 0 }}>{request.deliveryMode || 'Pickup'}</p>
            </div>
          </div>

          <div style={{ background: '#F5F8FF', padding: '16px', borderRadius: '12px', marginBottom: '24px', border: '1px solid #E0E9F8' }}>
            <p style={{ fontSize: '11px', fontWeight: '700', color: '#8A9BBE', textTransform: 'uppercase', margin: '0 0 8px' }}>Purpose of Request</p>
            <p style={{ fontSize: '13.5px', color: '#3A506F', margin: 0, lineHeight: 1.5 }}>{request.purpose || 'No purpose specified.'}</p>
          </div>

          <div>
            <p style={{ fontSize: '13px', fontWeight: '700', color: '#0D2850', margin: '0 0 12px' }}>Processing Progress</p>
            <div style={{ height: '8px', background: '#E2E8F0', borderRadius: '10px', overflow: 'hidden', marginBottom: '8px' }}>
              <div style={{ width: `${request.progress || 10}%`, height: '100%', background: 'linear-gradient(90deg, #0D3B7A, #3b82f6)', transition: 'width 0.5s ease' }} />
            </div>
            <p style={{ fontSize: '12px', color: '#6B80A3', margin: 0 }}>
              Current stage: <strong style={{ color: '#0D3B7A' }}>{(request.status || 'Pending').toUpperCase()}</strong>
            </p>
          </div>
        </div>

        <div style={{ padding: '16px 24px', borderTop: '1px solid #EDF2F9', display: 'flex', justifyContent: 'flex-end', gap: '10px', background: '#F8FAFD' }}>
          <button onClick={onClose} style={{ padding: '10px 20px', borderRadius: '10px', border: '1px solid #C5D7F5', background: '#fff', color: '#0D3B7A', fontWeight: '600', fontSize: '13px', cursor: 'pointer' }}>Close Details</button>
        </div>
      </div>
    </div>
  );
}

const getValue = (field) =>
  typeof field === 'object' ? (field.display_value ?? field.value) : field;

const formatDate = (dateField) => {
  const v = typeof dateField === 'object' ? dateField.value : dateField;
  if (!v) return '—';
  return new Date(v).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

export default function MyRequests({ requests, loading, onNewRequest, onRefresh }) {
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleCancelRequest = async (request) => {
    const sysId = request.id; 
    const status = request.status;
    
    if (status === 'completed' || status === 'cancelled') {
      alert('This request cannot be cancelled.');
      return;
    }
    
    if (confirm('Are you sure you want to cancel this request?')) {
      try {
        const response = await fetch(`/api/now/table/x_2001423_certireq_document_request/${sysId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-UserToken': window.g_ck || ''
          },
          body: JSON.stringify({ status: 'cancelled' })
        });

        if (!response.ok) throw new Error('Failed to cancel request');
        
        onRefresh();
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
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'flex-end' }}>
        {/* <button className="new-request-btn" onClick={onNewRequest}>
          <span style={{ fontSize: '16px', lineHeight: 1 }}>＋</span>
          New Request
        </button> */}
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
            <button className="empty-btn" onClick={onNewRequest}>
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
                  </tr>
                </thead>
                <tbody>
                  {requests.map((request, index) => {
                    const statusValue = (request.status || 'unknown').toLowerCase();
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

      {selectedRequest && (
        <RequestDetailsModal 
          request={selectedRequest} 
          onClose={() => setSelectedRequest(null)} 
        />
      )}
    </div>
  );
}