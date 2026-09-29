import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Cpu, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  Target, 
  Clock, 
  FileText, 
  Upload,
  AlertCircle
} from 'lucide-react';
import { INITIAL_OPPORTUNITIES } from '../data/mockData';

export default function OpportunityDetailPage({ 
  opportunityId, 
  setCurrentRoute, 
  currentUserRole 
}) {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [applicationStatus, setApplicationStatus] = useState('Proposal Submitted');

  const opp = INITIAL_OPPORTUNITIES.find(o => o.id === opportunityId) || INITIAL_OPPORTUNITIES[0];

  const handleNav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleApply = (e) => {
    e.preventDefault();
    setApplicationSubmitted(true);
    setShowApplyModal(false);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div style={{ marginBottom: '1rem' }}>
            <button 
              onClick={() => handleNav('opportunities')} 
              className="btn btn-sm btn-outline"
            >
              <ArrowLeft size={14} /> Back to All Opportunities
            </button>
          </div>
          <div className="page-header-pre">
            <Building2 size={16} /> {opp.department} | {opp.id}
          </div>
          <h1 className="page-header-title">{opp.title}</h1>
          <p className="page-header-desc">
            Published under the State Innovation Procurement Framework with funded 60-day sandbox pilot phase.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ paddingBottom: '5rem' }}>
        
        {/* Top Summary Banner */}
        <div className="card" style={{ marginBottom: '2.5rem', backgroundColor: '#f8fafc' }}>
          <div className="grid-4">
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Domain</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f2942', marginTop: '0.25rem' }}>{opp.domain}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Pilot Allocation</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#16a34a', marginTop: '0.25rem' }}>{opp.pilotValue} ({opp.pilotDuration})</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Full Project Scale</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f3d68', marginTop: '0.25rem' }}>{opp.estimatedProjectValue}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Proposal Deadline</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#d97706', marginTop: '0.25rem' }}>{opp.applicationDeadline}</div>
            </div>
          </div>
        </div>

        {/* Application Status Banner if applied */}
        {applicationSubmitted && (
          <div className="notice-box success" style={{ marginBottom: '2rem' }}>
            <CheckCircle2 size={24} color="#166534" />
            <div style={{ width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="notice-title">Proposal Successfully Submitted for Review</div>
                <span className="badge badge-info">Current Status: {applicationStatus}</span>
              </div>
              <div className="notice-text">
                Your structured pilot proposal has been received by the {opp.department}. The technical committee will conduct capability verification and review shortlisted candidates for the pilot sandbox.
              </div>
            </div>
          </div>
        )}

        <div className="grid-3" style={{ gap: '2rem' }}>
          
          {/* Main 2 columns: Description & KPIs */}
          <div style={{ gridColumn: 'span 2' }}>
            
            {/* Detailed Description */}
            <div className="card" style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f2942', marginBottom: '1rem' }}>
                Challenge Statement & Operational Scope
              </h2>
              <p style={{ fontSize: '1rem', color: '#334155', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                {opp.summary}
              </p>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f2942', marginBottom: '0.75rem' }}>
                Required Technology & Architecture Standards
              </h3>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                {opp.requiredTechnology.split(',').map((tech, i) => (
                  <span key={i} style={{
                    backgroundColor: '#e8f1f8',
                    color: '#0f3d68',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '6px',
                    border: '1px solid #cbd5e1'
                  }}>
                    {tech.trim()}
                  </span>
                ))}
              </div>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f2942', marginBottom: '0.75rem' }}>
                Target Performance KPIs (Mandatory for Pilot Sign-Off)
              </h3>
              <div className="table-responsive">
                <table className="gov-table">
                  <thead>
                    <tr>
                      <th>Performance Metric</th>
                      <th>Contractual Target</th>
                      <th>Baseline Reference</th>
                    </tr>
                  </thead>
                  <tbody>
                    {opp.targetKPIs.map((kpi, idx) => (
                      <tr key={idx}>
                        <td><strong>{kpi.metric}</strong></td>
                        <td><span className="badge badge-verified">{kpi.target}</span></td>
                        <td>{kpi.baseline}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Proposal Flow Step Hierarchy */}
            <div className="card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f2942', marginBottom: '1rem' }}>
                Proposal & Pilot Progression Sequence
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ textAlign: 'center', flex: 1 }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1d70b8' }}>STEP 1</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>View Opportunity</div>
                </div>
                <div>→</div>
                <div style={{ textAlign: 'center', flex: 1 }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1d70b8' }}>STEP 2</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>Check Eligibility</div>
                </div>
                <div>→</div>
                <div style={{ textAlign: 'center', flex: 1 }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1d70b8' }}>STEP 3</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>Submit Proposal</div>
                </div>
                <div>→</div>
                <div style={{ textAlign: 'center', flex: 1 }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1d70b8' }}>STEP 4</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>Govt Review</div>
                </div>
                <div>→</div>
                <div style={{ textAlign: 'center', flex: 1 }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#16a34a' }}>STEP 5</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>Pilot Award</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Eligibility & Action Card */}
          <div>
            <div className="card" style={{ position: 'sticky', top: '90px' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f2942', marginBottom: '1rem' }}>
                Eligibility Criteria
              </h3>

              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem', fontSize: '0.875rem', color: '#334155' }}>
                {opp.eligibilityCriteria.map((crit, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{crit}</span>
                  </li>
                ))}
              </ul>

              <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#64748b' }}>Location:</span>
                  <strong>{opp.location}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#64748b' }}>Post-Pilot Implementation:</span>
                  <strong>{opp.timeline}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: '#64748b' }}>Governing Norm:</span>
                  <strong>Maharashtra GFR</strong>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button 
                  onClick={() => handleNav('capability')} 
                  className="btn btn-outline"
                  style={{ width: '100%' }}
                >
                  <Cpu size={16} /> Verify Technical Capability Match
                </button>

                {!applicationSubmitted ? (
                  <button 
                    onClick={() => setShowApplyModal(true)} 
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '0.85rem' }}
                  >
                    Submit Proposal for Pilot Project <ArrowRight size={16} />
                  </button>
                ) : (
                  <button 
                    onClick={() => handleNav('pilot')} 
                    className="btn btn-success"
                    style={{ width: '100%', padding: '0.85rem' }}
                  >
                    View Active Pilot Details
                  </button>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Application Proposal Submission Modal */}
      {showApplyModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f2942' }}>
                  Submit Pilot Proposal
                </h3>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                  {opp.id} | {opp.title}
                </div>
              </div>
              <button 
                onClick={() => setShowApplyModal(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.25rem', color: '#64748b' }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleApply}>
              <div className="modal-body">
                
                <div className="notice-box" style={{ marginBottom: '1rem', padding: '0.75rem 1rem' }}>
                  <ShieldCheck size={20} color="#1d70b8" />
                  <div style={{ fontSize: '0.8rem', color: '#0f3d68' }}>
                    Submitting Proposal as: <strong>AquaTech Solutions Private Limited</strong> (Verified Profile U74999MH2021PTC358921)
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="proposalSummary">
                    Technical Solution Summary <span className="required">*</span>
                  </label>
                  <textarea
                    id="proposalSummary"
                    className="form-control"
                    rows={3}
                    placeholder="Describe how your hardware/software architecture meets the department's requirements..."
                    defaultValue="Deployment of non-invasive acoustic sensors along municipal distribution lines in Zone 4 with LoRaWAN telemetry to achieve 24% water loss reduction and 7-minute leak response time."
                    required
                  />
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="proposedPilotCost">
                      Proposed Pilot Cost (₹) <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="proposedPilotCost"
                      className="form-control"
                      defaultValue="₹5,00,000"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="proposedPilotTime">
                      Proposed Pilot Duration <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="proposedPilotTime"
                      className="form-control"
                      defaultValue="60 days"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Upload Technical Proposal & Work Breakdown (PDF)
                  </label>
                  <div style={{ border: '1px dashed #cbd5e1', padding: '1rem', borderRadius: '6px', textAlign: 'center', backgroundColor: '#f8fafc' }}>
                    <FileText size={24} color="#16a34a" style={{ marginBottom: '0.25rem' }} />
                    <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>Pilot_Execution_Plan_AquaTech.pdf</div>
                    <div style={{ fontSize: '0.75rem', color: '#16a34a' }}>Authenticated & Ready for Submission</div>
                  </div>
                </div>

                <div style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: '1.5' }}>
                  By submitting, you certify that all declarations are true as per legal entity records and that your organisation complies with the General Financial Rules (GFR).
                </div>

              </div>

              <div className="modal-footer">
                <button 
                  type="button" 
                  onClick={() => setShowApplyModal(false)} 
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Confirm Proposal Submission
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
