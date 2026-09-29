import React, { useState } from 'react';
import { 
  Cpu, 
  CheckCircle2, 
  XCircle, 
  Building2, 
  ShieldCheck, 
  ArrowRight, 
  AlertCircle,
  HelpCircle,
  Scale
} from 'lucide-react';
import { INITIAL_OPPORTUNITIES, VERIFIED_STARTUPS } from '../data/mockData';

export default function CapabilityPage({ setCurrentRoute, setSelectedOpportunityId }) {
  const [selectedOppId, setSelectedOppId] = useState('OPP-MH-2026-001');
  const [selectedStartupId, setSelectedStartupId] = useState('ST-2026-881');

  const selectedOpp = INITIAL_OPPORTUNITIES.find(o => o.id === selectedOppId) || INITIAL_OPPORTUNITIES[0];
  const selectedStartup = VERIFIED_STARTUPS.find(s => s.id === selectedStartupId) || VERIFIED_STARTUPS[0];

  const handleNav = (route, oppId = null) => {
    if (oppId) setSelectedOpportunityId(oppId);
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Evaluate capability match
  const mandatoryList = selectedOpp.mandatoryCapabilities || [];
  const preferredList = selectedOpp.preferredCapabilities || [];

  // Check mandatory compliance
  const mandatoryResults = mandatoryList.map(req => {
    const isMet = selectedStartup.capabilities && selectedStartup.capabilities[req] === true;
    return { name: req, isMet, isMandatory: true };
  });

  const preferredResults = preferredList.map(req => {
    const isMet = selectedStartup.capabilities && selectedStartup.capabilities[req] === true;
    return { name: req, isMet, isMandatory: false };
  });

  const allMandatoryMet = mandatoryResults.every(r => r.isMet);
  const missingMandatoryCount = mandatoryResults.filter(r => !r.isMet).length;

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-pre">
            <Cpu size={16} /> Pre-Application Qualification Check
          </div>
          <h1 className="page-header-title">Technical Capability Check</h1>
          <p className="page-header-desc">
            Direct side-by-side gap analysis comparing mandatory department technical specifications with verified startup architecture before permitting pilot proposal submission.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ paddingBottom: '5rem' }}>
        
        {/* Comparison Selection Controls */}
        <div className="card" style={{ marginBottom: '2.5rem', backgroundColor: '#f8fafc' }}>
          <div className="grid-2">
            <div>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                Select Government Requirement:
              </label>
              <select
                className="form-control"
                value={selectedOppId}
                onChange={(e) => setSelectedOppId(e.target.value)}
              >
                {INITIAL_OPPORTUNITIES.map(opp => (
                  <option key={opp.id} value={opp.id}>
                    {opp.id} - {opp.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                Select Startup Profile to Audit:
              </label>
              <select
                className="form-control"
                value={selectedStartupId}
                onChange={(e) => setSelectedStartupId(e.target.value)}
              >
                {VERIFIED_STARTUPS.map(st => (
                  <option key={st.id} value={st.id}>
                    {st.name} ({st.domain})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Qualification Result Banner */}
        <div className={`card ${allMandatoryMet ? 'notice-box success' : 'notice-box warning'}`} style={{ marginBottom: '2.5rem', padding: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: allMandatoryMet ? '#dcfce7' : '#fee2e2',
                color: allMandatoryMet ? '#166534' : '#991b1b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {allMandatoryMet ? <CheckCircle2 size={28} /> : <XCircle size={28} />}
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: allMandatoryMet ? '#166534' : '#991b1b' }}>
                  Capability Assessment Conclusion
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f2942' }}>
                  {allMandatoryMet ? 'Eligible for Pilot Application' : 'Not Eligible for this Opportunity'}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', marginTop: '0.25rem' }}>
                  {allMandatoryMet 
                    ? 'All mandatory technical capabilities are fully satisfied by the verified startup profile.'
                    : `Missing ${missingMandatoryCount} mandatory capability parameter(s). All mandatory criteria must be proven before pilot application.`}
                </p>
              </div>
            </div>

            {allMandatoryMet ? (
              <button onClick={() => handleNav('opportunity-detail', selectedOpp.id)} className="btn btn-primary">
                Proceed to Proposal Submission <ArrowRight size={16} />
              </button>
            ) : (
              <button onClick={() => handleNav('opportunities')} className="btn btn-secondary">
                View Other Opportunities
              </button>
            )}
          </div>
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
          
          {/* Column 1: Government Requirement */}
          <div className="card">
            <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1d70b8', textTransform: 'uppercase' }}>
                Government Specification
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f2942' }}>
                Required Capabilities
              </h3>
              <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                {selectedOpp.department} ({selectedOpp.id})
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Mandatory Architecture Requirements:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {mandatoryList.map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    backgroundColor: '#f8fafc',
                    borderRadius: '6px',
                    border: '1px solid #e2e8f0'
                  }}>
                    <span style={{ fontWeight: 600, color: '#0f2942' }}>{item}</span>
                    <span className="badge badge-info">Mandatory</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Preferred Operational Capabilities:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {preferredList.map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    backgroundColor: '#ffffff',
                    borderRadius: '6px',
                    border: '1px solid #e2e8f0'
                  }}>
                    <span style={{ color: '#334155' }}>{item}</span>
                    <span className="badge badge-neutral">Preferred</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Column 2: Startup Capability */}
          <div className="card">
            <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#16a34a', textTransform: 'uppercase' }}>
                Enterprise Verification Profile
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f2942' }}>
                Startup Capabilities
              </h3>
              <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                {selectedStartup.name} ({selectedStartup.id})
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Mandatory Capabilities Verification:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {mandatoryResults.map((res, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    backgroundColor: res.isMet ? '#f0fdf4' : '#fef2f2',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: res.isMet ? '#bbf7d0' : '#fecaca'
                  }}>
                    <span style={{ fontWeight: 600, color: '#0f2942' }}>{res.name}</span>
                    {res.isMet ? (
                      <span className="badge badge-verified">
                        <CheckCircle2 size={12} /> Verified ✓
                      </span>
                    ) : (
                      <span className="badge badge-critical">
                        <XCircle size={12} /> Missing ✗
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Preferred Capabilities Verification:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {preferredResults.map((res, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    backgroundColor: res.isMet ? '#f0fdf4' : '#f8fafc',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: res.isMet ? '#bbf7d0' : '#e2e8f0'
                  }}>
                    <span style={{ color: '#334155' }}>{res.name}</span>
                    {res.isMet ? (
                      <span className="badge badge-verified">
                        <CheckCircle2 size={12} /> Available ✓
                      </span>
                    ) : (
                      <span className="badge badge-neutral">
                        Not Declared
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Section 10 Rule Callout */}
        <div className="card" style={{ backgroundColor: '#f8fafc' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f2942', marginBottom: '0.5rem' }}>
            Administrative Eligibility Rule
          </h4>
          <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: '1.6' }}>
            A startup cannot submit a proposal unless 100% of mandatory capabilities are satisfied. If any mandatory capability is missing, the system will explicitly highlight which item is deficient, enabling the startup to either upgrade their technical architecture or seek opportunities matching their verified capability set.
          </p>
        </div>

      </div>
    </div>
  );
}
