import React from 'react';

/* ─────────────────────────────────────────
   Inline styles using CertiRequest's
   Blue & Gold design system
   Primary:  #0D3B7A  (deep navy)
   Accent:   #D4AF37  (gold)
   BG:       #F0F4FA  (light blue-grey)
   Surface:  #FFFFFF
───────────────────────────────────────── */

const styles = {
  page: {
    padding: '36px 40px',
    background: '#F0F4FA',
    minHeight: '100vh',
    fontFamily: "'Plus Jakarta Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },

  // ── Page Header ──────────────────────────
  pageHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '28px',
  },
  pageHeaderLeft: {},
  pageTitle: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#0D2850',
    margin: '0 0 4px',
  },
  pageSubtitle: {
    fontSize: '14px',
    color: '#6B80A3',
    margin: 0,
  },
  newRequestBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '10px 20px',
    background: 'linear-gradient(135deg, #0D3B7A 0%, #1a4d9e 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 4px 14px rgba(13,59,122,0.25)',
    transition: 'all 0.2s',
    letterSpacing: '0.3px',
  },

  // ── Card ─────────────────────────────────
  card: {
    background: '#FFFFFF',
    borderRadius: '16px',
    border: '1px solid #E8EEF6',
    boxShadow: '0 2px 16px rgba(13,59,122,0.06)',
    overflow: 'hidden',
  },

  // ── Card Header ──────────────────────────
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 24px',
    borderBottom: '1px solid #EDF2F9',
    background: '#fff',
  },
  cardTitleGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  cardIconBox: {
    width: '36px',
    height: '36px',
    background: '#EEF4FF',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#0D3B7A',
    fontSize: '16px',
    flexShrink: 0,
  },
  cardTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#0D2850',
  },
  badgeCount: {
    background: '#EEF4FF',
    color: '#0D3B7A',
    fontSize: '11px',
    fontWeight: '700',
    padding: '3px 10px',
    borderRadius: '12px',
    border: '1px solid #C5D7F5',
  },

  // ── Table ────────────────────────────────
  tableWrap: { overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse' },
  th: {
    textAlign: 'left',
    padding: '12px 16px',
    fontSize: '11px',
    fontWeight: '700',
    color: '#8A9BBE',
    letterSpacing: '0.8px',
    textTransform: 'uppercase',
    borderBottom: '1px solid #EDF2F9',
    background: '#F8FAFD',
    whiteSpace: 'nowrap',
  },
  thRight: {
    textAlign: 'right',
    padding: '12px 16px',
    fontSize: '11px',
    fontWeight: '700',
    color: '#8A9BBE',
    letterSpacing: '0.8px',
    textTransform: 'uppercase',
    borderBottom: '1px solid #EDF2F9',
    background: '#F8FAFD',
  },
  td: {
    padding: '14px 16px',
    fontSize: '13.5px',
    color: '#3A506F',
    borderBottom: '1px solid #F3F7FC',
    verticalAlign: 'middle',
  },
  tdRight: {
    padding: '14px 16px',
    fontSize: '13.5px',
    borderBottom: '1px solid #F3F7FC',
    verticalAlign: 'middle',
    textAlign: 'right',
    whiteSpace: 'nowrap',
  },

  // Doc type cell
  docTypeName: {
    fontWeight: '700',
    color: '#0D2850',
    fontSize: '13.5px',
    marginBottom: '3px',
  },
  docTypeSub: {
    fontSize: '12px',
    color: '#9BB0CC',
    lineHeight: '1.4',
  },

  // Date
  dateText: {
    fontSize: '13px',
    color: '#6B80A3',
    whiteSpace: 'nowrap',
    fontVariantNumeric: 'tabular-nums',
  },

  // Action buttons
  actionsCell: {
    display: 'flex',
    gap: '8px',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btnView: {
    padding: '6px 14px',
    fontSize: '12px',
    fontWeight: '600',
    border: '1px solid #C5D7F5',
    borderRadius: '8px',
    background: '#F5F8FF',
    color: '#0D3B7A',
    cursor: 'pointer',
    transition: 'all 0.15s',
    lineHeight: '1',
  },
  btnCancel: {
    padding: '6px 14px',
    fontSize: '12px',
    fontWeight: '600',
    border: '1px solid #FCA5A5',
    borderRadius: '8px',
    background: '#FFF5F5',
    color: '#DC2626',
    cursor: 'pointer',
    transition: 'all 0.15s',
    lineHeight: '1',
  },

  // ── Table Footer ─────────────────────────
  tableFooter: {
    padding: '12px 20px',
    borderTop: '1px solid #EDF2F9',
    background: '#F8FAFD',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerText: {
    fontSize: '13px',
    color: '#8A9BBE',
    fontWeight: '500',
  },

  // ── Empty State ───────────────────────────
  emptyWrap: {
    textAlign: 'center',
    padding: '60px 40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  emptyIconCircle: {
    width: '68px',
    height: '68px',
    background: '#EEF4FF',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '18px',
    border: '2px dashed #C5D7F5',
    fontSize: '26px',
  },
  emptyTitle: {
    fontSize: '17px',
    fontWeight: '700',
    color: '#0D2850',
    margin: '0 0 6px',
  },
  emptyDesc: {
    fontSize: '14px',
    color: '#8A9BBE',
    margin: '0 0 24px',
    lineHeight: '1.5',
    maxWidth: '320px',
  },
  emptyBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '11px 24px',
    background: 'linear-gradient(135deg, #D4AF37 0%, #e8c766 100%)',
    color: '#3D2A00',
    border: 'none',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 4px 14px rgba(212,175,55,0.3)',
  },

  // ── Loading ───────────────────────────────
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px',
    color: '#8A9BBE',
    fontSize: '14px',
    gap: '10px',
    fontWeight: '500',
  },
};

// ── Status config ──────────────────────────────────────────────────
const STATUS_CONFIG = {
  pending: {
    bg: '#FFF8E6', color: '#956E00', border: '1px solid #FFE599', dot: '#D4AF37',
    label: 'Pending',
  },
  processing: {
    bg: '#F3EEFF', color: '#5B21B6', border: '1px solid #D4B8FF', dot: '#7C3AED',
    label: 'Processing',
  },
  ready: {
    bg: '#E6FAF3', color: '#1A6645', border: '1px solid #A3E6C9', dot: '#2E9966',
    label: 'Ready',
  },
  completed: {
    bg: '#E6FAF3', color: '#1A6645', border: '1px solid #A3E6C9', dot: '#2E9966',
    label: 'Completed',
  },
  cancelled: {
    bg: '#FFF0F0', color: '#9B1C1C', border: '1px solid #FCA5A5', dot: '#EF4444',
    label: 'Cancelled',
  },
};

function StatusBadge({ status }) {
  const raw = typeof status === 'object' ? status.value : status;
  const cfg = STATUS_CONFIG[raw] || {
    bg: '#F0F4FA', color: '#6B80A3', border: '1px solid #C5D7F5', dot: '#9BB0CC',
    label: raw || 'Unknown',
  };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      padding: '4px 11px', borderRadius: '20px', fontSize: '11px', fontWeight: '700',
      background: cfg.bg, color: cfg.color, border: cfg.border,
      textTransform: 'uppercase', letterSpacing: '0.5px',
    }}>
      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: cfg.dot, flexShrink: 0 }} />
      {cfg.label}
    </span>
  );
}

// ── Helpers ────────────────────────────────────────────────────────
const getValue = (field) =>
  typeof field === 'object' ? (field.display_value ?? field.value) : field;

const formatDate = (dateField) => {
  const v = typeof dateField === 'object' ? dateField.value : dateField;
  if (!v) return '—';
  return new Date(v).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

// ── Main Component ─────────────────────────────────────────────────
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
      <div style={styles.page}>
        <div style={styles.loading}>
          <span style={{ fontSize: '20px' }}>⏳</span>
          Loading your requests…
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>

      {/* ── Page Header ── */}
      <div style={styles.pageHeader}>
        <div style={styles.pageHeaderLeft}>
          <h1 style={styles.pageTitle}>My Requests</h1>
          <p style={styles.pageSubtitle}>View and manage your document requests</p>
        </div>
        <button
          style={styles.newRequestBtn}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(13,59,122,0.35)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(13,59,122,0.25)'; }}
        >
          <span style={{ fontSize: '16px', lineHeight: 1 }}>＋</span>
          New Request
        </button>
      </div>

      {/* ── Card ── */}
      <div style={styles.card}>

        {/* Card header */}
        <div style={styles.cardHeader}>
          <div style={styles.cardTitleGroup}>
            <div style={styles.cardIconBox}>📄</div>
            <span style={styles.cardTitle}>Recent Requests</span>
            {requests && (
              <span style={styles.badgeCount}>{requests.length} total</span>
            )}
          </div>
        </div>

        {/* ── Empty state ── */}
        {!requests || requests.length === 0 ? (
          <div style={styles.emptyWrap}>
            <div style={styles.emptyIconCircle}>📋</div>
            <h3 style={styles.emptyTitle}>No requests yet</h3>
            <p style={styles.emptyDesc}>
              You haven't submitted any document requests. Start your first one now.
            </p>
            <button style={styles.emptyBtn}>
              ＋ Submit a Request
            </button>
          </div>
        ) : (
          <>
            {/* ── Table ── */}
            <div style={styles.tableWrap}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Document Type</th>
                    <th style={styles.th}>Date Submitted</th>
                    <th style={styles.th}>Status</th>
                    <th style={styles.th}>Urgency</th>
                    <th style={styles.th}>Delivery</th>
                    <th style={styles.thRight}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((request, index) => {
                    const statusValue = typeof request.status === 'object' ? request.status.value : request.status;
                    const canCancel = statusValue === 'pending';
                    const purposeText = getValue(request.purpose) || '';
                    const docType = getValue(request.document_type);

                    return (
                      <tr
                        key={index}
                        onMouseEnter={e => e.currentTarget.style.background = '#F8FBFF'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        style={{ transition: 'background 0.15s' }}
                      >
                        {/* Document Type */}
                        <td style={styles.td}>
                          <div style={styles.docTypeName}>
                            {docType || 'Unknown'}
                          </div>
                          {purposeText && (
                            <div style={styles.docTypeSub}>
                              {purposeText.length > 50 ? purposeText.substring(0, 50) + '…' : purposeText}
                            </div>
                          )}
                        </td>

                        {/* Date */}
                        <td style={styles.td}>
                          <span style={styles.dateText}>{formatDate(request.submitted_date)}</span>
                        </td>

                        {/* Status */}
                        <td style={styles.td}>
                          <StatusBadge status={request.status} />
                        </td>

                        {/* Urgency */}
                        <td style={{ ...styles.td, color: '#6B80A3' }}>
                          {getValue(request.urgency_level) || '—'}
                        </td>

                        {/* Delivery */}
                        <td style={{ ...styles.td, color: '#6B80A3' }}>
                          {getValue(request.delivery_mode) || '—'}
                        </td>

                        {/* Actions */}
                        <td style={styles.tdRight}>
                          <div style={styles.actionsCell}>
                            <button
                              style={styles.btnView}
                              onMouseEnter={e => { e.currentTarget.style.background = '#EEF4FF'; e.currentTarget.style.borderColor = '#B5D0F5'; }}
                              onMouseLeave={e => { e.currentTarget.style.background = '#F5F8FF'; e.currentTarget.style.borderColor = '#C5D7F5'; }}
                              onClick={() => alert('View details functionality would be implemented here')}
                            >
                              View
                            </button>
                            {canCancel && (
                              <button
                                style={styles.btnCancel}
                                onMouseEnter={e => { e.currentTarget.style.background = '#FEE2E2'; }}
                                onMouseLeave={e => { e.currentTarget.style.background = '#FFF5F5'; }}
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

            {/* Table footer */}
            <div style={styles.tableFooter}>
              <span style={styles.footerText}>
                {requests.length} request{requests.length !== 1 ? 's' : ''} total
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}