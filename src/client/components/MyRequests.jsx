import React from 'react';

export default function MyRequests({ requests, loading, service, onUpdate }) {
  if (loading) {
    return <div className="loading">Loading your requests...</div>;
  }

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

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="card-title">My Requests</h1>
        <p className="text-gray-600">View and manage your document requests</p>
      </div>

      <div className="card">
        <div className="card-content">
          {requests.length === 0 ? (
            <div className="text-center p-8">
              <div className="text-gray-500 mb-4">No requests found</div>
              <button className="btn btn-primary">Create New Request</button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-3 font-semibold">Document Type</th>
                    <th className="text-left p-3 font-semibold">Date Submitted</th>
                    <th className="text-left p-3 font-semibold">Status</th>
                    <th className="text-left p-3 font-semibold">Urgency</th>
                    <th className="text-left p-3 font-semibold">Delivery</th>
                    <th className="text-left p-3 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((request, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-3">
                        <div className="font-medium">
                          {typeof request.document_type === 'object' ? 
                            request.document_type.display_value : 
                            request.document_type}
                        </div>
                        <div className="text-sm text-gray-500">
                          {typeof request.purpose === 'object' ? 
                            request.purpose.display_value?.substring(0, 50) + '...' : 
                            request.purpose?.substring(0, 50) + '...'}
                        </div>
                      </td>
                      <td className="p-3">
                        {formatDate(request.submitted_date)}
                      </td>
                      <td className="p-3">
                        <span className={`badge ${getStatusBadgeClass(request.status)}`}>
                          {typeof request.status === 'object' ? 
                            request.status.display_value : 
                            request.status}
                        </span>
                      </td>
                      <td className="p-3">
                        {typeof request.urgency_level === 'object' ? 
                          request.urgency_level.display_value : 
                          request.urgency_level}
                      </td>
                      <td className="p-3">
                        {typeof request.delivery_mode === 'object' ? 
                          request.delivery_mode.display_value : 
                          request.delivery_mode}
                      </td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <button 
                            className="text-sm text-blue-600 hover:text-blue-800"
                            onClick={() => alert('View details functionality would be implemented here')}
                          >
                            View
                          </button>
                          {((typeof request.status === 'object' ? request.status.value : request.status) === 'pending') && (
                            <button 
                              className="text-sm text-red-600 hover:text-red-800"
                              onClick={() => handleCancelRequest(request)}
                            >
                              Cancel
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}