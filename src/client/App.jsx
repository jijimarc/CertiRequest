import React, { useState, useEffect } from 'react';
import './App.css';
import './components/enhanced-styles.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import NewRequest from './components/NewRequest';
import MyRequests from './components/MyRequests';
import TrackRequest from './components/TrackRequest';
import Payments from './components/Payments';
import HelpSupport from './components/HelpSupport';
import Toast from './components/Toast';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showNewRequestModal, setShowNewRequestModal] = useState(false);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);
  const [user, setUser] = useState({
    id: 'STU001',
    name: 'John Doe',
    email: 'john.doe@university.edu',
    department: 'Computer Science',
    role: 'staff', // Mocked role for Staff Portal demo
    avatar: null
  });

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Handle URL-based routing for staff dashboard
        const path = window.location.pathname;
        if (path.includes('/dashboard/staff')) {
          setActiveTab('staff-portal');
        }

        // Fetch current logged-in user details from ServiceNow
        const userResponse = await fetch('/api/now/ui/userinfo', {
          headers: {
            'X-No-Response-Challenge': 'true'
          }
        });
        
        // If we get a 401 Unauthorized, redirect to the real login page
        if (userResponse.status === 401) {
          window.location.href = '/login.do?sysparm_goto_url=' + encodeURIComponent(window.location.href);
          return;
        }

        if (userResponse.ok) {
          const userData = await userResponse.json();
          setUser({
            id: userData.result.user_id,
            name: userData.result.user_name,
            email: userData.result.user_email,
            department: userData.result.user_department || 'General',
            role: userData.result.user_role || 'staff', // Fallback to staff for demo
            avatar: null
          });
        }
      } catch (err) {
        console.warn('Could not fetch user info, using guest profile');
      } finally {
        setLoading(false);
        loadRequests();
      }
    };

    initializeApp();
  }, []);

  useEffect(() => {
    if (showNewRequestModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showNewRequestModal]);

  const loadRequests = async () => {
    try {
      // ServiceNow Table API endpoint
      const response = await fetch('/api/now/table/x_2001423_certireq_document_request?sysparm_query=ORDERBYDESCsys_created_on', {
        headers: {
          'X-No-Response-Challenge': 'true'
        }
      });
      
      if (response.status === 401) {
        window.location.href = '/login.do?sysparm_goto_url=' + encodeURIComponent(window.location.href);
        return;
      }
      
      if (!response.ok) throw new Error('Failed to fetch from ServiceNow');
      
      const result = await response.json();
      
      // Map ServiceNow fields to our React state format
      const mappedRequests = result.result.map(record => ({
        id: record.sys_id,
        userName: record.student_name || 'Anonymous Student',
        documentType: record.document_type || 'Unknown Document',
        dateSubmitted: record.submitted_date || record.sys_created_on,
        status: record.status || 'pending',
        purpose: record.purpose,
        deliveryMode: record.delivery_mode,
        urgency: record.urgency_level || 'standard',
        fee: parseFloat(record.payment_amount) || 0,
        progress: record.status === 'completed' ? 100 : (record.status === 'processing' ? 50 : 10)
      }));

      setRequests(mappedRequests);
    } catch (error) {
      console.error('ServiceNow Fetch Error:', error);
      showToast('Error loading live data. Using offline mode.', 'warning');
      
      // Fallback to sample data if API fails (e.g. during local development)
      const sampleRequests = [
        {
          id: 1,
          documentType: 'Official Transcript',
          dateSubmitted: '2024-01-15',
          status: 'completed',
          purpose: 'Graduate School Application',
          progress: 100
        }
      ];
      setRequests(sampleRequests);
    }
  };

  const handleNewRequest = async (requestData) => {
    try {
      setLoading(true);
      
      // Prepare the payload for ServiceNow
      const payload = {
        student_id: user.id,
        student_name: user.name,
        email: user.email,
        department: user.department,
        document_type: requestData.documentType,
        urgency_level: requestData.urgency || 'standard',
        purpose: requestData.purpose,
        delivery_mode: requestData.deliveryMode || 'pickup',
        status: 'pending'
      };

      const response = await fetch('/api/now/table/x_2001423_certireq_document_request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-UserToken': window.g_ck || '' // ServiceNow CRSF token
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('ServiceNow Submission Failed');

      const result = await response.json();
      
      // Add the new record to the UI immediately
      const newRecord = {
        id: result.result.sys_id,
        ...requestData,
        dateSubmitted: new Date().toISOString().split('T')[0],
        status: 'pending',
        progress: 10
      };
      
      setRequests(prev => [newRecord, ...prev]);
      setShowNewRequestModal(false);
      showToast('Request submitted to ServiceNow!', 'success');
      
    } catch (error) {
      console.error('Submission Error:', error);
      showToast('Offline Mode: Request saved locally only.', 'warning');
      
      // Fallback for local testing
      const newRequest = {
        id: Date.now(),
        ...requestData,
        dateSubmitted: new Date().toISOString().split('T')[0],
        status: 'pending',
        progress: 10
      };
      setRequests(prev => [newRequest, ...prev]);
      setShowNewRequestModal(false);
    } finally {
      setLoading(false);
    }
  };

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const getStats = () => {
    const total = requests.length;
    const pending = requests.filter(r => r.status === 'pending').length;
    const completed = requests.filter(r => r.status === 'completed').length;
    const totalFees = requests.reduce((sum, r) => sum + (r.fee || 0), 0);

    return {
      total: { value: total, change: '+12%', positive: true },
      pending: { value: pending, change: '-5%', positive: false },
      completed: { value: completed, change: '+18%', positive: true },
      payments: { value: `$${totalFees.toFixed(2)}`, change: '+8%', positive: true }
    };
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return (
          <Dashboard 
            requests={requests} 
            stats={getStats()}
            onNewRequest={() => setShowNewRequestModal(true)}
            user={user}
            onRefresh={loadRequests}
          />
        );
      case 'my-requests':
        return <MyRequests requests={requests} onRefresh={loadRequests} showToast={showToast} />;
      case 'track-request':
        return <TrackRequest requests={requests} />;
      case 'payments':
        return <Payments requests={requests} showToast={showToast} />;
      case 'help':
        return <HelpSupport />;
      case 'staff-portal':
        return <StaffDashboard requests={requests} />;
      default:
        return <Dashboard requests={requests} stats={getStats()} />;
    }
  };

  if (loading && requests.length === 0) {
    return <LoadingScreen />;
  }

  return (
    <div className="app">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        user={user}
      />
      
      <main className="main-content">
        <header className="header">
          <div className="header-content">
            <div className="header-left">
              <h1 className="page-title">
                {activeTab === 'dashboard' && 'Dashboard'}
                {activeTab === 'my-requests' && 'My Requests'}
                {activeTab === 'track-request' && 'Track Request'}
                {activeTab === 'payments' && 'Payments'}
                {activeTab === 'help' && 'Help & Support'}
                {activeTab === 'staff-portal' && 'Staff Portal'}
              </h1>
              <p className="page-subtitle">
                {activeTab === 'dashboard' && 'Welcome back! Here\'s your overview'}
                {activeTab === 'my-requests' && 'View and manage your requests'}
                {activeTab === 'track-request' && 'Track your request status'}
                {activeTab === 'payments' && 'Manage your payments'}
                {activeTab === 'help' && 'Get help and support'}
                {activeTab === 'staff-portal' && 'ServiceNow Request Queue Management'}
              </p>
            </div>
            <div className="header-actions">
              <button 
                className="btn btn-primary"
                onClick={() => setShowNewRequestModal(true)}
              >
                <span className="btn-icon">+</span>
                New Request
              </button>
              <div className="user-profile">
                <div className="user-avatar">
                  <span className="avatar-initials">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="content-wrapper">
          {renderContent()}
        </div>
      </main>

      {showNewRequestModal && (
        <NewRequest 
          onClose={() => setShowNewRequestModal(false)} 
          onSubmit={handleNewRequest}
        />
      )}

      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
      
      {loading && <div className="loading-overlay"><div className="spinner-lg" /></div>}
    </div>
  );
}

export default App;