import React, { useState } from 'react';
import { AIService } from '../services/AIService';

export default function NewRequest({ onClose, onSubmit, loading: parentLoading }) {
  const [formData, setFormData] = useState({
    studentName: '', 
    studentId: '',
    documentType: '',
    urgency: 'standard',
    purpose: '',
    deliveryMode: 'pickup'
  });
  const [localLoading, setLocalLoading] = useState(false);
  const [isExtracting, setIsExtracting] = useState(false);
  const loading = parentLoading || localLoading;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    setIsExtracting(true);
    try {
      const extractedData = await AIService.extractFromID(file); 
      
      setFormData(prev => ({
        ...prev,
        studentName: extractedData.name || prev.studentName,
        studentId: extractedData.studentId || prev.studentId,
        documentType: extractedData.suggestedDoc || prev.documentType,
        purpose: `Requesting document for ${extractedData.department || 'University'} requirements.`
      }));
    } catch (err) {
      console.error("AI Extraction failed", err);
    } finally {
      setIsExtracting(false);
    }
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
            <div className="form-group full-width" style={{ backgroundColor: '#f0f7ff', padding: '15px', borderRadius: '8px', border: '1px dashed #0066cc' }}>
                <label className="form-label" style={{ color: '#0066cc', fontWeight: 'bold' }}>
                  <span className="input-icon">✨</span> AI Auto-Fill
                </label>
                <p style={{ fontSize: '13px', color: '#555', marginBottom: '10px' }}>
                  Upload a photo of your Student ID to instantly pre-fill your details!
                </p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  disabled={isExtracting}
                  style={{ display: 'block', width: '100%', padding: '5px' }}
                />
                
                {/* Loading Spinner for AI */}
                {isExtracting && (
                  <div style={{ marginTop: '10px', color: '#0066cc', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                    <span className="spinner" style={{ width: '14px', height: '14px', borderTopColor: '#0066cc', marginRight: '8px' }}></span>
                    Gemini AI is scanning your ID...
                  </div>
                )}
              </div>

              {/* --- New Name & ID Fields --- */}
              <div className="form-group">
                <label className="form-label">Student Name</label>
                <input 
                  type="text" 
                  name="studentName"
                  value={formData.studentName} 
                  onChange={handleInputChange}
                  className="form-control" 
                  placeholder="e.g. John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Student ID</label>
                <input 
                  type="text" 
                  name="studentId"
                  value={formData.studentId} 
                  onChange={handleInputChange}
                  className="form-control" 
                  placeholder="e.g. STU001"
                  required
                />
              </div>

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