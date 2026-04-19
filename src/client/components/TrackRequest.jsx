import React, { useState } from 'react';

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
      const result = await service.getById(trackingId);
      setRequest(result);
    } catch (err) {
      setError('Request not found or you do not have permission to view it.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateField) => {
    const dateValue = typeof dateField === 'object' ? dateField.value : dateField;
    if (!dateValue) return 'N/A';
    return new Date(dateValue).toLocaleDateString();
  };

  const getStatusBadgeClass = (status) => {
    const statusValue = typeof status === 'object' ? status.value : status;
    switch (statusValue) {
      case 'pending': return 'badge-pending';
      case 'processing': return 'badge-processing';
      case 'ready': return 'badge-ready';
      case 'completed': return 'badge-completed';
      case 'cancelled': return 'badge-cancelled';
      default: return 'badge-pending';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="card-title">Track Request</h1>
        <p className="text-gray-600">Enter your request ID to track its status</p>
      </div>

      <div className="card mb-6" style={{ maxWidth: '500px', margin: '0 auto 2rem auto' }}>
        <div className="card-content">
          <form onSubmit={handleTrack} className="flex gap-3">
            <input
              type="text"
              placeholder="Enter Request ID (sys_id)"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="form-input flex-1"
            />
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Tracking...' : 'Track'}
            </button>
          </form>
          
          {error && (
            <div className="mt-3 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
        </div>
      </div>

      {request && (
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="card-header">
            <h2 className="card-title">Request Details</h2>
          </div>
          <div className="card-content">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <strong>Document Type:</strong>
                <div className="mt-1">
                  {typeof request.document_type === 'object' ? 
                    request.document_type.display_value : 
                    request.document_type}
                </div>
              </div>
              
              <div>
                <strong>Status:</strong>
                <div className="mt-1">
                  <span className={`badge ${getStatusBadgeClass(request.status)}`}>
                    {typeof request.status === 'object' ? 
                      request.status.display_value : 
                      request.status}
                  </span>
                </div>
              </div>
              
              <div>
                <strong>Submitted Date:</strong>
                <div className="mt-1">{formatDate(request.submitted_date)}</div>
              </div>
              
              <div>
                <strong>Urgency Level:</strong>
                <div className="mt-1">
                  {typeof request.urgency_level === 'object' ? 
                    request.urgency_level.display_value : 
                    request.urgency_level}
                </div>
              </div>
              
              <div className="col-span-2">
                <strong>Purpose:</strong>
                <div className="mt-1">
                  {typeof request.purpose === 'object' ? 
                    request.purpose.display_value : 
                    request.purpose}
                </div>
              </div>
              
              <div>
                <strong>Delivery Mode:</strong>
                <div className="mt-1">
                  {typeof request.delivery_mode === 'object' ? 
                    request.delivery_mode.display_value : 
                    request.delivery_mode}
                </div>
              </div>
              
              {request.completion_date && (
                <div>
                  <strong>Completion Date:</strong>
                  <div className="mt-1">{formatDate(request.completion_date)}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}