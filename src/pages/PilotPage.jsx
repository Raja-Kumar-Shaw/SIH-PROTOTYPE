import React from 'react';
import { 
  Layers, 
  ShieldCheck, 
  Target, 
  Clock, 
  DollarSign, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Building2, 
  Scale, 
  AlertCircle 
} from 'lucide-react';
import { DEMO_PILOT } from '../data/mockData';

export default function PilotPage({ setCurrentRoute }) {
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
            <Layers size={16} /> Staged Procurement Architecture
          </div>
          <h1 className="page-header-title">Pilot & Evaluation Framework</h1>
          <p className="page-header-desc">
            De-risking public sector procurement through funded, 60-day sandbox pilot implementations before committing to large-scale multi-year contracts.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ paddingBottom: '5rem' }}>
        
        {/* Core Concept Banner */}
        <div className="notice-box" style={{ marginBottom: '2.5rem' }}>
          <ShieldCheck size={24} color="#1d70b8" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div className="notice-title">Staged Risk-Mitigation Principle</div>
            <div className="notice-text">
              Public departments should not immediately award full multi-crore contracts to untested emerging technologies. Nirman mandates an initial low-risk pilot (Proof of Concept) with pre-agreed quantitative targets to empirically validate real-world operational viability.
            </div>
          </div>
        </div>

        {/* Financial Comparison Split Card */}
        <div className="card" style={{ marginBottom: '2.5rem', backgroundColor: '#f8fafc', padding: '2.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="badge badge-info">Standard Pilot Ratio Allocation</span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f2942', marginTop: '0.35rem' }}>
              Comparison: Pilot Proof of Concept vs Full Scale Implementation
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>
              {DEMO_PILOT.title} ({DEMO_PILOT.department})
            </p>
          </div>

          <div className="grid-2" style={{ gap: '2rem' }}>
            
            {/* Pilot Phase */}
            <div style={{
              backgroundColor: '#ffffff',
              border: '2px solid #16a34a',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 4px 12px rgba(22, 163, 74, 0.08)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="badge badge-verified">Phase 1: Pilot Evaluation</span>
                <span style={{ fontSize: '0.8rem', color: '#16a34a', fontWeight: 700 }}>LOW RISK</span>
              </div>
              
              <div style={{ fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Pilot Value</div>
              <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#16a34a', marginBottom: '0.5rem' }}>
                ₹5,00,000
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem', color: '#475569', marginBottom: '1.25rem' }}>
                <div>Duration: <strong>60 days</strong></div>
                <div>Coverage: <strong>1 Municipal Zone</strong></div>
              </div>

              <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1rem', fontSize: '0.875rem', color: '#334155', lineHeight: '1.6' }}>
                <strong>Objective: </strong> {DEMO_PILOT.objective}
              </div>
            </div>

            {/* Full Scale Phase */}
            <div style={{
              backgroundColor: '#ffffff',
              border: '1.5px solid #cbd5e1',
              borderRadius: '12px',
              padding: '2rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="badge badge-neutral">Phase 2: Full Project Scale</span>
                <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700 }}>CONTINGENT ON PILOT</span>
              </div>

              <div style={{ fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Full Project Value</div>
              <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f3d68', marginBottom: '0.5rem' }}>
                ₹50,00,000
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem', color: '#475569', marginBottom: '1.25rem' }}>
                <div>Duration: <strong>12-14 months</strong></div>
                <div>Coverage: <strong>City-Wide (All 5 Zones)</strong></div>
              </div>

              <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1rem', fontSize: '0.875rem', color: '#334155', lineHeight: '1.6' }}>
                <strong>Trigger Condition: </strong> Formal work order is awarded only after the pilot achieves at least 95% of target KPIs and receives competent authority sign-off.
              </div>
            </div>

          </div>
        </div>

        {/* Live Active Pilot Showcase */}
        <div className="card" style={{ marginBottom: '2.5rem' }}>
          <div className="card-header" style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
            <div>
              <span className="badge badge-info" style={{ marginBottom: '0.25rem' }}>Active Pilot Sandbox in Progress</span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f2942' }}>
                {DEMO_PILOT.title}
              </h3>
              <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                Pilot ID: <strong>{DEMO_PILOT.id}</strong> | Startup: <strong>{DEMO_PILOT.startup}</strong> | Department: <strong>{DEMO_PILOT.department}</strong>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Timeline Progress</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1d70b8' }}>
                Day {DEMO_PILOT.currentDay} of {DEMO_PILOT.pilotDurationDays}
              </div>
            </div>
          </div>

          <div style={{ padding: '1rem 0' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f2942', marginBottom: '0.75rem' }}>
              Four Pilot Sandbox Operating Rules
            </h4>

            <div className="grid-2" style={{ gap: '1.25rem', marginBottom: '1.5rem' }}>
              <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontWeight: 700, color: '#0f2942', marginBottom: '0.25rem' }}>1. Isolated Sandbox Boundary</div>
                <div style={{ fontSize: '0.85rem', color: '#475569' }}>
                  The pilot is conducted in a designated district metering zone or hospital ward, ensuring no disruption to critical public utilities or municipal citizens.
                </div>
              </div>

              <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontWeight: 700, color: '#0f2942', marginBottom: '0.25rem' }}>2. Clear Baseline Benchmark</div>
                <div style={{ fontSize: '0.85rem', color: '#475569' }}>
                  Pre-pilot metrics (e.g. 32% historical water loss, 48-hour response times) are audited and locked before sensor activation.
                </div>
              </div>

              <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontWeight: 700, color: '#0f2942', marginBottom: '0.25rem' }}>3. Independent Data Verification</div>
                <div style={{ fontSize: '0.85rem', color: '#475569' }}>
                  Sensor uplinks and telemetry are cross-checked with municipal billing meters and physical inspections by government engineers.
                </div>
              </div>

              <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontWeight: 700, color: '#0f2942', marginBottom: '0.25rem' }}>4. Non-Binding Next Stage</div>
                <div style={{ fontSize: '0.85rem', color: '#475569' }}>
                  Government retains absolute right to terminate engagement if pilot KPIs are not achieved, with zero liability for the full contract value.
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button onClick={() => handleNav('evaluation')} className="btn btn-primary">
                View Pilot KPI Evaluation Report <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
