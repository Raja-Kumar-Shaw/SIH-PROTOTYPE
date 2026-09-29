import React, { useState } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Search, 
  FileText, 
  HelpCircle, 
  BookOpen, 
  UserCheck, 
  LogIn, 
  ChevronDown,
  Menu,
  X,
  SlidersHorizontal,
  ExternalLink,
  Award,
  Layers,
  ArrowRight
} from 'lucide-react';
import GovEmblem from './GovEmblem';

export default function Header({ 
  currentRoute, 
  setCurrentRoute, 
  currentUserRole, 
  setCurrentUserRole,
  isLoggedIn,
  setIsLoggedIn
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [registerDropdownOpen, setRegisterDropdownOpen] = useState(false);

  const handleNav = (route) => {
    setCurrentRoute(route);
    setMobileMenuOpen(false);
    setRegisterDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isGovOrStartup = isLoggedIn && (currentUserRole === 'government' || currentUserRole === 'startup' || currentUserRole === 'admin');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'government', label: 'For Government' },
    { id: 'startups', label: 'For Startups' },
    ...(isGovOrStartup ? [
      { id: 'opportunities', label: 'Opportunities' },
      { id: 'how-it-works', label: 'How It Works' },
    ] : []),
    { id: 'resources', label: 'Resources' },
    { id: 'help', label: 'Help' },
  ];

  return (
    <>
      {/* Top Civic Utility Bar */}
      <div className="gov-utility-bar">
        <div className="container">
          <div className="gov-utility-left">
            <span className="gov-flag-icon" title="National Digital Standard">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span style={{ fontWeight: 600, color: '#f8fafc' }}>
              Public Sector Innovation Procurement Platform
            </span>
            <span style={{ color: '#94a3b8' }}>|</span>
            <span style={{ color: '#cbd5e1' }}>
              Government of Maharashtra & Participating States
            </span>
          </div>
          <div className="gov-utility-right">
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
              Standard Procurement Compliance: GFR 2017 & State Innovation Directives
            </span>
            {isLoggedIn && (
              <span className="badge badge-neutral" style={{ fontSize: '0.7rem' }}>
                Active Session: {currentUserRole === 'government' ? 'Government Officer' : currentUserRole === 'startup' ? 'Verified Startup' : 'System Auditor'}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="gov-header">
        <div className="container gov-header-inner">
          {/* Brand Wordmark */}
          <div className="gov-brand" onClick={() => handleNav('home')}>
            <GovEmblem size={46} />
            <div>
              <div className="gov-brand-title">
                Nirman
              </div>
              <div className="gov-brand-subtitle">
                Government Innovation Procurement Portal
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="gov-nav" aria-label="Main Navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`gov-nav-link ${currentRoute === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs & Auth */}
          <div className="gov-header-actions">
            {isLoggedIn ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  onClick={() => {
                    if (currentUserRole === 'government') handleNav('dashboard-government');
                    else if (currentUserRole === 'startup') handleNav('dashboard-startup');
                    else handleNav('dashboard-admin');
                  }}
                  className="btn btn-sm btn-primary"
                >
                  <Layers size={14} /> My Dashboard
                </button>
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    handleNav('home');
                  }}
                  className="btn btn-sm btn-outline"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => handleNav('login')}
                  className="btn btn-sm btn-outline"
                >
                  <LogIn size={14} /> Login
                </button>

                <div style={{ position: 'relative' }}>
                  <button
                    onClick={() => {
                      setRegisterDropdownOpen(!registerDropdownOpen);
                      setToolsDropdownOpen(false);
                    }}
                    className="btn btn-sm btn-primary"
                  >
                    Register <ChevronDown size={14} />
                  </button>
                  {registerDropdownOpen && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      right: 0,
                      marginTop: '0.5rem',
                      backgroundColor: '#ffffff',
                      border: '1px solid #cbd5e1',
                      borderRadius: '8px',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                      width: '230px',
                      zIndex: 200,
                      padding: '0.4rem'
                    }}>
                      <button
                        onClick={() => handleNav('register-government')}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '0.6rem 0.75rem',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.825rem',
                          fontWeight: 600,
                          color: '#0f3d68'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        <Building2 size={16} /> As Government
                      </button>
                      <button
                        onClick={() => handleNav('register-startup')}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '0.6rem 0.75rem',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.825rem',
                          fontWeight: 600,
                          color: '#0f3d68'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        <ShieldCheck size={16} /> As Startup / Enterprise
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
