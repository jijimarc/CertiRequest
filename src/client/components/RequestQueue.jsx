import React, { useState, useEffect, useCallback } from 'react';
import './staff.css';

import { 
  STATUS_CONFIG, 
  URGENCY_CONFIG, 
  TRACKER_STEPS, 
  TRACKER_ORDER, 
  filterRequests 
} from '../services/StaffServices';

function StatusBadge({ status, large = false }) {
  const key = (status || '').toLowerCase();
  const cfg = STATUS_CONFIG[key] || { bg: '#f3f4f6', color: '#374151', border: '1px solid #d1d5db', dot: '#9ca3af', label: status || 'Unknown' };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      padding: large ? '6px 14px' : '4px 11px', borderRadius: '20px',
      fontSize: large ? '13px' : '11px', fontWeight: '700',
      background: cfg.bg, color: cfg.color, border: cfg.border,
      textTransform: 'uppercase', letterSpacing: '0.5px',
    }}>
      <span style={{ width: large ? '8px' : '6px', height: large ? '8px' : '6px', borderRadius: '50%', background: cfg.dot, flexShrink: 0 }} />
      {cfg.label}
    </span>
  );
}

function UrgencyBadge({ urgency }) {
  const key = (urgency || '').toLowerCase();
  const cfg = URGENCY_CONFIG[key] || URGENCY_CONFIG.standard;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', padding: '2px 10px', borderRadius: '4px',
      fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.02em',
      background: cfg.bg, color: cfg.color, border: cfg.border,
    }}>
      {cfg.label || urgency || '—'}
    </span>
  );
}

function Avatar({ name, size = 48 }) {
  const initials = name ? name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : '?';
  return (
    <div style={{
      width: size, height: size, background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      color: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: '700', fontSize: size >= 56 ? '20px' : size >= 40 ? '15px' : '12px', flexShrink: 0,
      boxShadow: '0 2px 8px rgba(30,41,59,0.25)', border: '2px solid #e2e8f0', letterSpacing: '0.5px',
    }}>
      {initials}
    </div>
  );
}

function MiniStatusTracker({ status }) {
  const currentIdx = TRACKER_ORDER.indexOf((status || '').toLowerCase());
  return (
    <div style={{ padding: '20px 24px 8px' }}>
      <p style={{ fontSize: '11px', fontWeight: '700', color: '#8A9BBE', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '14px' }}>
        Request Progress
      </p>
      <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
        {TRACKER_STEPS.map((step, idx) => {
          const isDone = idx < currentIdx;
          const isActive = idx === currentIdx;
          const isUpcoming = idx > currentIdx;
          const isLast = idx === TRACKER_STEPS.length - 1;

          let dotBg, dotColor, dotBorder;
          if (isDone) { dotBg = '#E6FAF3'; dotColor = '#2E9966'; dotBorder = '#A3E6C9'; }
          else if (isActive) { dotBg = '#EEF4FF'; dotColor = '#0D3B7A'; dotBorder = '#0D3B7A'; }
          else { dotBg = '#F5F8FF'; dotColor = '#C5D7F5'; dotBorder = '#E0E9F8'; }

          return (
            <React.Fragment key={step}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: isLast ? 'none' : 1 }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%', background: dotBg, border: `2px solid ${dotBorder}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px',
                  boxShadow: isActive ? `0 0 0 4px rgba(13,59,122,0.1)` : 'none',
                }}>
                  {isDone ? (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={dotColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: dotColor, opacity: isUpcoming ? 0.4 : 1 }} />
                  )}
                </div>
                <span style={{ fontSize: '11px', fontWeight: isActive ? '700' : '500', color: isUpcoming ? '#C5D7F5' : isActive ? '#0D3B7A' : '#2E9966', whiteSpace: 'nowrap' }}>
                  {step}
                </span>
              </div>
              {!isLast && <div style={{ flex: 1, height: '2px', background: isDone ? '#A3E6C9' : '#E0E9F8', marginBottom: '28px', minWidth: '16px' }} />}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

function DetailField({ label, value, fullWidth = false, icon }) {
  return (
    <div style={{ background: '#F5F8FF', borderRadius: '10px', padding: '14px 16px', border: '1px solid #E0E9F8', gridColumn: fullWidth ? '1 / -1' : undefined }}>
      <p style={{ fontSize: '10px', fontWeight: '700', color: '#8A9BBE', textTransform: 'uppercase', letterSpacing: '0.8px', margin: '0 0 5px' }}>
        {icon && <span style={{ marginRight: '4px' }}>{icon}</span>} {label}
      </p>
      <p style={{ fontSize: '13.5px', fontWeight: '600', color: '#0D2850', margin: 0, lineHeight: '1.5', wordBreak: 'break-word' }}>
        {value || '—'}
      </p>
    </div>
  );
}

function RequestDetailsModal({ request, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!request) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <div style={{ padding: '20px 24px', background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Request ID</span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '13px', fontWeight: '600', color: '#fbbf24', background: 'rgba(251,191,36,0.12)', padding: '2px 10px', borderRadius: '6px', border: '1px solid rgba(251,191,36,0.2)' }}>
                {request.number || request.id || '—'}
              </span>
            </div>
            <StatusBadge status={request.status} large />
          </div>
          <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '50%', width: '34px', height: '34px', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
        </div>

        <div className="staff-modal-body">
          <div style={{ padding: '20px 24px 0', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Avatar name={request.userName} size={60} />
            <div>
              <p style={{ fontSize: '17px', fontWeight: '800', color: '#0D2850', margin: '0 0 3px' }}>{request.userName || 'Unknown'}</p>
              <p style={{ fontSize: '13px', color: '#6B80A3', margin: '0 0 3px' }}>{request.email || request.userEmail || '—'}</p>
            </div>
          </div>
          <div style={{ margin: '16px 24px 0', borderTop: '1px solid #EDF2F9' }} />
          
          <div style={{ padding: '16px 24px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <DetailField label="Student ID" value={request.studentId || request.student_id || '—'} icon="🎓" />
            <DetailField label="Email" value={request.email || request.userEmail || '—'} icon="✉️" />
            <DetailField label="Document Type" value={request.documentType || '—'} icon="📄" />
            <DetailField label="Date Requested" value={request.dateSubmitted || '—'} icon="📅" />
            <DetailField label="Urgency" value={<UrgencyBadge urgency={request.urgency} />} icon="⚡" />
            <DetailField label="Status" value={<StatusBadge status={request.status} />} icon="🔖" />
            
            <div style={{ background: '#F5F8FF', borderRadius: '10px', padding: '14px 16px', border: '1px solid #E0E9F8', gridColumn: '1 / -1' }}>
              <p style={{ fontSize: '10px', fontWeight: '700', color: '#8A9BBE', textTransform: 'uppercase', letterSpacing: '0.8px', margin: '0 0 6px' }}>💬 Purpose of Request</p>
              <p style={{ fontSize: '13.5px', fontWeight: '500', color: '#0D2850', margin: 0, whiteSpace: 'pre-wrap' }}>{request.purpose || 'No purpose provided.'}</p>
            </div>
          </div>
          <div style={{ margin: '16px 24px', borderTop: '1px solid #EDF2F9' }}>
            <MiniStatusTracker status={request.status} />
          </div>
        </div>

        <div style={{ padding: '14px 24px', borderTop: '1px solid #EDF2F9', background: '#F8FAFD', display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={onClose} style={{ padding: '9px 20px', fontSize: '13px', fontWeight: '600', border: '1px solid #C5D7F5', borderRadius: '10px', background: '#FFFFFF', color: '#0D3B7A', cursor: 'pointer' }}>Close</button>
        </div>
      </div>
    </div>
  );
}

function ConfirmDialog({ type, request, onConfirm, onCancel }) {
  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape') onCancel(); };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onCancel]);

  const isApprove = type === 'approve';

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal-container confirm-container" onClick={e => e.stopPropagation()}>
        <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: isApprove ? '#E6FAF3' : '#FFF0F0', border: `2px solid ${isApprove ? '#A3E6C9' : '#FCA5A5'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '16px' }}>
          {isApprove ? '✅' : '❌'}
        </div>
        <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#0D2850', margin: '0 0 8px' }}>{isApprove ? 'Approve Request?' : 'Deny Request?'}</h3>
        <p style={{ fontSize: '13.5px', color: '#6B80A3', lineHeight: '1.6', margin: '0 0 20px' }}>
          {isApprove ? 'You are about to approve request ' : 'You are about to deny request '}
          <strong style={{ color: '#0D2850' }}>{request?.number || request?.id}</strong> from <strong style={{ color: '#0D2850' }}>{request?.userName}</strong>.
          {isApprove ? ' This will move it to the processing queue.' : ' This action cannot be undone.'}
        </p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
          <button onClick={onCancel} style={{ padding: '10px 20px', fontSize: '13px', fontWeight: '600', border: '1px solid #C5D7F5', borderRadius: '10px', background: '#F5F8FF', color: '#0D3B7A', cursor: 'pointer' }}>Cancel</button>
          <button onClick={onConfirm} style={{ padding: '10px 22px', fontSize: '13px', fontWeight: '700', border: 'none', borderRadius: '10px', background: isApprove ? '#10b981' : '#ef4444', color: '#FFFFFF', cursor: 'pointer' }}>
            {isApprove ? '✅ Confirm Approve' : '❌ Confirm Deny'}
          </button>
        </div>
      </div>
    </div>
  );
}

const RequestQueue = ({ requests = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedRequest, setSelectedRequest] = useState(null);   
  const [confirmDialog, setConfirmDialog] = useState(null);        

  const anyModalOpen = !!selectedRequest || !!confirmDialog;
  
  useEffect(() => {
    if (anyModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [anyModalOpen]);

  const handleView = useCallback((req) => setSelectedRequest(req), []);
  const handleCloseModal = useCallback(() => setSelectedRequest(null), []);
  const handleApproveClick = (req) => setConfirmDialog({ type: 'approve', request: req });
  const handleDenyClick = (req) => setConfirmDialog({ type: 'deny', request: req });
  const handleConfirmAction = () => {
    if (!confirmDialog) return;
    const { type, request } = confirmDialog;
    alert(`${type === 'approve' ? 'Approved' : 'Denied'} request ${request.number || request.id}`);
    setConfirmDialog(null);
  };
  const handleCancelConfirm = () => setConfirmDialog(null);
  const filteredRequests = filterRequests(requests, searchTerm, filterStatus);

  return (
    <div className="staff-container">
      <div style={{ marginBottom: '24px' }}>
        <h2 className="queue-header-title">Request Queue</h2>
        <p className="queue-header-subtitle">Manage, approve, and process student document requests</p>
      </div>

      <div className="queue-card">
        <div className="filter-section">
          <div style={{ display: 'flex', flex: 1, gap: '10px', alignItems: 'center' }}>
            <span style={{ fontSize: '18px', flexShrink: 0 }}>🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search by Request ID or Name..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#4b5563' }}>Status:</span>
            <select className="status-select" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
              <option value="All">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Verified">Verified</option>
              <option value="Processing">Processing</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table className="queue-table">
            <thead>
              <tr>
                <th className="queue-th">Request ID</th>
                <th className="queue-th">User Name</th>
                <th className="queue-th">Document Type</th>
                <th className="queue-th">Date Requested</th>
                <th className="queue-th">Urgency</th>
                <th className="queue-th">Status</th>
                <th className="queue-th" style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.length > 0 ? (
                filteredRequests.map((req) => {
                  const isPending = (req.status || '').toLowerCase() === 'pending';
                  return (
                    <tr key={req.id} className="queue-tr">
                      <td className="queue-td" style={{ fontWeight: '700', color: '#0D2850', fontFamily: "'DM Mono', monospace" }}>{req.number}</td>
                      <td className="queue-td">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <Avatar name={req.userName} size={30} />
                          <span style={{ fontWeight: '600', color: '#0D2850' }}>{req.userName}</span>
                        </div>
                      </td>
                      <td className="queue-td" style={{ fontWeight: '600', color: '#0D2850' }}>{req.documentType || '—'}</td>
                      <td className="queue-td" style={{ color: '#6B80A3' }}>{req.dateSubmitted || '—'}</td>
                      <td className="queue-td"><UrgencyBadge urgency={req.urgency} /></td>
                      <td className="queue-td"><StatusBadge status={req.status} /></td>
                      <td className="queue-td" style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                        <button className="action-btn btn-view" onClick={() => handleView(req)}>View</button>
                        <button className="action-btn btn-approve" onClick={() => isPending && handleApproveClick(req)} disabled={!isPending}>Approve</button>
                        <button className="action-btn btn-deny" onClick={() => isPending && handleDenyClick(req)} disabled={!isPending}>Deny</button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="7" className="queue-td" style={{ textAlign: 'center', padding: '56px', color: '#8A9BBE' }}>
                    <div style={{ fontSize: '36px', marginBottom: '12px' }}>📭</div>
                    <p style={{ fontWeight: '600', color: '#0D2850', marginBottom: '4px' }}>No requests found</p>
                    <p style={{ fontSize: '13px' }}>Try adjusting your search or filter criteria.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="queue-footer">
          Showing <strong style={{ color: '#0D3B7A' }}>{filteredRequests.length}</strong> of{' '}
          <strong style={{ color: '#0D3B7A' }}>{requests.length}</strong> requests
        </div>
      </div>

      {selectedRequest && <RequestDetailsModal request={selectedRequest} onClose={handleCloseModal} />}
      {confirmDialog && <ConfirmDialog type={confirmDialog.type} request={confirmDialog.request} onConfirm={handleConfirmAction} onCancel={handleCancelConfirm} />}
    </div>
  );
};

export default RequestQueue;