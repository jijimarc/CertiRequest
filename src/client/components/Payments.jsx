import React, { useState } from 'react';

export default function Payments({ requests, onPaymentComplete }) {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStep, setPaymentStep] = useState('list'); // list, checkout, success, receipt
  const [activeTab, setActiveTab] = useState('pending'); // pending, history

  // Filter requests
  const pendingRequests = requests.filter(r => {
    const payStatus = (r.paymentStatus || '').toString().toLowerCase();
    const reqStatus = (r.status || '').toString().toLowerCase();
    
    // Check for any "paid" indicator
    const isPaid = payStatus === 'paid' || payStatus === 'true' || payStatus === '1' || payStatus === 'yes';
    
    return reqStatus !== 'cancelled' && !isPaid;
  });

  const paidRequests = requests.filter(r => {
    const payStatus = (r.paymentStatus || '').toString().toLowerCase();
    const isPaid = payStatus === 'paid' || payStatus === 'true' || payStatus === '1' || payStatus === 'yes';
    return isPaid;
  });

  const handleStartPayment = (req) => {
    setSelectedRequest(req);
    setPaymentStep('checkout');
  };

  const handleViewReceipt = (req) => {
    setSelectedRequest(req);
    setPaymentStep('receipt');
  };

  const handleProcessPayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate bank processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    try {
      await onPaymentComplete(selectedRequest.id);
      setPaymentStep('success');
    } catch (err) {
      alert('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleBackToList = () => {
    if (paymentStep === 'success') {
      setActiveTab('history');
    }
    setPaymentStep('list');
    setSelectedRequest(null);
  };

  if (paymentStep === 'success') {
    return (
      <div className="payments-container" style={{ padding: '60px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: '70px', marginBottom: '20px', animation: 'scaleUp 0.5s ease-out' }}>🎉</div>
        <h2 style={{ color: '#0D3B7A', marginBottom: '10px', fontSize: '28px' }}>Payment Successful!</h2>
        <p style={{ color: '#6B80A3', marginBottom: '30px', fontSize: '16px' }}>
          Your payment for <strong>{selectedRequest?.documentType}</strong> has been received. 
          It has been moved to your <strong>Payment History</strong>.
        </p>
        <button className="btn btn-primary" onClick={handleBackToList} style={{ padding: '12px 30px' }}>
          View Payment History
        </button>
      </div>
    );
  }

  if (paymentStep === 'checkout' || paymentStep === 'receipt') {
    const isReceipt = paymentStep === 'receipt';
    return (
      <div className="checkout-overlay" style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        background: 'rgba(15, 23, 42, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000,
        backdropFilter: 'blur(4px)'
      }}>
        <div className="checkout-modal" style={{
          background: 'white', borderRadius: '24px', width: '480px', padding: '32px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', position: 'relative'
        }}>
          <button onClick={handleBackToList} style={{ position: 'absolute', top: '24px', right: '24px', border: 'none', background: '#f1f5f9', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
          
          <h2 style={{ color: '#0f172a', marginBottom: '24px', fontSize: '24px', fontWeight: '800' }}>
            {isReceipt ? 'Payment Receipt' : 'Secure Checkout'}
          </h2>
          
          <div style={{ background: isReceipt ? '#f0fdf4' : '#f8fafc', padding: '20px', borderRadius: '16px', marginBottom: '24px', border: isReceipt ? '1px solid #bbf7d0' : '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', color: '#64748b' }}>Reference ID</span>
              <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#0f172a' }}>{selectedRequest?.number}</span>
            </div>
            <p style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>{selectedRequest?.documentType}</p>
            <div style={{ borderTop: '1px dashed #cbd5e1', marginTop: '12px', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: '600', color: '#475569' }}>{isReceipt ? 'Amount Paid' : 'Total Amount'}</span>
              <span style={{ fontWeight: '900', fontSize: '24px', color: isReceipt ? '#16a34a' : '#0D3B7A' }}>₱{selectedRequest?.fee || '150.00'}</span>
            </div>
            {isReceipt && (
              <div style={{ marginTop: '12px', fontSize: '12px', color: '#16a34a', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ fontSize: '16px' }}>✔️</span> Paid on {new Date().toLocaleDateString()}
              </div>
            )}
          </div>

          {isReceipt ? (
            <div>
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '13px', textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '0.05em', marginBottom: '12px' }}>Payment Details</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <p style={{ fontSize: '11px', color: '#64748b', marginBottom: '4px' }}>Method</p>
                    <p style={{ fontSize: '14px', fontWeight: '600' }}>•••• 4242</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '11px', color: '#64748b', marginBottom: '4px' }}>Status</p>
                    <p style={{ fontSize: '14px', fontWeight: '600', color: '#16a34a' }}>Confirmed</p>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary" onClick={handleBackToList} style={{ width: '100%', padding: '14px' }}>Close Receipt</button>
            </div>
          ) : (
            <form onSubmit={handleProcessPayment}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#475569', marginBottom: '6px', textTransform: 'uppercase' }}>Cardholder Name</label>
                <input type="text" className="form-input" style={{ borderRadius: '10px' }} placeholder="JOHN DOE" required />
              </div>
              
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#475569', marginBottom: '6px', textTransform: 'uppercase' }}>Card Number</label>
                <div style={{ position: 'relative' }}>
                  <input type="text" className="form-input" style={{ borderRadius: '10px', paddingLeft: '45px' }} placeholder="4242 4242 4242 4242" required />
                  <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', fontSize: '20px' }}>💳</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#475569', marginBottom: '6px', textTransform: 'uppercase' }}>Expiry</label>
                  <input type="text" className="form-input" style={{ borderRadius: '10px' }} placeholder="MM/YY" required />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#475569', marginBottom: '6px', textTransform: 'uppercase' }}>CVV</label>
                  <input type="password" className="form-input" style={{ borderRadius: '10px' }} placeholder="•••" required />
                </div>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%', padding: '16px', fontSize: '16px', borderRadius: '12px', fontWeight: '700', boxShadow: '0 10px 15px -3px rgba(13, 59, 122, 0.3)' }}
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing Transaction...' : 'Pay ₱' + (selectedRequest?.fee || '150.00')}
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  const currentList = activeTab === 'pending' ? pendingRequests : paidRequests;

  return (
    <div className="payments-page" style={{ padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#0f172a', marginBottom: '8px' }}>Payments</h1>
          <p style={{ color: '#64748b', fontSize: '16px' }}>Manage your document fees and view payment history</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '8px', background: '#f1f5f9', padding: '6px', borderRadius: '14px', width: 'fit-content', marginBottom: '32px' }}>
        <button 
          onClick={() => setActiveTab('pending')}
          style={{
            padding: '10px 24px', borderRadius: '10px', border: 'none', cursor: 'pointer',
            background: activeTab === 'pending' ? 'white' : 'transparent',
            color: activeTab === 'pending' ? '#0f172a' : '#64748b',
            fontWeight: '700', fontSize: '14px', boxShadow: activeTab === 'pending' ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          Pending Payments ({pendingRequests.length})
        </button>
        <button 
          onClick={() => setActiveTab('history')}
          style={{
            padding: '10px 24px', borderRadius: '10px', border: 'none', cursor: 'pointer',
            background: activeTab === 'history' ? 'white' : 'transparent',
            color: activeTab === 'history' ? '#0f172a' : '#64748b',
            fontWeight: '700', fontSize: '14px', boxShadow: activeTab === 'history' ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          Payment History ({paidRequests.length})
        </button>
      </div>

      {currentList.length > 0 ? (
        <div className="payment-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '24px' }}>
          {currentList.map(req => (
            <div key={req.id} className="payment-card" style={{
              background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #e2e8f0',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'default'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{ fontSize: '11px', fontWeight: '800', color: '#0D3B7A', background: '#EEF4FF', padding: '6px 12px', borderRadius: '8px', letterSpacing: '0.05em' }}>
                  {req.number}
                </span>
                <span style={{ fontSize: '13px', color: '#94a3b8', fontWeight: '500' }}>{req.dateSubmitted}</span>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', marginBottom: '24px' }}>{req.documentType}</h3>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '24px' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '12px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', marginBottom: '4px' }}>
                    {activeTab === 'pending' ? 'Amount Due' : 'Paid Amount'}
                  </span>
                  <span style={{ fontSize: '26px', fontWeight: '900', color: activeTab === 'pending' ? '#0f172a' : '#16a34a' }}>₱{req.fee || '150.00'}</span>
                </div>
                {activeTab === 'pending' ? (
                  <button className="btn btn-primary" onClick={() => handleStartPayment(req)} style={{ padding: '12px 24px', borderRadius: '12px' }}>
                    Pay Now
                  </button>
                ) : (
                  <button className="btn btn-secondary" onClick={() => handleViewReceipt(req)} style={{ padding: '12px 24px', borderRadius: '12px', background: '#f8fafc', color: '#475569', border: '1px solid #e2e8f0' }}>
                    View Receipt
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '100px 20px', background: 'white', borderRadius: '24px', border: '2px dashed #e2e8f0' }}>
          <div style={{ fontSize: '64px', marginBottom: '24px' }}>
            {activeTab === 'pending' ? '✨' : '📜'}
          </div>
          <h3 style={{ color: '#0f172a', fontSize: '20px', fontWeight: '800', marginBottom: '8px' }}>
            {activeTab === 'pending' ? 'All caught up!' : 'No payment history yet'}
          </h3>
          <p style={{ color: '#64748b' }}>
            {activeTab === 'pending' ? 'You have no pending payments at the moment.' : 'Your receipts will appear here once you make a payment.'}
          </p>
        </div>
      )}
    </div>
  );
}
