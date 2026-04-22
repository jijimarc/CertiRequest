export class DocumentRequestService {
  constructor() {
    this.tableName = "x_2001423_certireq_document_request";
  }

  // Get all document requests for the current user
  async list(filters = {}) {
    try {
      const searchParams = new URLSearchParams(filters);
      searchParams.set('sysparm_display_value', 'all');
      searchParams.set('sysparm_limit', '100');
      searchParams.set('sysparm_order_by', 'submitted_date');
      searchParams.set('sysparm_order_direction', 'desc');
      
      const response = await fetch(`/api/now/table/${this.tableName}?${searchParams.toString()}`, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "X-UserToken": window.g_ck,
          "X-No-Response-Challenge": "true"
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to fetch requests');
      }

      const { result } = await response.json();
      return result ? result.map(record => this._formatRecord(record)) : [];
    } catch (error) {
      console.error('Error fetching requests:', error);
      throw error;
    }
  }

  // Create a new document request
  async create(data) {
    try {
      const response = await fetch(`/api/now/table/${this.tableName}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-UserToken": window.g_ck
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to create request');
      }

      return response.json();
    } catch (error) {
      console.error('Error creating request:', error);
      throw error;
    }
  }

  // Update a document request
  async update(sysId, data) {
    try {
      const response = await fetch(`/api/now/table/${this.tableName}/${sysId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-UserToken": window.g_ck
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to update request');
      }

      return response.json();
    } catch (error) {
      console.error('Error updating request:', error);
      throw error;
    }
  }

  // Delete a document request
  async delete(sysId) {
    try {
      const response = await fetch(`/api/now/table/${this.tableName}/${sysId}`, {
        method: "DELETE",
        headers: {
          "Accept": "application/json",
          "X-UserToken": window.g_ck
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to delete request');
      }

      return response.ok;
    } catch (error) {
      console.error('Error deleting request:', error);
      throw error;
    }
  }

  // Get a specific request by ID
  async getById(sysId) {
    try {
      const response = await fetch(`/api/now/table/${this.tableName}/${sysId}?sysparm_display_value=all`, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "X-UserToken": window.g_ck
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to fetch request');
      }

      const { result } = await response.json();
      return result ? this._formatRecord(result) : null;
    } catch (error) {
      console.error('Error fetching request:', error);
      throw error;
    }
  }

  // Get statistics for dashboard
  async getStats() {
    try {
      const allRequests = await this.list();
      
      const stats = {
        total: allRequests.length,
        pending: 0,
        completed: 0,
        payments: 0
      };

      allRequests.forEach(request => {
        const status = typeof request.status === 'object' ? request.status.value : request.status;
        const paymentRequired = typeof request.payment_required === 'object' ? 
          request.payment_required.value : request.payment_required;

        if (status === 'pending') stats.pending++;
        if (status === 'completed') stats.completed++;
        if (paymentRequired === 'paid') stats.payments++;
      });

      return stats;
    } catch (error) {
      console.error('Error fetching stats:', error);
      throw error;
    }
  }

  // Add this helper method right before the end of the class
  _formatRecord(record) {
    return {
      // Keep all original raw fields just in case
      ...record,
      
      // Clean up the new Customer Reference field
      customerName: record.customer ? record.customer.display_value : 'Unknown Customer',
      customerId: record.customer ? record.customer.value : null,
      
      // Clean up the choice dropdowns so React can read them easily
      docTypeClean: record.document_type ? record.document_type.display_value : 'Unknown Document',
      statusClean: record.status ? record.status.value : 'pending'
    };
  }
}