
// 1. CONFIGURATIONS & DICTIONARIES
export const STATUS_CONFIG = {
	pending: {
		bg: '#FFF8E6', color: '#956E00', border: '1px solid #FFE599', dot: '#D4AF37', label: 'Pending',
	},
	verified: {
		bg: '#EEF4FF', color: '#0D3B7A', border: '1px solid #B5D0F5', dot: '#0D3B7A', label: 'Verified',
	},
	processing: {
		bg: '#F3EEFF', color: '#5B21B6', border: '1px solid #D4B8FF', dot: '#7C3AED', label: 'Processing',
	},
	completed: {
		bg: '#E6FAF3', color: '#1A6645', border: '1px solid #A3E6C9', dot: '#2E9966', label: 'Completed',
	},
	cancelled: {
		bg: '#FFF0F0', color: '#9B1C1C', border: '1px solid #FCA5A5', dot: '#EF4444', label: 'Cancelled',
	},
};

export const URGENCY_CONFIG = {
	rush: { bg: '#FFF0F0', color: '#991b1b', border: '1px solid #fecaca', label: 'Rush' },
	standard: { bg: '#f8fafc', color: '#475569', border: '1px solid #e2e8f0', label: 'Standard' },
};

export const TRACKER_STEPS = ['Pending', 'Verified', 'Processing', 'Completed'];
export const TRACKER_ORDER = ['pending', 'verified', 'processing', 'completed'];

// 2. DASHBOARD KPI LOGIC
/**
 * Calculates high-level statistics for the Staff Dashboard summary cards.
 * @param {Array} requests - The array of document request objects.
 * @returns {Object} - Object containing total, pending, completed counts, and total payments.
 */
export const getDashboardStats = (requests = []) => {
	const stats = {
		total: requests.length,
		pending: 0,
		completed: 0,
		payments: 0,
	};

	requests.forEach((req) => {
		const status = (req.status || '').toLowerCase();
		
		if (status === 'pending') stats.pending += 1;
		if (status === 'completed') stats.completed += 1;

		// Use payment_amount or fee depending on your ServiceNow schema
		const fee = parseFloat(req.payment_amount || req.fee || 0);
		if (!isNaN(fee)) {
			stats.payments += fee;
		}
	});

	return stats;
};

// 3. QUEUE FILTERING LOGIC
/**
 * Filters the request queue based on search input and status dropdown.
 * @param {Array} requests - The raw array of requests.
 * @param {String} searchTerm - User input from the search bar.
 * @param {String} filterStatus - Selected status from the dropdown.
 * @returns {Array} - The filtered array of requests.
 */
export const filterRequests = (requests, searchTerm, filterStatus) => {
	return requests.filter(req => {
		// Check if the search term matches the Request ID or User Name
		const matchesSearch = 
			(req.number && req.number.toLowerCase().includes(searchTerm.toLowerCase())) ||
			(req.userName && req.userName.toLowerCase().includes(searchTerm.toLowerCase()));
			
		// Check if the request matches the selected dropdown status
		const matchesFilter = 
			filterStatus === 'All' || 
			(req.status || '').toLowerCase() === filterStatus.toLowerCase();
			
		return matchesSearch && matchesFilter;
	});
};