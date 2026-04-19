import React from 'react';

export default function HelpSupport() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="card-title">Help & Support</h1>
        <p className="text-gray-600">Find answers to common questions and get support</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* FAQ Section */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Frequently Asked Questions</h2>
          </div>
          <div className="card-content">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">How long does it take to process my request?</h3>
                <p className="text-gray-600">Standard requests take 5-7 business days, while rush requests are processed in 2-3 business days.</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">What documents can I request?</h3>
                <p className="text-gray-600">You can request official transcripts, diploma copies, certificates of completion, enrollment verification, and letters of recommendation.</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">How will I know when my document is ready?</h3>
                <p className="text-gray-600">You will receive email notifications at each stage of processing. You can also track your request status using the Track Request feature.</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Can I cancel my request?</h3>
                <p className="text-gray-600">Yes, you can cancel your request as long as it hasn't been completed. Go to "My Requests" and click Cancel next to the request.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Contact Information</h2>
          </div>
          <div className="card-content">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Registrar's Office</h3>
                <div className="space-y-1 text-gray-600">
                  <p>📧 registrar@university.edu</p>
                  <p>📞 (555) 123-4567</p>
                  <p>🏢 Administration Building, Room 200</p>
                  <p>⏰ Mon-Fri: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Student Services</h3>
                <div className="space-y-1 text-gray-600">
                  <p>📧 studentservices@university.edu</p>
                  <p>📞 (555) 123-4568</p>
                  <p>🏢 Student Center, 1st Floor</p>
                  <p>⏰ Mon-Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Form */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Submit a Support Request</h2>
          </div>
          <div className="card-content">
            <form onSubmit={(e) => { e.preventDefault(); alert('Support request submitted!'); }}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-input" required />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-input" required />
                </div>
              </div>
              
              <div className="form-group mb-4">
                <label className="form-label">Subject</label>
                <select className="form-select" required>
                  <option value="">Select a subject</option>
                  <option value="technical">Technical Issue</option>
                  <option value="request">Request Status Inquiry</option>
                  <option value="payment">Payment Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group mb-6">
                <label className="form-label">Message</label>
                <textarea 
                  className="form-textarea" 
                  rows="4" 
                  placeholder="Please describe your issue or question..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">
                Submit Support Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}