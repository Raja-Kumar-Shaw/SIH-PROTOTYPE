import React from 'react';
import { 
  Building2, 
  Rocket, 
  ArrowRight, 
  ArrowDown, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import NirmanSummitPoster from '../components/NirmanSummitPoster';

export default function HomePage({ setCurrentRoute, isLoggedIn, currentUserRole }) {
  const isGovOrStartup = isLoggedIn && (currentUserRole === 'government' || currentUserRole === 'startup' || currentUserRole === 'admin');

  const handleNav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* =========================================================================
          SECTION 1: OVERVIEW
          ========================================================================= */}
      <section style={{ 
        padding: '4.5rem 0 3.5rem 0',
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '1240px' }}>
          
          {/* Official badge */}
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            backgroundColor: '#e8f1f8', 
            color: '#0f3d68', 
            padding: '0.4rem 1rem', 
            borderRadius: '9999px',
            fontSize: '0.825rem',
            fontWeight: 600,
            marginBottom: '1.75rem',
            border: '1px solid #cbd5e1'
          }}>
            <ShieldCheck size={16} color="#1d70b8" />
            <span>Digital Public Procurement for Public Sector Innovation</span>
          </div>

          {/* Hero heading */}
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 800, 
            color: '#0a2540', 
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            marginBottom: '1.25rem'
          }}>
            Connecting Government Requirements with Innovation
          </h1>

          {/* Subheading */}
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#475569', 
            lineHeight: 1.6, 
            maxWidth: '780px',
            margin: '0 auto 2.25rem auto'
          }}>
            Discover verified startups, evaluate innovative solutions and manage projects from pilot to procurement.
          </p>

          {/* Action Buttons */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1rem', 
            flexWrap: 'wrap',
            marginBottom: '4rem'
          }}>
            {isGovOrStartup ? (
              <>
                <button 
                  onClick={() => handleNav('opportunities')} 
                  className="btn btn-lg btn-primary"
                  style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
                >
                  Explore Opportunities <ArrowRight size={18} />
                </button>
                <button 
                  onClick={() => {
                    if (currentUserRole === 'government') handleNav('dashboard-government');
                    else if (currentUserRole === 'startup') handleNav('dashboard-startup');
                    else handleNav('dashboard-admin');
                  }} 
                  className="btn btn-lg btn-secondary"
                  style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
                >
                  Go to My Dashboard
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => {
                    const regSection = document.getElementById('registration-section');
                    if (regSection) regSection.scrollIntoView({ behavior: 'smooth' });
                  }} 
                  className="btn btn-lg btn-primary"
                  style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
                >
                  Register Your Organisation
                </button>
                <button 
                  onClick={() => handleNav('login')} 
                  className="btn btn-lg btn-secondary"
                  style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
                >
                  Sign In to Platform
                </button>
              </>
            )}
          </div>

          {/* Bharat / Nirman Innovation Summit Poster Banner */}
          <div style={{ marginTop: '1rem', textAlign: 'left' }}>
            <NirmanSummitPoster handleNav={handleNav} />
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: REGISTRATION
          ========================================================================= */}
      <section id="registration-section" style={{ 
        padding: '5rem 0',
        backgroundColor: '#ffffff'
      }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '2.25rem', 
              fontWeight: 800, 
              color: '#0a2540',
              marginBottom: '0.75rem'
            }}>
              Register Your Organisation
            </h2>
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#475569',
              maxWidth: '650px',
              margin: '0 auto'
            }}>
              Create a verified organisation profile to participate in relevant government opportunities.
            </p>
          </div>

          {/* Two Registration Cards */}
          <div className="grid-2" style={{ gap: '2rem' }}>
            
            {/* CARD 1: GOVERNMENT ORGANISATION */}
            <div className="card" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1.5px solid #cbd5e1',
              borderRadius: '16px',
              padding: '2.5rem',
              backgroundColor: '#ffffff'
            }}>
              <div>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  backgroundColor: '#e8f1f8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0f3d68',
                  marginBottom: '1.5rem'
                }}>
                  <Building2 size={28} />
                </div>

                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: '#1d70b8',
                  marginBottom: '0.5rem'
                }}>
                  Public Sector Entity
                </div>

                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 700, 
                  color: '#0f2942', 
                  marginBottom: '1rem' 
                }}>
                  Government Organisation
                </h3>

                <p style={{ 
                  fontSize: '1rem', 
                  color: '#475569', 
                  lineHeight: 1.6,
                  marginBottom: '2rem' 
                }}>
                  Publish requirements, review eligible startups and manage innovation projects.
                </p>

                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  marginBottom: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  fontSize: '0.875rem',
                  color: '#334155'
                }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="#16a34a" /> Departmental verification workflow
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="#16a34a" /> Structured challenge creation
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="#16a34a" /> Transparent pilot & KPI oversight
                  </li>
                </ul>
              </div>

              <button 
                onClick={() => handleNav('register-government')} 
                className="btn btn-lg btn-primary"
                style={{ width: '100%' }}
              >
                Register as Government
              </button>
            </div>

            {/* CARD 2: STARTUP / ENTERPRISE */}
            <div className="card" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1.5px solid #cbd5e1',
              borderRadius: '16px',
              padding: '2.5rem',
              backgroundColor: '#ffffff'
            }}>
              <div>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  backgroundColor: '#dcfce7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#166534',
                  marginBottom: '1.5rem'
                }}>
                  <Rocket size={28} />
                </div>

                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: '#15803d',
                  marginBottom: '0.5rem'
                }}>
                  Enterprise Innovator
                </div>

                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 700, 
                  color: '#0f2942', 
                  marginBottom: '1rem' 
                }}>
                  Startup / Enterprise
                </h3>

                <p style={{ 
                  fontSize: '1rem', 
                  color: '#475569', 
                  lineHeight: 1.6,
                  marginBottom: '2rem' 
                }}>
                  Create a verified profile and discover government opportunities relevant to your capabilities.
                </p>

                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  marginBottom: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  fontSize: '0.875rem',
                  color: '#334155'
                }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="#16a34a" /> Authoritative MCA/GSTIN verification
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="#16a34a" /> Direct eligibility and capability check
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="#16a34a" /> Secure milestone payment tracking
                  </li>
                </ul>
              </div>

              <button 
                onClick={() => handleNav('register-startup')} 
                className="btn btn-lg btn-success"
                style={{ width: '100%' }}
              >
                Register as Startup
              </button>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
