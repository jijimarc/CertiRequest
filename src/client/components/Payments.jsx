import React from 'react';

export default function Payments({ requests, loading }) {
  if (loading) {
    return <div className="loading">Loading payment information...</div>;
  }

  const paymentRequests = requests.filter(request => {
    const paymentRequired = typeof request.payment_required === 'object' ? 
      request.payment_required.value : request.payment_required;
    return paymentRequired && paymentRequired !== 'no';
  });

  const formatDate = (dateField) => {
    const dateValue = typeof dateField === 'object' ? dateField.value : dateField;
    if (!dateValue) return 'N/A';
    return new Date(dateValue).toLocaleDateString();
  };

  const getPaymentStatusBadgeClass = (paymentStatus) => {
    const statusValue = typeof paymentStatus === 'object' ? paymentStatus.value : paymentStatus;
    switch (statusValue) {
      case 'pending': return 'badge-pending';
      case 'paid': return 'badge-completed';
      default: return 'badge-pending';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="card-title">Payments</h1>
        <p className="text-gray-600">Manage payment for your document requests</p>
      </div>

      <div className="card">
        <div className="card-content">
          {paymentRequests.length === 0 ? (
            <div className="text-center p-8">
              <div className="text-gray-500 mb-4">No payment requests found</div>
              <p className="text-sm text-gray-400">All your current requests are free of charge.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-3 font-semibold">Document Type</th>
                    <th className="text-left p-3 font-semibold">Request Date</th>
                    <th className="text-left p-3 font-semibold">Amount</th>
                    <th className="text-left p-3 font-semibold">Payment Status</th>
                    <th className="text-left p-3 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentRequests.map((request, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-3">
                        <div className="font-medium">
                          {typeof request.document_type === 'object' ? 
                            request.document_type.display_value : 
                            request.document_type}
                        </div>
                      </td>
                      <td className="p-3">
                        {formatDate(request.submitted_date)}
                      </td>
                      <td className="p-3">
                        <div className="font-medium">
                          ${typeof request.payment_amount === 'object' ? 
                            request.payment_amount.display_value || '25.00' : 
                            request.payment_amount || '25.00'}
                        </div>
                      </td>
                      <td className="p-3">
                        <span className={`badge ${getPaymentStatusBadgeClass(request.payment_required)}`}>
                          {typeof request.payment_required === 'object' ? 
                            request.payment_required.display_value : 
                            request.payment_required}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          {((typeof request.payment_required === 'object' ? 
                            request.payment_required.value : request.payment_required) === 'pending') && (
                            <button 
                              className="btn btn-primary btn-sm"
                              onClick={() => alert('Payment gateway integration would be implemented here')}
                            >
                              Pay Now
                            </button>
                          )}
                          <button 
                            className="text-sm text-blue-600 hover:text-blue-800"
                            onClick={() => alert('Receipt/invoice functionality would be implemented here')}
                          >
                            View Receipt
                          </button>
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