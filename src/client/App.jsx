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
import StaffDashboard from './components/StaffDashboard';
import Toast from './components/Toast';
import LoadingScreen from './components/LoadingScreen';
import Register from './components/Register';
import Login from './components/Login';
import AIChatBot from './components/AIChatBot';
import RequestQueue from './components/RequestQueue';

function App() {
  const [view, setView] = useState('login'); 
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
    avatar: null
  });

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const userResponse = await fetch('/api/now/ui/userinfo', {
          headers: {
            'X-No-Response-Challenge': 'true'
          }
        });
        
        if (userResponse.ok) {
          const userData = await userResponse.json();
          setUser({
            id: userData.result.user_id,
            name: userData.result.user_name,
            email: userData.result.user_email,
            department: userData.result.user_department || 'General',
            avatar: null,
            isStaff: true // If they have a ServiceNow session, they are likely staff
          });
          setView('app');
          setActiveTab('staff-dashboard');
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

  const loadRequests = async (currentUser = user) => {
    try {
      if (!currentUser || !currentUser.id) return;
      const queryParams = currentUser.isStaff 
        ? 'ORDERBYDESCsys_created_on' 
        : `customer=${currentUser.id}^ORDERBYDESCsys_created_on`;

      const response = await fetch(`/api/now/table/x_2001423_certireq_document_request?sysparm_query=${queryParams}&sysparm_display_value=all`, {
        headers: {
          'X-No-Response-Challenge': 'true',
          'Accept': 'application/json'
        }
      });
      
      if (response.status === 401) {
        window.location.href = '/login.do?sysparm_goto_url=' + encodeURIComponent(window.location.href);
        return;
      }
      
      if (!response.ok) throw new Error('Failed to fetch from ServiceNow');
      
      const result = await response.json();
      
      const mappedRequests = result.result.map(record => {
        const getVal = (field, fallback = '') => {
          if (!field) return fallback;
          if (typeof field === 'object') return field.display_value || field.value || fallback;
          return field;
        };

        const sysId = typeof record.sys_id === 'object' ? record.sys_id.value : record.sys_id;

        return {
          id: sysId,
          number: getVal(record.tracking_id) || getVal(record.number) || sysId.substring(0, 8).toUpperCase(),
          userName: getVal(record.fullname) || 
                    getVal(record.u_fullname) || 
                    getVal(record.customer) || 
                    getVal(record.u_customer) || 
                    getVal(record.requested_for) || 
                    getVal(record.u_requested_for) || 
                    getVal(record.sys_created_by) || 
                    'Unknown Student',
          studentId: getVal(record.student_id_number),
          email: getVal(record.email),
          contactNumber: getVal(record.contact_number),
          userType: getVal(record.user_type, 'student'),
          documentType: getVal(record.document_type, 'Unknown Document'),
          dateSubmitted: getVal(record.submitted_date) || getVal(record.sys_created_on),
          status: typeof record.status === 'object' ? record.status.value : (record.status || 'pending'),
          purpose: getVal(record.purpose),
          deliveryMode: getVal(record.delivery_mode),
          urgency: getVal(record.urgency_level),
          // Check multiple fields and ensure we get the raw value (e.g., 'paid')
          paymentStatus: (typeof record.payment_required === 'object' ? record.payment_required.value : record.payment_required) || 
                         (typeof record.payment_status === 'object' ? record.payment_status.value : record.payment_status) || 'pending',
          fee: parseFloat(getVal(record.payment_amount)) || 0,
          progress: (typeof record.status === 'object' ? record.status.value : record.status) === 'completed' ? 100 : 
                   ((typeof record.status === 'object' ? record.status.value : record.status) === 'processing' ? 50 : 10)
        };
      });

      setRequests(mappedRequests);
    } catch (error) {
      console.error('ServiceNow Fetch Error:', error);
      
      showToast('Error loading live data from server.', 'error');
      setRequests([]);
    }
  };

  const handleNewRequest = async (requestData) => {
    try {
      setLoading(true);
      
      const generatedId = 'REQ-' + Math.random().toString(36).substring(2, 10).toUpperCase();
      
      const payload = {
        customer: user.id,
        tracking_id: generatedId,
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
          'X-UserToken': window.g_ck || '' 
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('ServiceNow Submission Failed');

      const result = await response.json();
      
      const newRecord = {
        id: result.result.sys_id,
        ...requestData,
        number: generatedId,
        dateSubmitted: new Date().toISOString().split('T')[0],
        status: 'pending',
        progress: 10
      };
      
      setRequests(prev => [newRecord, ...prev]);
      setShowNewRequestModal(false);
      showToast(`Success! Your Request ID is: ${generatedId}. Please save it for tracking.`, 'success');
      
    } catch (error) {
      console.error('Submission Error:', error);
      showToast('Offline Mode: Request saved locally only.', 'warning');
      
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

  const handlePaymentComplete = async (requestId) => {
    try {
      const response = await fetch(`/api/now/table/x_2001423_certireq_document_request/${requestId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-UserToken': window.g_ck || ''
        },
        body: JSON.stringify({
          payment_required: 'paid',
          payment_status: 'paid',
          status: 'processing' 
        })
      });

      if (!response.ok) throw new Error('Payment Update Failed');
      
      // Update local state immediately for instant UI refresh
      setRequests(prev => prev.map(req => 
        req.id === requestId 
          ? { ...req, paymentStatus: 'paid', status: 'processing', progress: 50 } 
          : req
      ));
      
      showToast('Payment confirmed! Processing started.', 'success');
      
      // Also trigger a background refresh to stay in sync with server
      loadRequests();
    } catch (error) {
      console.error('Payment Error:', error);
      throw error;
    }
  };

  const handleRegister = async (registerData) => {
    try {
      setLoading(true);
      
      const payload = {
        fullname: registerData.fullname,
        email: registerData.email,
        password: registerData.password,
        contact_number: registerData.contact_number,
        user_type: registerData.user_type,
        student_id_number: registerData.student_id_number,
        department: registerData.department,
        program: registerData.program,
        year_level: registerData.year_level,
        is_regular: registerData.is_regular,
        year_of_graduation: registerData.year_of_graduation,
        personal_email: registerData.personal_email,
        customer_status: 'active'
      };

      const response = await fetch('/api/now/table/x_2001423_certireq_customer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-UserToken': window.g_ck || ''
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('Registration Failed');

      const result = await response.json();
      
      setUser({
        id: result.result.sys_id,
        studentId: registerData.student_id_number,
        name: registerData.fullname,
        email: registerData.email,
        department: registerData.department || 'General',
        avatar: null
      });

      setView('app');
      showToast('Registration Successful! Welcome to CertiRequest.', 'success');
      
    } catch (error) {
      console.error('Registration Error:', error);
      showToast('Registration Error. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleLogout = () => {
    setUser({
      id: '',
      name: '',
      email: '',
      department: '',
      avatar: null
    });
    setView('login');
    setActiveTab('dashboard');
    setRequests([]);
    showToast('Logged out successfully', 'success');
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setView('app');
    
    if (userData.isStaff) {
      setActiveTab('staff-dashboard');
      loadRequests(userData); 
    } else {
      setActiveTab('dashboard'); 
      loadRequests(userData); 
    }
    
    showToast('Welcome back, ' + userData.name + '!', 'success');
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
            onLogout={handleLogout}
            onPay={() => setActiveTab('payments')}
          />
        );
      case 'my-requests':
        return <MyRequests 
          requests={requests} 
          onRefresh={() => loadRequests(user)} 
          onNewRequest={() => setShowNewRequestModal(true)}
          showToast={showToast} 
        />;
      case 'track-request':
        return <TrackRequest requests={requests} />;
      case 'payments':
        return <Payments requests={requests} onPaymentComplete={handlePaymentComplete} />;
      case 'help':
        return <HelpSupport />;
      case 'staff-dashboard':
        return <StaffDashboard requests={requests} user={user} />;
        case 'request-queue':
          return <RequestQueue requests={requests} onRefresh={() => loadRequests(user)} />;
      default:
        return <Dashboard requests={requests} stats={getStats()} />;
    }
  };

  if (loading && requests.length === 0) {
    return <LoadingScreen />;
  }

  if (view === 'login') {
    return <Login onLogin={handleLogin} onGoToRegister={() => setView('register')} />;
  }

  if (view === 'register') {
    return <Register onRegister={handleRegister} onBackToLogin={() => setView('login')} />;
  }

  return (
    <div className="app">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        user={user}
        onLogout={handleLogout}
        requestCount={requests.length}
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
                {activeTab === 'staff-dashboard' && 'Staff Dashboard'}
                {activeTab === 'request-queue' && 'Request Queue'}
                {activeTab === 'help' && 'Help & Support'}
              </h1>
              <p className="page-subtitle">
                {activeTab === 'dashboard' && 'Welcome back! Here\'s your overview'}
                {activeTab === 'my-requests' && 'View and manage your requests'}
                {activeTab === 'track-request' && 'Track your request status'}
                {activeTab === 'payments' && 'Manage your payments'}
                {activeTab === 'staff-dashboard' && 'Manage and process document requests'}
                {activeTab === 'request-queue' && 'Review and process student document requests'}
                {activeTab === 'help' && 'Get help and support'}
              </p>
            </div>
            <div className="header-actions">
              {!user?.isStaff && (
                <button 
                  className="btn btn-primary"
                  onClick={() => setShowNewRequestModal(true)}
                >
                  <span className="btn-icon">+</span>
                  New Request
                </button>
              )}
              <div className="user-profile">
                <div className="user-avatar">
                  <span className="avatar-initials">
                    {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
                  </span>
                </div>
                <div className="user-info-text">
                  <span className="user-name-small">{user?.name}</span>
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
          user={user}
          onClose={() => setShowNewRequestModal(false)} 
          onSubmit={handleNewRequest}
        />
      )}

      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
      
      {loading && <div className="loading-overlay"><div className="spinner-lg" /></div>}

      <AIChatBot />
    </div>
  );
}

export default App;