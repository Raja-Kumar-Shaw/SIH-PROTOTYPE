import React, { useState } from 'react';
import { 
  LogIn, 
  Building2, 
  Rocket, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  Mail,
  UserCheck
} from 'lucide-react';

export default function LoginPage({ 
  setCurrentRoute, 
  currentUserRole, 
  setCurrentUserRole, 
  isLoggedIn, 
  setIsLoggedIn,
  redirectNotice 
}) {
  const [selectedRole, setSelectedRole] = useState('government');
  const [email, setEmail] = useState('sanjay.patil@water.maharashtra.gov.in');
  const [password, setPassword] = useState('••••••••••••');

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    if (role === 'government') {
      setEmail('sanjay.patil@water.maharashtra.gov.in');
    } else if (role === 'startup') {
      setEmail('procurement@aquatech-solutions.in');
    } else {
      setEmail('auditor.central@nirman.gov.in');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setCurrentUserRole(selectedRole);
    setIsLoggedIn(true);

    if (selectedRole === 'government') {
      setCurrentRoute('dashboard-government');
    } else if (selectedRole === 'startup') {
      setCurrentRoute('dashboard-startup');
    } else {
      setCurrentRoute('dashboard-admin');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="page-header-pre" style={{ justifyContent: 'center' }}>
            <Lock size={16} /> Secure Portal Access
          </div>
          <h1 className="page-header-title">Role-Based Authentication</h1>
          <p className="page-header-desc" style={{ margin: '0 auto' }}>
            Access restricted administrative dashboards, evaluate submitted proposals, monitor active pilots, and manage milestone disbursements.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ paddingBottom: '5rem', maxWidth: '640px' }}>
        
        <div className="card" style={{ padding: '2.5rem' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f2942', marginBottom: '0.5rem' }}>
              Select Portal Stakeholder Role
            </h2>
            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
              Choose a profile below to log in:
            </p>
          </div>

          {redirectNotice && (
            <div style={{
              backgroundColor: '#f0f9ff',
              border: '1px solid #bae6fd',
              color: '#0369a1',
              padding: '0.85rem 1rem',
              borderRadius: '8px',
              fontSize: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              marginBottom: '1.5rem',
              lineHeight: 1.4
            }}>
              <Lock size={18} color="#0284c7" style={{ flexShrink: 0 }} />
              <div>
                <strong>Authentication Required:</strong> {redirectNotice}
              </div>
            </div>
          )}

          {/* Role Selector Tabs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '2rem' }}>
            <button
              type="button"
              onClick={() => handleRoleSelect('government')}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '1rem 0.5rem',
                borderRadius: '8px',
                border: '1.5px solid',
                borderColor: selectedRole === 'government' ? '#0f3d68' : '#e2e8f0',
                backgroundColor: selectedRole === 'government' ? '#f0f6fa' : '#ffffff',
                cursor: 'pointer'
              }}
            >
              <Building2 size={22} color={selectedRole === 'government' ? '#0f3d68' : '#64748b'} />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: selectedRole === 'government' ? '#0f3d68' : '#334155' }}>
                Government
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleRoleSelect('startup')}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '1rem 0.5rem',
                borderRadius: '8px',
                border: '1.5px solid',
                borderColor: selectedRole === 'startup' ? '#166534' : '#e2e8f0',
                backgroundColor: selectedRole === 'startup' ? '#f0fdf4' : '#ffffff',
                cursor: 'pointer'
              }}
            >
              <Rocket size={22} color={selectedRole === 'startup' ? '#166534' : '#64748b'} />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: selectedRole === 'startup' ? '#166534' : '#334155' }}>
                Verified Startup
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleRoleSelect('admin')}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '1rem 0.5rem',
                borderRadius: '8px',
                border: '1.5px solid',
                borderColor: selectedRole === 'admin' ? '#7c2d12' : '#e2e8f0',
                backgroundColor: selectedRole === 'admin' ? '#fffbeb' : '#ffffff',
                cursor: 'pointer'
              }}
            >
              <ShieldCheck size={22} color={selectedRole === 'admin' ? '#7c2d12' : '#64748b'} />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: selectedRole === 'admin' ? '#7c2d12' : '#334155' }}>
                System Auditor
              </span>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin}>
            
            <div className="form-group">
              <label className="form-label" htmlFor="loginEmail">
                Official Identifier / Email Address
              </label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} color="#64748b" style={{ position: 'absolute', left: '12px', top: '12px' }} />
                <input
                  type="email"
                  id="loginEmail"
                  className="form-control"
                  style={{ paddingLeft: '2.35rem' }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="loginPassword">
                Security Password / Token
              </label>
              <div style={{ position: 'relative' }}>
                <Lock size={16} color="#64748b" style={{ position: 'absolute', left: '12px', top: '12px' }} />
                <input
                  type="password"
                  id="loginPassword"
                  className="form-control"
                  style={{ paddingLeft: '2.35rem' }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', fontSize: '0.8rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked /> Remember Session
              </label>
              <a href="#reset" onClick={(e) => { e.preventDefault(); alert("Password reset notification dispatched to registered official mobile number."); }}>
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="btn btn-lg btn-primary"
              style={{ width: '100%', padding: '0.85rem' }}
            >
              Sign In to {selectedRole === 'government' ? 'Government' : selectedRole === 'startup' ? 'Startup' : 'Auditor'} Console <ArrowRight size={18} />
            </button>

          </form>

          {/* Security & Access Info */}
          <div style={{
            marginTop: '2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid #e2e8f0',
            textAlign: 'center',
            fontSize: '0.75rem',
            color: '#64748b'
          }}>
            Encrypted with 256-bit TLS. Access to this platform is audited under the Information Technology Act. Unauthorized access is subject to administrative and legal action.
          </div>

        </div>

      </div>
    </div>
  );
}
