import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  Award, 
  FileCheck, 
  Layers, 
  TrendingUp, 
  CreditCard 
} from 'lucide-react';

export default function AboutPage({ setCurrentRoute }) {
  const handleNav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-pre">
            <Building2 size={16} /> Institutional Overview
          </div>
          <h1 className="page-header-title">About the Platform</h1>
          <p className="page-header-desc">
            Nirman establishes a transparent, accountable digital public infrastructure connecting public sector departments with verified technology startups to resolve critical administrative and municipal challenges.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="container" style={{ paddingBottom: '5rem' }}>
        
        {/* Core Purpose */}
        <div className="card" style={{ marginBottom: '2.5rem' }}>
          <div className="card-header">
            <div>
              <h2 className="card-title">Institutional Purpose</h2>
              <p className="card-subtitle">Addressing systemic challenges in public sector technology procurement</p>
            </div>
            <span className="badge badge-info">Established Standards</span>
          </div>
          <p style={{ marginBottom: '1rem' }}>
            Traditional public procurement faces structural friction when engaging with emerging technology providers. Rigid qualifying parameters, long tender cycles, and uncertain technical validation frequently prevent innovative startups from serving government departments.
          </p>
          <p>
            Nirman resolves this gap by providing an end-to-end framework: rigorous legal verification, structured capability mapping, low-risk staged pilot projects, transparent KPI evaluations, and accountable milestone payments.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
          {/* Government Benefits */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: '#e8f1f8',
                color: '#0f3d68',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Building2 size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f2942' }}>
                Benefits for Government Organisations
              </h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Pre-Verified Entities:</strong> Automatic cross-referencing with official registrar databases eliminates shell entities and reduces due diligence overhead.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>De-risked Procurement:</strong> Small-scale pilots (Proof of Concept) validate claims before entering into large-scale multi-year contracts.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Measurable KPI Governance:</strong> Clear quantitative targets ensure that public funds are disbursed only against verified operational performance.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Audit Trail & Transparency:</strong> Every milestone, delay, and approval is recorded permanently for audit and compliance scrutiny.</span>
              </li>
            </ul>
          </div>

          {/* Startup Benefits */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: '#dcfce7',
                color: '#166534',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <ShieldCheck size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f2942' }}>
                Benefits for Startups & Enterprises
              </h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Fair Access:</strong> Equal visibility for verified innovative firms, reducing traditional turnover barriers for emerging tech.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Paid Pilot Opportunities:</strong> Receive funded pilot contracts (e.g. ₹5,00,000) to prove solutions without financial strain.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Predictable Milestone Payments:</strong> Escrow-style payment release milestones protect cashflow upon delivery of agreed deliverables.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Government Credentialing:</strong> Successful pilot and implementation reports serve as certified public-sector references.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 6 Key Operational Pillars */}
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f2942', marginBottom: '1.5rem' }}>
          Six Operational Pillars of the Platform
        </h2>

        <div className="grid-3" style={{ marginBottom: '3rem' }}>
          <div className="card">
            <ShieldCheck size={24} color="#1d70b8" style={{ marginBottom: '0.75rem' }} />
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>1. Verification</h4>
            <p style={{ fontSize: '0.875rem' }}>
              Authoritative database cross-checks confirm company registration (MCA), tax compliance (GSTIN), and physical operational existence.
            </p>
          </div>

          <div className="card">
            <Target size={24} color="#1d70b8" style={{ marginBottom: '0.75rem' }} />
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>2. Capability Assessment</h4>
            <p style={{ fontSize: '0.875rem' }}>
              Transparent side-by-side gap analysis verifies that startups possess the mandatory technical architecture before proposal submission.
            </p>
          </div>

          <div className="card">
            <Layers size={24} color="#1d70b8" style={{ marginBottom: '0.75rem' }} />
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>3. Staged Pilot Process</h4>
            <p style={{ fontSize: '0.875rem' }}>
              Low-risk, 60-day sandbox pilot with clear boundary conditions and funded testing value prior to multi-year procurement commitments.
            </p>
          </div>

          <div className="card">
            <Award size={24} color="#1d70b8" style={{ marginBottom: '0.75rem' }} />
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>4. KPI Evaluation</h4>
            <p style={{ fontSize: '0.875rem' }}>
              Quantitative measurement of water savings, latency, uptime, and efficiency with published target versus actual variances.
            </p>
          </div>

          <div className="card">
            <FileCheck size={24} color="#1d70b8" style={{ marginBottom: '0.75rem' }} />
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>5. Procurement Transition</h4>
            <p style={{ fontSize: '0.875rem' }}>
              Standardized transition from validated pilot to administrative work order, SLA formulation, and scale deployment contracts.
            </p>
          </div>

          <div className="card">
            <TrendingUp size={24} color="#1d70b8" style={{ marginBottom: '0.75rem' }} />
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>6. Project Monitoring</h4>
            <p style={{ fontSize: '0.875rem' }}>
              Automated milestone tracking, proactive delay alert hierarchies, and milestone-linked payment releases for complete fiscal oversight.
            </p>
          </div>
        </div>

        {/* Call to Action Bar */}
        <div style={{
          backgroundColor: '#0f3d68',
          borderRadius: '16px',
          padding: '2.5rem',
          color: '#ffffff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
              Ready to participate in public sector innovation?
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '1rem', maxWidth: '600px' }}>
              Explore open department challenges or initiate your verified organisation onboarding today.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => handleNav('opportunities')} className="btn btn-secondary">
              View Opportunities
            </button>
            <button onClick={() => handleNav('register-startup')} className="btn btn-success">
              Register as Startup
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
