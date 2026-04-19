import React, { useState } from 'react';

export default function NewRequest({ onClose, onSubmit, loading: parentLoading }) {
  const [formData, setFormData] = useState({
    documentType: '',
    urgency: 'standard',
    purpose: '',
    deliveryMode: 'pickup'
  });
  const [localLoading, setLocalLoading] = useState(false);

  const loading = parentLoading || localLoading;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalLoading(true);
    try {
      await onSubmit(formData);
    } catch (err) {
      console.error(err);
    } finally {
      setLocalLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="card-title">New Document Request</h1>
        <p className="text-gray-600">Submit a new request for official documents</p>
      </div>

      <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="card-content">
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Request Details */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Request Details</h3>
              
              <div className="form-group">
                <label className="form-label">Document Type *</label>
                <select
                  name="documentType"
                  value={formData.documentType}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="">Select Document Type</option>
                  <option value="transcript">Official Transcript</option>
                  <option value="diploma">Diploma Copy</option>
                  <option value="certificate">Certificate of Completion</option>
                  <option value="enrollment">Enrollment Verification</option>
                  <option value="recommendation">Letter of Recommendation</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Urgency Level *</label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="standard">Standard (5-7 days)</option>
                  <option value="rush">Rush (2-3 days)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Purpose *</label>
                <textarea
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Please describe the purpose for this document request..."
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Delivery Mode *</label>
                <select
                  name="deliveryMode"
                  value={formData.deliveryMode}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="pickup">Pick-up from Office</option>
                  <option value="courier">Courier Delivery</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit Request'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}