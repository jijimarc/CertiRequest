import React, { useState } from 'react';

export default function HelpSupport() {
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

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
      a: 'You will receive email notifications at each stage of processing. You can also track your request status using the Track Request feature.',
    },
    {
      q: 'Can I cancel my request?',
      a: 'Yes, you can cancel your request as long as it hasn\'t been completed. Go to "My Requests" and click Cancel next to the request.',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '32px', maxWidth: '900px', margin: '0 auto', fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

      {/* Page Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a2e', margin: '0 0 6px' }}>Help & Support</h1>
        <p style={{ fontSize: '15px', color: '#6b7280', margin: 0 }}>Find answers to common questions and get in touch with our team.</p>
      </div>

      {/* FAQ Section */}
      <section style={{ marginBottom: '28px', background: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid #e5e7eb', background: '#f9fafb' }}>
          <h2 style={{ fontSize: '17px', fontWeight: '700', color: '#1a1a2e', margin: 0 }}>Frequently Asked Questions</h2>
        </div>
        <div style={{ padding: '8px 0' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: i < faqs.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: '100%', textAlign: 'left', padding: '16px 24px',
                  background: 'none', border: 'none', cursor: 'pointer',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  gap: '16px',
                }}
              >
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a2e' }}>{faq.q}</span>
                <span style={{
                  flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%',
                  background: openFaq === i ? '#1a1a2e' : '#e5e7eb',
                  color: openFaq === i ? '#fff' : '#6b7280',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px', fontWeight: '700', lineHeight: 1,
                  transition: 'all 0.2s',
                }}>
                  {openFaq === i ? '−' : '+'}
                </span>
              </button>
              {openFaq === i && (
                <div style={{ padding: '0 24px 16px', fontSize: '14px', color: '#4b5563', lineHeight: '1.6' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Information */}
      <section style={{ marginBottom: '28px', background: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid #e5e7eb', background: '#f9fafb' }}>
          <h2 style={{ fontSize: '17px', fontWeight: '700', color: '#1a1a2e', margin: 0 }}>Contact Information</h2>
        </div>
        <div style={{ padding: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {[
            {
              title: "Registrar's Office",
              email: 'registrar@university.edu',
              phone: '(555) 123-4567',
              location: 'Administration Building, Room 200',
              hours: 'Mon–Fri: 8:00 AM – 5:00 PM',
            },
            {
              title: 'Student Services',
              email: 'studentservices@university.edu',
              phone: '(555) 123-4568',
              location: 'Student Center, 1st Floor',
              hours: 'Mon–Fri: 9:00 AM – 6:00 PM',
            },
          ].map((office, i) => (
            <div key={i} style={{ background: '#f9fafb', borderRadius: '10px', padding: '20px', border: '1px solid #e5e7eb' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#1a1a2e', margin: '0 0 14px' }}>{office.title}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { icon: '✉️', text: office.email },
                  { icon: '📞', text: office.phone },
                  { icon: '📍', text: office.location },
                  { icon: '🕐', text: office.hours },
                ].map((item, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#4b5563' }}>
                    <span style={{ flexShrink: 0, fontSize: '14px' }}>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support Form */}
      <section style={{ background: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid #e5e7eb', background: '#f9fafb' }}>
          <h2 style={{ fontSize: '17px', fontWeight: '700', color: '#1a1a2e', margin: 0 }}>Submit a Support Request</h2>
        </div>
        <div style={{ padding: '24px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>✅</div>
              <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#1a1a2e', margin: '0 0 8px' }}>Request Submitted!</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', margin: '0 0 20px' }}>We'll get back to you within 1–2 business days.</p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                style={{ padding: '10px 20px', background: '#1a1a2e', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Name + Email row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                {[
                  { label: 'Name', key: 'name', type: 'text', placeholder: 'John Doe' },
                  { label: 'Email', key: 'email', type: 'email', placeholder: 'john@example.com' },
                ].map(({ label, key, type, placeholder }) => (
                  <div key={key}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>{label}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      required
                      value={form[key]}
                      onChange={e => setForm({ ...form, [key]: e.target.value })}
                      style={{
                        width: '100%', padding: '10px 12px', fontSize: '14px',
                        border: '1px solid #d1d5db', borderRadius: '8px',
                        outline: 'none', boxSizing: 'border-box', color: '#1a1a2e',
                        background: '#fff',
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Subject */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Subject</label>
                <select
                  required
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  style={{
                    width: '100%', padding: '10px 12px', fontSize: '14px',
                    border: '1px solid #d1d5db', borderRadius: '8px',
                    outline: 'none', boxSizing: 'border-box', color: form.subject ? '#1a1a2e' : '#9ca3af',
                    background: '#fff', appearance: 'auto',
                  }}
                >
                  <option value="">Select a subject</option>
                  <option value="technical">Technical Issue</option>
                  <option value="request">Request Status Inquiry</option>
                  <option value="payment">Payment Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Message</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Please describe your issue or question..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{
                    width: '100%', padding: '10px 12px', fontSize: '14px',
                    border: '1px solid #d1d5db', borderRadius: '8px',
                    outline: 'none', boxSizing: 'border-box', color: '#1a1a2e',
                    background: '#fff', resize: 'vertical', lineHeight: '1.5',
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: '11px 24px', background: '#1a1a2e', color: '#fff',
                  border: 'none', borderRadius: '8px', fontSize: '14px',
                  fontWeight: '600', cursor: 'pointer',
                }}
              >
                Submit Support Request
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}