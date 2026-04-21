import React, { useState } from 'react';

const styles = {
  // Layout
  wrapper: {
    fontFamily: "'Plus Jakarta Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: '#F0F4FA',
    minHeight: '100%',
    padding: '36px 40px',
  },

  // Welcome / Header
  welcomeSection: {
    marginBottom: '32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    animation: 'fadeUpEntrance 0.7s cubic-bezier(0.2,0.8,0.2,1) forwards',
  },
  welcomeText: {},
  welcomeH1: {
    color: '#0D2850',
    fontSize: '28px',
    marginBottom: '6px',
    fontWeight: 800,
    margin: '0 0 6px',
  },
  welcomeSpan: { color: '#0D3B7A' },
  welcomeP: { color: '#6B80A3', fontSize: '15px', margin: 0 },
  welcomeBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'linear-gradient(135deg, #0D3B7A 0%, #1a4d9e 100%)',
    color: '#fff',
    padding: '10px 18px',
    borderRadius: '12px',
    fontSize: '13px',
    fontWeight: 600,
    boxShadow: '0 4px 16px rgba(13,59,122,0.3)',
  },

  // Card base
  card: {
    background: '#FFFFFF',
    borderRadius: '16px',
    padding: '28px',
    boxShadow: '0 2px 16px rgba(13,59,122,0.05)',
    border: '1px solid #E8EEF6',
    marginBottom: '24px',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '22px',
    paddingBottom: '18px',
    borderBottom: '1px solid #EDF2F9',
  },
  headerTitleGroup: { display: 'flex', alignItems: 'center', gap: '10px' },
  cardIcon: {
    width: '36px',
    height: '36px',
    background: '#EEF4FF',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#0D3B7A',
    flexShrink: 0,
  },
  cardTitle: { fontSize: '17px', fontWeight: 700, color: '#0D2850', margin: 0 },

  // FAQ
  faqItem: {
    borderBottom: '1px solid #F3F7FC',
  },
  faqItemLast: {
    borderBottom: 'none',
  },
  faqButton: {
    width: '100%',
    textAlign: 'left',
    padding: '16px 0',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px',
    fontFamily: 'inherit',
  },
  faqQuestion: { fontSize: '14px', fontWeight: 600, color: '#0D2850' },
  faqToggleActive: {
    flexShrink: 0,
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    background: '#0D3B7A',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: 1,
    transition: 'all 0.2s',
  },
  faqToggleInactive: {
    flexShrink: 0,
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    background: '#EEF4FF',
    color: '#0D3B7A',
    border: '1px solid #C5D7F5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: 1,
    transition: 'all 0.2s',
  },
  faqAnswer: {
    padding: '0 0 16px 0',
    fontSize: '14px',
    color: '#6B80A3',
    lineHeight: '1.6',
  },

  // Contact grid
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  contactOffice: {
    background: '#F5F8FF',
    borderRadius: '12px',
    padding: '20px',
    border: '1px solid #E0E9F8',
  },
  contactOfficeTitle: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#0D2850',
    margin: '0 0 14px',
  },
  contactRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    fontSize: '13px',
    color: '#3A506F',
    marginBottom: '8px',
  },
  contactIconWrap: {
    width: '28px',
    height: '28px',
    borderRadius: '8px',
    background: '#EEF4FF',
    color: '#0D3B7A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },

  // Form
  formRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' },
  formGroup: { marginBottom: '16px' },
  label: {
    display: 'block',
    fontSize: '12px',
    fontWeight: 700,
    color: '#8A9BBE',
    letterSpacing: '0.8px',
    textTransform: 'uppercase',
    marginBottom: '6px',
  },
  input: {
    width: '100%',
    padding: '10px 14px',
    fontSize: '13.5px',
    border: '1px solid #E0E9F8',
    borderRadius: '10px',
    outline: 'none',
    boxSizing: 'border-box',
    color: '#0D2850',
    background: '#F5F8FF',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  },
  select: {
    width: '100%',
    padding: '10px 14px',
    fontSize: '13.5px',
    border: '1px solid #E0E9F8',
    borderRadius: '10px',
    outline: 'none',
    boxSizing: 'border-box',
    color: '#0D2850',
    background: '#F5F8FF',
    fontFamily: 'inherit',
    appearance: 'auto',
    transition: 'border-color 0.2s',
  },
  textarea: {
    width: '100%',
    padding: '10px 14px',
    fontSize: '13.5px',
    border: '1px solid #E0E9F8',
    borderRadius: '10px',
    outline: 'none',
    boxSizing: 'border-box',
    color: '#0D2850',
    background: '#F5F8FF',
    fontFamily: 'inherit',
    resize: 'vertical',
    lineHeight: '1.6',
    transition: 'border-color 0.2s',
  },
  btnPrimary: {
    padding: '10px 22px',
    background: 'linear-gradient(135deg, #0D3B7A 0%, #1a4d9e 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '13px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: 'inherit',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'all 0.2s',
    boxShadow: '0 4px 14px rgba(13,59,122,0.25)',
  },

  // Success state
  successBox: {
    textAlign: 'center',
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  successIconCircle: {
    width: '68px',
    height: '68px',
    background: '#E6FAF3',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '18px',
    border: '2px dashed #A3E6C9',
    fontSize: '28px',
  },
  successH3: { fontSize: '18px', fontWeight: 700, color: '#0D2850', margin: '0 0 8px' },
  successP: { fontSize: '14px', color: '#6B80A3', margin: '0 0 24px' },
};

// SVG Icons
const IconQuestion = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const IconPhone = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IconMail = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconClock = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IconContact = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconSend = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);
const IconShield = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

export default function HelpSupport() {
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [hoverSubmit, setHoverSubmit] = useState(false);

  const faqs = [
    {
      q: 'How long does it take to process my request?',
      a: 'Standard requests take 5–7 business days, while rush requests are processed in 2–3 business days.',
    },
    {
      q: 'What documents can I request?',
      a: 'You can request official transcripts, diploma copies, certificates of completion, enrollment verification, and letters of recommendation.',
    },
    {
      q: 'How will I know when my document is ready?',
      a: "You will receive email notifications at each stage of processing. You can also track your request status using the Track Request feature.",
    },
    {
      q: 'Can I cancel my request?',
      a: "Yes, you can cancel your request as long as it hasn't been completed. Go to \"My Requests\" and click Cancel next to the request.",
    },
  ];

  const offices = [
    {
      title: "Registrar's Office",
      email: 'registrar@cit.edu',
      phone: '(032) 411-2000 loc. 201',
      location: 'Administration Building, Room 200',
      hours: 'Mon–Fri: 8:00 AM – 5:00 PM',
    },
    {
      title: 'Student Services',
      email: 'studentservices@cit.edu',
      phone: '(032) 411-2000 loc. 205',
      location: 'Student Center, 1st Floor',
      hours: 'Mon–Fri: 9:00 AM – 6:00 PM',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap');
        @keyframes fadeUpEntrance {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hs-input:focus { border-color: #B5D0F5 !important; box-shadow: 0 0 0 3px rgba(13,59,122,0.08) !important; background: #fff !important; }
        .hs-btn-primary:hover { background: linear-gradient(135deg,#0a2d6b 0%,#0D3B7A 100%) !important; box-shadow: 0 6px 20px rgba(13,59,122,0.35) !important; transform: translateY(-1px) !important; }
        .hs-faq-btn:hover { background: #F5F8FF !important; }
        .hs-card { animation: fadeUpEntrance 0.7s cubic-bezier(0.2,0.8,0.2,1) forwards; }
        .hs-card:nth-child(1) { animation-delay: 0.1s; }
        .hs-card:nth-child(2) { animation-delay: 0.2s; }
        .hs-card:nth-child(3) { animation-delay: 0.3s; }
      `}</style>

      <div style={styles.wrapper}>

        {/* Page Header */}
        <div style={{ marginBottom: '32px', opacity: 0, animation: 'fadeUpEntrance 0.7s cubic-bezier(0.2,0.8,0.2,1) 0.05s forwards', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h1 style={styles.welcomeH1}>
              Help & <span style={styles.welcomeSpan}>Support</span>
            </h1>
            <p style={styles.welcomeP}>Find answers to common questions and get in touch with our team.</p>
          </div>
          <div style={styles.welcomeBadge}>
            <IconShield />
            Support Center
          </div>
        </div>

        {/* FAQ Card */}
        <div className="hs-card" style={{ ...styles.card, opacity: 0 }}>
          <div style={styles.cardHeader}>
            <div style={styles.headerTitleGroup}>
              <div style={styles.cardIcon}><IconQuestion /></div>
              <h2 style={styles.cardTitle}>Frequently Asked Questions</h2>
            </div>
            <span style={{ background: '#EEF4FF', color: '#0D3B7A', fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '12px', border: '1px solid #C5D7F5' }}>
              {faqs.length} topics
            </span>
          </div>

          <div>
            {faqs.map((faq, i) => (
              <div key={i} style={i < faqs.length - 1 ? styles.faqItem : styles.faqItemLast}>
                <button
                  className="hs-faq-btn"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ ...styles.faqButton, borderRadius: '8px', padding: '14px 8px' }}
                >
                  <span style={styles.faqQuestion}>{faq.q}</span>
                  <span style={openFaq === i ? styles.faqToggleActive : styles.faqToggleInactive}>
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div style={styles.faqAnswer}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information Card */}
        <div className="hs-card" style={{ ...styles.card, opacity: 0 }}>
          <div style={styles.cardHeader}>
            <div style={styles.headerTitleGroup}>
              <div style={styles.cardIcon}><IconContact /></div>
              <h2 style={styles.cardTitle}>Contact Information</h2>
            </div>
          </div>

          <div style={styles.contactGrid}>
            {offices.map((office, i) => (
              <div key={i} style={styles.contactOffice}>
                <p style={styles.contactOfficeTitle}>{office.title}</p>
                {[
                  { icon: <IconMail />, text: office.email },
                  { icon: <IconPhone />, text: office.phone },
                  { icon: <IconPin />, text: office.location },
                  { icon: <IconClock />, text: office.hours },
                ].map((row, j) => (
                  <div key={j} style={styles.contactRow}>
                    <span style={styles.contactIconWrap}>{row.icon}</span>
                    <span style={{ lineHeight: 1.5, paddingTop: '6px' }}>{row.text}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Support Form Card */}
        <div className="hs-card" style={{ ...styles.card, opacity: 0 }}>
          <div style={styles.cardHeader}>
            <div style={styles.headerTitleGroup}>
              <div style={styles.cardIcon}><IconSend /></div>
              <h2 style={styles.cardTitle}>Submit a Support Request</h2>
            </div>
          </div>

          {submitted ? (
            <div style={styles.successBox}>
              <div style={styles.successIconCircle}>✓</div>
              <h3 style={styles.successH3}>Request Submitted!</h3>
              <p style={styles.successP}>We'll get back to you within 1–2 business days.</p>
              <button
                className="hs-btn-primary"
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                style={styles.btnPrimary}
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={styles.formRow}>
                {[
                  { label: 'Full Name', key: 'name', type: 'text', placeholder: 'e.g. Juan dela Cruz' },
                  { label: 'Email Address', key: 'email', type: 'email', placeholder: 'juan@cit.edu' },
                ].map(({ label, key, type, placeholder }) => (
                  <div key={key}>
                    <label style={styles.label}>{label}</label>
                    <input
                      className="hs-input"
                      type={type}
                      placeholder={placeholder}
                      required
                      value={form[key]}
                      onChange={e => setForm({ ...form, [key]: e.target.value })}
                      style={styles.input}
                    />
                  </div>
                ))}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Subject</label>
                <select
                  className="hs-input"
                  required
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  style={{ ...styles.select, color: form.subject ? '#0D2850' : '#8A9BBE' }}
                >
                  <option value="">Select a subject</option>
                  <option value="technical">Technical Issue</option>
                  <option value="request">Request Status Inquiry</option>
                  <option value="payment">Payment Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={styles.label}>Message</label>
                <textarea
                  className="hs-input"
                  rows={5}
                  required
                  placeholder="Please describe your issue or question in detail..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={styles.textarea}
                />
              </div>

              <button
                type="submit"
                className="hs-btn-primary"
                style={styles.btnPrimary}
              >
                <IconSend />
                Submit Support Request
              </button>
            </form>
          )}
        </div>

      </div>
    </>
  );
}