import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  FilePlus, 
  Sliders, 
  Cpu, 
  Layers, 
  Target, 
  TrendingUp, 
  Award,
  HelpCircle,
  CreditCard
} from 'lucide-react';

export default function ForGovernmentPage({ setCurrentRoute, isLoggedIn, currentUserRole }) {
  const handleNav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const steps = [
    {
      title: "Publish Requirements",
      desc: "Define administrative, municipal, or technological challenges with specific technical specifications, budgets, and timelines.",
      icon: <FilePlus size={24} color="#1d70b8" />
    },
    {
      title: "Find Relevant Startups",
      desc: "Leverage automated matching that filters startups by domain capability, team size, technical capacity, and certifications.",
      icon: <Search size={24} color="#1d70b8" />
    },
    {
      title: "Review Capabilities",
      desc: "Perform side-by-side technical gap analysis against mandatory requirements before shortlisting proposals.",
      icon: <Cpu size={24} color="#1d70b8" />
    },
    {
      title: "Conduct Pilots",
      desc: "De-risk procurement with small-scale, 60-day sandbox pilot projects (e.g. ₹5 Lakhs) before large-scale commitments.",
      icon: <Layers size={24} color="#1d70b8" />
    },
    {
      title: "Evaluate Outcomes",
      desc: "Measure transparent, objective KPIs (e.g. water loss reduction, latency, uptime) against contractual targets.",
      icon: <Target size={24} color="#1d70b8" />
    },
    {
      title: "Manage Procurement",
      desc: "Transition validated solutions to formal procurement contracts, work orders, and SLA governance with authorised review.",
      icon: <Award size={24} color="#1d70b8" />
    },
    {
      title: "Monitor Implementation",
      desc: "Track actual milestone progress against planned deadlines with automated delay notifications and escalation hierarchies.",
      icon: <TrendingUp size={24} color="#1d70b8" />
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-pre">
            <Building2 size={16} /> Public Sector Guidance
          </div>
          <h1 className="page-header-title">For Government Organisations</h1>
          <p className="page-header-desc">
            Streamline innovation procurement, engage verified technology providers, de-risk public funds through structured pilots, and monitor outcomes with audit-grade transparency.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ paddingBottom: '5rem' }}>
        
        {/* Registration CTA Banner */}
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
              Department Onboarding
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
              Register Your Department or Organisation
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '1rem', maxWidth: '650px' }}>
              Join Maharashtra state departments, municipal corporations, and autonomous bodies using Nirman to solve public sector challenges.
            </p>
          </div>
          <button 
            onClick={() => handleNav('register-government')} 
            className="btn btn-lg btn-secondary"
            style={{ fontSize: '1rem', fontWeight: 700 }}
          >
            Register as Government <ArrowRight size={18} />
          </button>
        </div>

        {/* Workflow Grid */}
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f2942', marginBottom: '1.5rem' }}>
          Key Capabilities for Government Officers
        </h2>

        <div className="grid-3" style={{ marginBottom: '3.5rem' }}>
          {steps.map((s, idx) => (
            <div key={idx} className="card">
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                backgroundColor: '#e8f1f8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                {s.icon}
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f2942', marginBottom: '0.5rem' }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6' }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Important Guidelines Box */}
        <div className="notice-box">
          <ShieldCheck size={24} color="#1d70b8" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div className="notice-title">Compliance & Statutory Governance Notice</div>
            <div className="notice-text">
              The platform assists government officers in requirement structuring, applicant verification, and KPI measurement. All formal procurement awards, financial disbursements, and contractual binding actions remain strictly subject to the competent department authority, the General Financial Rules (GFR), and state procurement policies.
            </div>
          </div>
        </div>

        {/* Quick Links to Modules - Visible only after login */}
        {isLoggedIn && (
          <div className="card" style={{ marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f2942', marginBottom: '1rem' }}>
              Direct Department Tooling
            </h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => handleNav('matching')} className="btn btn-outline">
                <Search size={16} /> Find Relevant Startups
              </button>
              <button onClick={() => handleNav('capability')} className="btn btn-outline">
                <Cpu size={16} /> Run Technical Capability Check
              </button>
              <button onClick={() => handleNav('evaluation')} className="btn btn-outline">
                <Target size={16} /> Pilot KPI Evaluation
              </button>
              <button onClick={() => handleNav('monitoring')} className="btn btn-outline">
                <TrendingUp size={16} /> Project Delay Escalation
              </button>
              <button onClick={() => handleNav('payments')} className="btn btn-outline" style={{ borderColor: '#1d70b8', color: '#0f3d68', fontWeight: 600 }}>
                <CreditCard size={16} color="#1d70b8" /> Milestone Payment Tracking
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
