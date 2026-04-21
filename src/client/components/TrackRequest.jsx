import React, { useState } from 'react';

const S = {
  wrapper: {
    fontFamily: "'Plus Jakarta Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: '#F0F4FA',
    minHeight: '100%',
    padding: '36px 40px',
  },
  pageHeader: {
    marginBottom: '36px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    opacity: 0,
    animation: 'fadeUpEntrance 0.7s cubic-bezier(0.2,0.8,0.2,1) 0.05s forwards',
  },
  h1: { color: '#0D2850', fontSize: '28px', fontWeight: 800, margin: '0 0 6px' },
  span: { color: '#0D3B7A' },
  subtext: { color: '#6B80A3', fontSize: '15px', margin: 0 },
  badge: {
    display: 'flex', alignItems: 'center', gap: '8px',
    background: 'linear-gradient(135deg, #0D3B7A 0%, #1a4d9e 100%)',
    color: '#fff', padding: '10px 18px', borderRadius: '12px',
    fontSize: '13px', fontWeight: 600,
    boxShadow: '0 4px 16px rgba(13,59,122,0.3)',
  },

  // Hero search card
  heroCard: {
    background: '#FFFFFF',
    borderRadius: '20px',
    padding: '48px 56px',
    boxShadow: '0 4px 32px rgba(13,59,122,0.08)',
    border: '1px solid #E8EEF6',
    maxWidth: '720px',
    margin: '0 auto 32px auto',
    textAlign: 'center',
    opacity: 0,
    animation: 'fadeUpEntrance 0.7s cubic-bezier(0.2,0.8,0.2,1) 0.15s forwards',
  },
  heroIconCircle: {
    width: '72px', height: '72px',
    background: 'linear-gradient(135deg, #EEF4FF, #dce8ff)',
    borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 20px auto',
    color: '#0D3B7A',
    border: '2px dashed #C5D7F5',
  },
  heroTitle: { fontSize: '22px', fontWeight: 800, color: '#0D2850', margin: '0 0 8px' },
  heroDesc: { fontSize: '14px', color: '#6B80A3', margin: '0 0 32px', lineHeight: 1.6 },

  inputRow: {
    display: 'flex', gap: '12px', alignItems: 'stretch',
  },
  inputWrap: { flex: 1, position: 'relative' },
  inputIcon: {
    position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)',
    color: '#8A9BBE', pointerEvents: 'none',
  },
  input: {
    width: '100%',
    padding: '16px 18px 16px 50px',
    fontSize: '15px',
    border: '2px solid #E0E9F8',
    borderRadius: '12px',
    outline: 'none',
    boxSizing: 'border-box',
    color: '#0D2850',
    background: '#F5F8FF',
    fontFamily: 'inherit',
    fontWeight: 500,
    transition: 'border-color 0.2s, box-shadow 0.2s',
    letterSpacing: '0.3px',
  },
  trackBtn: {
    padding: '16px 32px',
    background: 'linear-gradient(135deg, #0D3B7A 0%, #1a4d9e 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    fontSize: '15px',
    fontWeight: 700,
    cursor: 'pointer',
    fontFamily: 'inherit',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.2s',
    boxShadow: '0 4px 16px rgba(13,59,122,0.3)',
    whiteSpace: 'nowrap',
  },
  trackBtnDisabled: {
    opacity: 0.65, cursor: 'not-allowed',
  },
  hintRow: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    gap: '6px', marginTop: '16px',
    fontSize: '12px', color: '#8A9BBE',
  },

  errorBox: {
    marginTop: '20px',
    padding: '14px 18px',
    background: '#FFF0F0',
    border: '1px solid #FCA5A5',
    borderRadius: '10px',
    display: 'flex', alignItems: 'center', gap: '10px',
    fontSize: '13.5px', color: '#9B1C1C', fontWeight: 500,
    textAlign: 'left',
  },

  // Result card
  resultCard: {
    background: '#FFFFFF',
    borderRadius: '16px',
    boxShadow: '0 2px 16px rgba(13,59,122,0.06)',
    border: '1px solid #E8EEF6',
    maxWidth: '720px',
    margin: '0 auto',
    overflow: 'hidden',
    opacity: 0,
    animation: 'fadeUpEntrance 0.6s cubic-bezier(0.2,0.8,0.2,1) forwards',
  },
  resultHeader: {
    padding: '22px 28px',
    borderBottom: '1px solid #EDF2F9',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  },
  resultHeaderLeft: { display: 'flex', alignItems: 'center', gap: '12px' },
  resultIconWrap: {
    width: '38px', height: '38px',
    background: '#EEF4FF', borderRadius: '10px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: '#0D3B7A', flexShrink: 0,
  },
  resultTitle: { fontSize: '17px', fontWeight: 700, color: '#0D2850', margin: 0 },
  resultSubtitle: { fontSize: '12px', color: '#8A9BBE', margin: '2px 0 0', fontFamily: "'DM Mono', monospace" },

  resultBody: { padding: '28px' },

  detailGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    marginBottom: '24px',
  },
  detailItem: {
    background: '#F5F8FF',
    borderRadius: '12px',
    padding: '16px 18px',
    border: '1px solid #E0E9F8',
  },
  detailItemFull: {
    background: '#F5F8FF',
    borderRadius: '12px',
    padding: '16px 18px',
    border: '1px solid #E0E9F8',
    gridColumn: '1 / -1',
  },
  detailLabel: {
    fontSize: '11px', fontWeight: 700, color: '#8A9BBE',
    textTransform: 'uppercase', letterSpacing: '0.8px', margin: '0 0 6px',
  },
  detailValue: {
    fontSize: '14px', fontWeight: 600, color: '#0D2850', margin: 0,
  },

  // Status badges
  statusBadge: {
    display: 'inline-flex', alignItems: 'center', gap: '6px',
    padding: '5px 12px', borderRadius: '20px',
    fontSize: '11px', fontWeight: 700,
    textTransform: 'uppercase', letterSpacing: '0.5px',
  },
  statusDot: {
    width: '6px', height: '6px', borderRadius: '50', flexShrink: 0,
  },

  // Timeline
  timelineWrap: { marginTop: '0' },
  timelineTitle: {
    fontSize: '13px', fontWeight: 700, color: '#0D2850',
    margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: '8px',
  },
  timeline: { display: 'flex', flexDirection: 'column', gap: '0' },
  timelineStep: {
    display: 'flex', gap: '14px', paddingBottom: '20px', position: 'relative',
  },
  timelineStepLast: {
    display: 'flex', gap: '14px',
  },
  timelineLine: {
    position: 'absolute', left: '15px', top: '32px', bottom: 0,
    width: '2px', background: '#EDF2F9',
  },
  timelineDot: {
    width: '32px', height: '32px', borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0, position: 'relative', zIndex: 1,
    fontSize: '14px', fontWeight: 700,
  },
  timelineContent: { flex: 1, paddingTop: '4px' },
  timelineStepLabel: { fontSize: '13px', fontWeight: 600, color: '#0D2850', margin: '0 0 2px' },
  timelineStepDesc: { fontSize: '12px', color: '#8A9BBE' },
};

const statusConfig = {
  pending:    { label: 'Pending',    bg: '#FFF8E6', color: '#956E00', border: '#FFE599', dot: '#D4AF37' },
  processing: { label: 'Processing', bg: '#F3EEFF', color: '#5B21B6', border: '#D4B8FF', dot: '#7C3AED' },
  ready:      { label: 'Ready',      bg: '#EEF4FF', color: '#0D3B7A', border: '#B5D0F5', dot: '#0D3B7A' },
  completed:  { label: 'Completed',  bg: '#E6FAF3', color: '#1A6645', border: '#A3E6C9', dot: '#2E9966' },
  cancelled:  { label: 'Cancelled',  bg: '#FFF0F0', color: '#9B1C1C', border: '#FCA5A5', dot: '#EF4444' },
};

const timelineSteps = [
  { key: 'submitted',  label: 'Submitted',   desc: 'Request received by the Registrar' },
  { key: 'processing', label: 'Processing',  desc: 'Document is being prepared' },
  { key: 'ready',      label: 'Ready',        desc: 'Document is ready for release' },
  { key: 'completed',  label: 'Completed',   desc: 'Document released / delivered' },
];

const stepOrder = ['pending', 'processing', 'ready', 'completed'];

function getStepState(stepKey, currentStatus) {
  const currentIdx = stepOrder.indexOf(currentStatus);
  const stepMap = { submitted: 0, processing: 1, ready: 2, completed: 3 };
  const stepIdx = stepMap[stepKey];
  if (stepIdx < currentIdx) return 'done';
  if (stepIdx === currentIdx) return 'active';
  return 'upcoming';
}

// Icons
const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);
const IconTrack = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);
const IconDoc = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
  </svg>
);
const IconError = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);
const IconShield = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconInfo = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
  </svg>
);
const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export default function TrackRequest({ service }) {
  const [trackingId, setTrackingId] = useState('');
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTrack = async (e) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    setLoading(true);
    setError('');
    setRequest(null);
    try {
      const result = await service.getById(trackingId.trim());
      setRequest(result);
    } catch (err) {
      setError('Request not found or you do not have permission to view it.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateField) => {
    const v = typeof dateField === 'object' ? dateField?.value : dateField;
    if (!v) return 'N/A';
    return new Date(v).toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const getValue = (field) =>
    typeof field === 'object' ? (field?.display_value ?? field?.value ?? '—') : (field ?? '—');

  const currentStatus = getValue(request?.status)?.toLowerCase();
  const cfg = statusConfig[currentStatus] || statusConfig.pending;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap');
        @keyframes fadeUpEntrance {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tr-input:focus {
          border-color: #0D3B7A !important;
          box-shadow: 0 0 0 3px rgba(13,59,122,0.1) !important;
          background: #fff !important;
        }
        .tr-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #0a2d6b 0%, #0D3B7A 100%) !important;
          box-shadow: 0 6px 22px rgba(13,59,122,0.38) !important;
          transform: translateY(-1px) !important;
        }
        .tr-btn:disabled { opacity: 0.65; cursor: not-allowed; }
      `}</style>

      <div style={S.wrapper}>

        {/* Page Header */}
        <div style={S.pageHeader}>
          <div>
            <h1 style={S.h1}>Track <span style={S.span}>Request</span></h1>
            <p style={S.subtext}>Enter your Request ID to view real-time status updates.</p>
          </div>
          <div style={S.badge}>
            <IconShield />
            Live Tracking
          </div>
        </div>

        {/* Hero Search Card */}
        <div style={S.heroCard}>
          <div style={S.heroIconCircle}><IconTrack /></div>
          <h2 style={S.heroTitle}>Where is my document?</h2>
          <p style={S.heroDesc}>
            Paste your Request ID below to instantly check the processing status<br />
            of your document request.
          </p>

          <form onSubmit={handleTrack} style={S.inputRow}>
            <div style={S.inputWrap}>
              <span style={S.inputIcon}><IconSearch /></span>
              <input
                className="tr-input"
                type="text"
                placeholder="e.g. 1234abcd5678efgh..."
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                style={S.input}
                autoComplete="off"
                spellCheck={false}
              />
            </div>
            <button
              type="submit"
              className="tr-btn"
              disabled={loading || !trackingId.trim()}
              style={S.trackBtn}
            >
              {loading ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: 'spin 0.8s linear infinite' }}>
                    <circle cx="12" cy="12" r="10" strokeOpacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" />
                  </svg>
                  Tracking…
                </>
              ) : (
                <>
                  <IconSearch />
                  Track Request
                </>
              )}
            </button>
          </form>

          <div style={S.hintRow}>
            <IconInfo />
            Your Request ID was sent to your email when you submitted the request.
          </div>

          {error && (
            <div style={S.errorBox}>
              <IconError />
              {error}
            </div>
          )}
        </div>

        {/* Result Card */}
        {request && (
          <div style={S.resultCard}>

            {/* Result Header */}
            <div style={S.resultHeader}>
              <div style={S.resultHeaderLeft}>
                <div style={S.resultIconWrap}><IconDoc /></div>
                <div>
                  <p style={S.resultTitle}>Request Details</p>
                  <p style={S.resultSubtitle}>ID: {trackingId}</p>
                </div>
              </div>
              <span style={{
                ...S.statusBadge,
                background: cfg.bg,
                color: cfg.color,
                border: `1px solid ${cfg.border}`,
              }}>
                <span style={{ ...S.statusDot, background: cfg.dot }} />
                {cfg.label}
              </span>
            </div>

            <div style={S.resultBody}>

              {/* Detail Grid */}
              <div style={S.detailGrid}>
                <div style={S.detailItem}>
                  <p style={S.detailLabel}>Document Type</p>
                  <p style={S.detailValue}>{getValue(request.document_type)}</p>
                </div>
                <div style={S.detailItem}>
                  <p style={S.detailLabel}>Urgency Level</p>
                  <p style={S.detailValue}>{getValue(request.urgency_level)}</p>
                </div>
                <div style={S.detailItem}>
                  <p style={S.detailLabel}>Submitted Date</p>
                  <p style={S.detailValue}>{formatDate(request.submitted_date)}</p>
                </div>
                <div style={S.detailItem}>
                  <p style={S.detailLabel}>Delivery Mode</p>
                  <p style={S.detailValue}>{getValue(request.delivery_mode)}</p>
                </div>
                {request.completion_date && (
                  <div style={S.detailItem}>
                    <p style={S.detailLabel}>Completion Date</p>
                    <p style={S.detailValue}>{formatDate(request.completion_date)}</p>
                  </div>
                )}
                <div style={request.completion_date ? S.detailItem : S.detailItemFull}>
                  <p style={S.detailLabel}>Purpose</p>
                  <p style={S.detailValue}>{getValue(request.purpose)}</p>
                </div>
              </div>

              {/* Progress Timeline */}
              <div style={{ borderTop: '1px solid #EDF2F9', paddingTop: '24px' }}>
                <p style={S.timelineTitle}>
                  <span style={{ width: '28px', height: '28px', background: '#EEF4FF', borderRadius: '8px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#0D3B7A' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  </span>
                  Processing Timeline
                </p>

                <div style={S.timeline}>
                  {timelineSteps.map((step, i) => {
                    const state = getStepState(step.key, currentStatus);
                    const isLast = i === timelineSteps.length - 1;
                    const dotColors = {
                      done:     { bg: '#E6FAF3', color: '#2E9966', border: '#A3E6C9' },
                      active:   { bg: '#EEF4FF', color: '#0D3B7A', border: '#B5D0F5' },
                      upcoming: { bg: '#F5F8FF', color: '#C5D7F5', border: '#E0E9F8' },
                    };
                    const dc = dotColors[state];

                    return (
                      <div key={step.key} style={isLast ? S.timelineStepLast : { ...S.timelineStep }}>
                        {!isLast && <div style={S.timelineLine} />}
                        <div style={{
                          ...S.timelineDot,
                          background: dc.bg,
                          color: dc.color,
                          border: `2px solid ${dc.border}`,
                        }}>
                          {state === 'done' ? <IconCheck /> : (
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: dc.color, opacity: state === 'upcoming' ? 0.4 : 1 }} />
                          )}
                        </div>
                        <div style={S.timelineContent}>
                          <p style={{
                            ...S.timelineStepLabel,
                            color: state === 'upcoming' ? '#8A9BBE' : '#0D2850',
                          }}>{step.label}</p>
                          <p style={S.timelineStepDesc}>{step.desc}</p>
                        </div>
                        {state === 'active' && (
                          <span style={{
                            alignSelf: 'flex-start', marginTop: '4px',
                            background: '#EEF4FF', color: '#0D3B7A',
                            border: '1px solid #C5D7F5',
                            fontSize: '10px', fontWeight: 700,
                            padding: '2px 10px', borderRadius: '20px',
                            textTransform: 'uppercase', letterSpacing: '0.5px',
                          }}>
                            Current
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </>
  );
}