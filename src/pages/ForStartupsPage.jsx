import React from 'react';
import { 
  Rocket, 
  ShieldCheck, 
  FileText, 
  Search, 
  CheckCircle2, 
  Layers, 
  TrendingUp, 
  CreditCard, 
  ArrowRight,
  Cpu
} from 'lucide-react';

export default function ForStartupsPage({ setCurrentRoute, isLoggedIn, currentUserRole }) {
  const handleNav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const steps = [
    {
      title: "1. Register Organisation",
      desc: "Provide statutory company details including CIN/LLPIN, PAN, GSTIN, registered address, and authorised representative information.",
      icon: <FileText size={22} color="#16a34a" />
    },
    {
      title: "2. Verify Organisation",
      desc: "Our automated verification engine checks official MCA and GSTIN registries to validate legal status and physical operational presence.",
      icon: <ShieldCheck size={22} color="#16a34a" />
    },
    {
      title: "3. Complete Capability Profile",
      desc: "Catalog core technologies, team size, technical certifications (ISO 9001, ISO 27001), infrastructure capacity, and previous project references.",
      icon: <Cpu size={22} color="#16a34a" />
    },
    {
      title: "4. Find Relevant Opportunities",
      desc: "Discover challenges published by state government departments and municipal bodies matching your specific domain and technological expertise.",
      icon: <Search size={22} color="#16a34a" />
    },
    {
      title: "5. Submit Proposal When Eligible",
      desc: "Pass the automatic capability match (100% compliance with mandatory criteria) to submit formal pilot execution proposals.",
      icon: <CheckCircle2 size={22} color="#16a34a" />
    },
    {
      title: "6. Participate in Pilots",
      desc: "Deploy solutions in controlled municipal sandboxes during a 60-day funded pilot phase (e.g. ₹5,00,000) to prove real-world outcomes.",
      icon: <Layers size={22} color="#16a34a" />
    },
    {
      title: "7. Track Project Milestones",
      desc: "Collaborate transparently with designated government project officers, update progress reports, and address operational milestones.",
      icon: <TrendingUp size={22} color="#16a34a" />
    },
    {
      title: "8. Receive Milestone Payments",
      desc: "Receive predictable, transparent milestone fund disbursements (20%-30%-30%-20%) directly linked to verified deliverable approvals.",
      icon: <CreditCard size={22} color="#16a34a" />
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-pre">
            <Rocket size={16} /> Enterprise Innovator Portal
          </div>
          <h1 className="page-header-title">For Startups & Enterprises</h1>
          <p className="page-header-desc">
            Direct access to verified government challenges, funded pilot opportunities, transparent technical capability assessments, and predictable milestone payments.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ paddingBottom: '5rem' }}>
        
        {/* Startup CTA Banner */}
        <div className="card" style={{ 
          backgroundColor: '#0f3d68', 
          color: '#ffffff', 
          border: 'none', 
          marginBottom: '3rem',
          padding: '2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div>
            <span className="badge" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', marginBottom: '0.5rem' }}>
              Verified Entity Onboarding
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
              Register Your Startup Profile
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '1rem', maxWidth: '650px' }}>
              Create a verified enterprise profile, showcase technical maturity, and qualify for high-impact public sector innovation challenges.
            </p>
          </div>
          <button 
            onClick={() => handleNav('register-startup')} 
            className="btn btn-lg btn-success"
            style={{ fontSize: '1rem', fontWeight: 700 }}
          >
            Register as Startup <ArrowRight size={18} />
          </button>
        </div>

        {/* 8-Step Startup Journey */}
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f2942', marginBottom: '1.5rem' }}>
          Your 8-Stage Pathway to Government Procurement
        </h2>

        <div className="grid-4" style={{ marginBottom: '3.5rem' }}>
          {steps.map((s, idx) => (
            <div key={idx} className="card">
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                backgroundColor: '#dcfce7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                {s.icon}
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f2942', marginBottom: '0.5rem' }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.5' }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Startup Eligibility Assurance */}
        <div className="notice-box success">
          <ShieldCheck size={24} color="#166534" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div className="notice-title">Equal Opportunity & Technical Meritocracy</div>
            <div className="notice-text">
              Nirman removes restrictive legacy criteria (such as massive multi-year turnover) for stage-1 pilots. Any registered entity with verified credentials and the required core technical capability can participate on merit.
            </div>
          </div>
        </div>

        {/* Action Buttons - Visible only after login */}
        {isLoggedIn && (
          <div className="card" style={{ marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f2942', marginBottom: '1rem' }}>
              Explore Verified Startup Modules
            </h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => handleNav('opportunities')} className="btn btn-primary">
                <Search size={16} /> Explore Open Opportunities
              </button>
              <button onClick={() => handleNav('verification')} className="btn btn-outline">
                <ShieldCheck size={16} /> Organisation Verification Status
              </button>
              <button onClick={() => handleNav('capability')} className="btn btn-outline">
                <Cpu size={16} /> Test Technical Eligibility
              </button>
              <button onClick={() => handleNav('payments')} className="btn btn-outline" style={{ borderColor: '#16a34a', color: '#14532d', fontWeight: 600 }}>
                <CreditCard size={16} color="#16a34a" /> Milestone Payment Tracking
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
