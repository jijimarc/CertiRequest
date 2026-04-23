import React, { useState, useEffect, useCallback } from 'react';
import './staff.css';

import { 
  STATUS_CONFIG, 
  URGENCY_CONFIG, 
  TRACKER_STEPS, 
  TRACKER_ORDER, 
  filterRequests,
  updateRequestStatus 
} from '../services/StaffServices';

// --- SUB-COMPONENTS ---

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

function RequestDetailsModal({ request, onClose, onApproveClick, onDenyClick }) {
  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!request) return null;

  const status = (request.status || '').toLowerCase();
  const isPending = status === 'pending';
  const isCurrentlyProcessing = status === 'processing';
  const isReady = status === 'ready';

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

        <div style={{ padding: '14px 24px', borderTop: '1px solid #EDF2F9', background: '#F8FAFD', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            {isPending && (
              <>
                <button onClick={() => onApproveClick(request, 'processing')} className="action-btn btn-approve" style={{ padding: '9px 20px', fontSize: '13px' }}>✅ Approve</button>
                <button onClick={() => onDenyClick(request)} className="action-btn btn-deny" style={{ padding: '9px 20px', fontSize: '13px' }}>❌ Reject</button>
              </>
            )}
            {isCurrentlyProcessing && (
              <button onClick={() => onApproveClick(request, 'ready')} className="action-btn btn-approve" style={{ padding: '9px 20px', fontSize: '13px', background: '#3b82f6' }}>📦 Mark as Ready</button>
            )}
            {isReady && (
              <button onClick={() => onApproveClick(request, 'completed')} className="action-btn btn-approve" style={{ padding: '9px 20px', fontSize: '13px', background: '#059669' }}>🏁 Mark as Delivered</button>
            )}
          </div>
          <button onClick={onClose} style={{ padding: '9px 20px', fontSize: '13px', fontWeight: '600', border: '1px solid #C5D7F5', borderRadius: '10px', background: '#FFFFFF', color: '#0D3B7A', cursor: 'pointer' }}>Close</button>
        </div>
      </div>
    </div>
  );
}

function ConfirmDialog({ type, request, onConfirm, onCancel, isProcessing, targetStatus }) {
  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape' && !isProcessing) onCancel(); };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onCancel, isProcessing]);

  const isApprove = type === 'approve';
  
  let title = isApprove ? 'Approve Request?' : 'Deny Request?';
  let message = isApprove ? 'This will move it to the processing queue.' : 'This action cannot be undone.';
  let btnText = isApprove ? '✅ Confirm Approve' : '❌ Confirm Deny';
  let btnColor = isApprove ? '#10b981' : '#ef4444';

  if (targetStatus === 'ready') {
    title = 'Mark as Ready?';
    message = 'This will notify the student that the document is ready for pickup.';
    btnText = '📦 Confirm Ready';
    btnColor = '#3b82f6';
  } else if (targetStatus === 'completed') {
    title = 'Mark as Delivered?';
    message = 'This will mark the request as delivered to the student and finalize it.';
    btnText = '🏁 Confirm Delivered';
    btnColor = '#059669';
  }

  return (
    <div className="modal-overlay" onClick={() => !isProcessing && onCancel()}>
      <div className="modal-container confirm-container" onClick={e => e.stopPropagation()}>
        <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: isApprove ? '#E6FAF3' : '#FFF0F0', border: `2px solid ${isApprove ? '#A3E6C9' : '#FCA5A5'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '16px' }}>
          {targetStatus === 'ready' ? '📦' : targetStatus === 'completed' ? '🏁' : (isApprove ? '✅' : '❌')}
        </div>
        <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#0D2850', margin: '0 0 8px' }}>{title}</h3>
        <p style={{ fontSize: '13.5px', color: '#6B80A3', lineHeight: '1.6', margin: '0 0 20px' }}>
          You are about to update request <strong style={{ color: '#0D2850' }}>{request?.number || request?.id}</strong> from <strong style={{ color: '#0D2850' }}>{request?.userName}</strong>.
          <br />{message}
        </p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
          <button onClick={onCancel} disabled={isProcessing} style={{ padding: '10px 20px', fontSize: '13px', fontWeight: '600', border: '1px solid #C5D7F5', borderRadius: '10px', background: '#F5F8FF', color: '#0D3B7A', cursor: isProcessing ? 'wait' : 'pointer', opacity: isProcessing ? 0.5 : 1 }}>Cancel</button>
          <button onClick={onConfirm} disabled={isProcessing} style={{ padding: '10px 22px', fontSize: '13px', fontWeight: '700', border: 'none', borderRadius: '10px', background: btnColor, color: '#FFFFFF', cursor: isProcessing ? 'wait' : 'pointer', opacity: isProcessing ? 0.5 : 1 }}>
            {isProcessing ? 'Processing...' : btnText}
          </button>
        </div>
      </div>
    </div>
  );
}

// --- MAIN COMPONENT ---

const RequestQueue = ({ requests = [], onRefresh }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedRequest, setSelectedRequest] = useState(null);   
  const [confirmDialog, setConfirmDialog] = useState(null); 
  const [isProcessing, setIsProcessing] = useState(false);       
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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
  const handleApproveClick = (req, targetStatus = 'processing') => setConfirmDialog({ type: 'approve', request: req, targetStatus });
  const handleDenyClick = (req) => setConfirmDialog({ type: 'deny', request: req, targetStatus: 'cancelled' });
  const handleCancelConfirm = () => setConfirmDialog(null);

  const handleConfirmAction = async () => {
    if (!confirmDialog) return;
    setIsProcessing(true);
    const { request, targetStatus } = confirmDialog;

    try {
      await updateRequestStatus(request.id, targetStatus);
      setConfirmDialog(null);
      setSelectedRequest(null);
      if (onRefresh) onRefresh();
    } catch (error) {
      alert(`Error updating request: ${error.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const filteredRequests = filterRequests(requests, searchTerm, filterStatus);
  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedRequests = filteredRequests.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="staff-container">
      <div className="queue-card" style={{ marginBottom: '24px' }}>
        <div className="filter-section">
          <div style={{ display: 'flex', flex: 1, gap: '12px', alignItems: 'center' }}>
            <span style={{ fontSize: '18px', color: '#8A9BBE' }}>🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search by ID, Name or Document..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{ border: 'none', background: 'transparent', padding: '12px 0' }}
            />
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', paddingLeft: '16px', borderLeft: '1.5px solid #EDF2F9' }}>
            <span style={{ fontSize: '13px', fontWeight: '700', color: '#8A9BBE', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Status</span>
            <select 
              className="status-select" 
              value={filterStatus} 
              onChange={e => setFilterStatus(e.target.value)}
              style={{ border: 'none', background: 'transparent', fontWeight: '600' }}
            >
              <option value="All">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Verified">Verified</option>
              <option value="Processing">Processing</option>
              <option value="Ready">Ready</option>
              <option value="Completed">Delivered</option>
            </select>
          </div>
        </div>
      </div>

      <div className="queue-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ overflowX: 'auto' }}>
          <table className="staff-table">
            <thead>
              <tr>
                <th>Request Info</th>
                <th>Student</th>
                <th>Document</th>
                <th>Requested On</th>
                <th>Urgency</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedRequests.length > 0 ? paginatedRequests.map(req => (
                <tr key={req.id}>
                  <td>
                    <span style={{ 
                      fontFamily: "'DM Mono', monospace", 
                      fontSize: '11px', 
                      fontWeight: '700', 
                      color: '#0D3B7A',
                      background: '#F1F5F9',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      border: '1px solid #E2E8F0'
                    }}>
                      {req.number || req.id}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <Avatar name={req.userName} size={36} />
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '14px', fontWeight: '700', color: '#0D2850' }}>{req.userName}</span>
                      </div>
                    </div>
                  </td>
                  <td><span style={{ fontSize: '13.5px', color: '#0D2850', fontWeight: '600' }}>{req.documentType}</span></td>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '12.5px', color: '#3A506F', fontWeight: '500' }}>{req.dateSubmitted}</span>
                    </div>
                  </td>
                  <td><UrgencyBadge urgency={req.urgency} /></td>
                  <td><StatusBadge status={req.status} /></td>
                  <td style={{ textAlign: 'right' }}>
                    <button onClick={() => handleView(req)} className="btn-view-staff">View Details</button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', padding: '60px 0', color: '#6B80A3' }}>
                    No requests found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="queue-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>
            Showing <strong style={{ color: '#0D3B7A' }}>{paginatedRequests.length}</strong> of{' '}
            <strong style={{ color: '#0D3B7A' }}>{filteredRequests.length}</strong> requests
          </span>
          
          {totalPages > 1 && (
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <button 
                onClick={() => goToPage(currentPage - 1)} 
                disabled={currentPage === 1}
                className="btn btn-secondary"
                style={{ padding: '6px 12px', fontSize: '12px', opacity: currentPage === 1 ? 0.5 : 1 }}
              >
                Previous
              </button>
              
              <div style={{ display: 'flex', gap: '4px' }}>
                {[...Array(totalPages)].map((_, i) => (
                  <button 
                    key={i + 1}
                    onClick={() => goToPage(i + 1)}
                    style={{
                      width: '30px', height: '30px', borderRadius: '6px', border: 'none',
                      background: currentPage === i + 1 ? '#0D3B7A' : '#F1F5F9',
                      color: currentPage === i + 1 ? 'white' : '#64748B',
                      fontWeight: '700', cursor: 'pointer', fontSize: '12px'
                    }}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button 
                onClick={() => goToPage(currentPage + 1)} 
                disabled={currentPage === totalPages}
                className="btn btn-secondary"
                style={{ padding: '6px 12px', fontSize: '12px', opacity: currentPage === totalPages ? 0.5 : 1 }}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>

      {selectedRequest && (
        <RequestDetailsModal 
          request={selectedRequest} 
          onClose={handleCloseModal} 
          onApproveClick={handleApproveClick} 
          onDenyClick={handleDenyClick} 
        />
      )}
      
      {confirmDialog && (
        <ConfirmDialog 
          type={confirmDialog.type} 
          request={confirmDialog.request} 
          targetStatus={confirmDialog.targetStatus}
          onConfirm={handleConfirmAction} 
          onCancel={handleCancelConfirm} 
          isProcessing={isProcessing}
        />
      )}
    </div>
  );
};

export default RequestQueue;