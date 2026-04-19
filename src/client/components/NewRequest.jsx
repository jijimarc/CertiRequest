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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">New Document Request</h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>

        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              {/* Document Type */}
              <div className="form-group full-width">
                <label className="form-label">
                  <span className="input-icon">📄</span> Document Type *
                </label>
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

              {/* Urgency */}
              <div className="form-group">
                <label className="form-label">
                  <span className="input-icon">⚡</span> Urgency Level *
                </label>
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

              {/* Delivery */}
              <div className="form-group">
                <label className="form-label">
                  <span className="input-icon">🚚</span> Delivery Mode *
                </label>
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

              {/* Purpose */}
              <div className="form-group full-width">
                <label className="form-label">
                  <span className="input-icon">📝</span> Purpose of Request *
                </label>
                <textarea
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  className="form-textarea"
                  style={{ minHeight: '120px' }}
                  placeholder="Tell us why you need this document (e.g., Job application, further studies)..."
                  required
                />
              </div>
            </div>

            <div className="modal-footer">
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
                style={{ minWidth: '160px' }}
              >
                {loading ? (
                  <>
                    <span className="spinner" style={{ width: '16px', height: '16px', borderTopColor: '#fff', marginRight: '10px' }}></span>
                    Processing...
                  </>
                ) : 'Submit Request'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}