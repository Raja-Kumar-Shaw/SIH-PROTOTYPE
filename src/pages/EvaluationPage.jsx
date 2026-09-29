import React, { useState } from 'react';
import { 
  Target, 
  CheckCircle2, 
  AlertCircle, 
  XCircle, 
  Award, 
  ArrowRight, 
  FileText, 
  Printer, 
  Building2, 
  ShieldCheck, 
  Scale,
  TrendingUp
} from 'lucide-react';
import { DEMO_PILOT } from '../data/mockData';

export default function EvaluationPage({ setCurrentRoute }) {
  const [reportExported, setReportExported] = useState(false);

  const handleNav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExport = () => {
    setReportExported(true);
    setTimeout(() => setReportExported(false), 3000);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-pre">
            <Target size={16} /> Objective Metric Verification
          </div>
          <h1 className="page-header-title">KPI-Based Pilot Evaluation</h1>
          <p className="page-header-desc">
            Empirical validation of pre-defined quantitative Key Performance Indicators and 8-point comprehensive feasibility assessment prior to procurement transition.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ paddingBottom: '5rem' }}>
        
        {/* Top Pilot Summary Card */}
        <div className="card" style={{ marginBottom: '2.5rem', backgroundColor: '#f8fafc' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="badge badge-verified" style={{ marginBottom: '0.35rem' }}>
                Pilot Evaluation Phase Complete
              </span>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f2942' }}>
                {DEMO_PILOT.title}
              </h2>
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.25rem' }}>
                Department: <strong>{DEMO_PILOT.department}</strong> | Startup: <strong>{DEMO_PILOT.startup}</strong> | Pilot ID: <strong>{DEMO_PILOT.id}</strong>
              </div>
            </div>

            <button onClick={handleExport} className="btn btn-outline">
              <Printer size={16} /> {reportExported ? 'Report Downloaded!' : 'Export Formal Evaluation Report'}
            </button>
          </div>
        </div>

        {/* Section 13: Measurable KPIs Table */}
        <div className="card" style={{ marginBottom: '2.5rem' }}>
          <div className="card-header">
            <div>
              <h3 className="card-title">Measurable Pilot Performance KPIs</h3>
              <p className="card-subtitle">Comparison of contractually defined targets versus actual field telemetry</p>
            </div>
            <span className="badge badge-verified">4 of 4 KPIs Achieved</span>
          </div>

          <div className="table-responsive">
            <table className="gov-table">
              <thead>
                <tr>
                  <th>Performance Metric</th>
                  <th>Contractual Target</th>
                  <th>Actual Field Result</th>
                  <th>Variance</th>
                  <th>Evaluation Method</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {DEMO_PILOT.kpis.map((kpi) => (
                  <tr key={kpi.id}>
                    <td>
                      <div style={{ fontWeight: 700, color: '#0f2942' }}>{kpi.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{kpi.description}</div>
                    </td>
                    <td>
                      <span className="badge badge-neutral" style={{ fontSize: '0.825rem' }}>
                        {kpi.target}
                      </span>
                    </td>
                    <td>
                      <strong style={{ fontSize: '0.95rem', color: '#0f2942' }}>
                        {kpi.actual}
                      </strong>
                    </td>
                    <td>
                      <span style={{ fontWeight: 700, color: '#16a34a' }}>
                        {kpi.variance}
                      </span>
                    </td>
                    <td style={{ fontSize: '0.8rem', color: '#475569' }}>
                      {kpi.evaluationMethod}
                    </td>
                    <td>
                      <span className={`badge ${kpi.status === 'Achieved' ? 'badge-achieved' : kpi.status === 'Partially Achieved' ? 'badge-warning' : 'badge-critical'}`}>
                        <CheckCircle2 size={12} /> {kpi.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 14: Full Project Evaluation (8-Point Assessment) */}
        <div className="card" style={{ marginBottom: '2.5rem' }}>
          <div className="card-header">
            <div>
              <h3 className="card-title">8-Point Comprehensive Feasibility Assessment</h3>
              <p className="card-subtitle">Multi-parameter institutional review following successful pilot completion</p>
            </div>
            <span className="badge badge-info">Authorised Review Matrix</span>
          </div>

          <div className="grid-2" style={{ gap: '1.25rem', marginBottom: '2rem' }}>
            
            <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                <span style={{ fontWeight: 700, color: '#0f2942' }}>1. Pilot Performance</span>
                <span className="badge badge-verified">Strong</span>
              </div>
              <div style={{ fontSize: '0.825rem', color: '#64748b' }}>
                Exceeded water loss reduction target by 4% with zero downtime incidents.
              </div>
            </div>

            <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                <span style={{ fontWeight: 700, color: '#0f2942' }}>2. Scalability</span>
                <span className="badge badge-verified">High</span>
              </div>
              <div style={{ fontSize: '0.825rem', color: '#64748b' }}>
                Telemetry architecture verified for up to 10,000 devices across Pune metropolitan region.
              </div>
            </div>

            <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                <span style={{ fontWeight: 700, color: '#0f2942' }}>3. Security</span>
                <span className="badge badge-verified">Compliant</span>
              </div>
              <div style={{ fontSize: '0.825rem', color: '#64748b' }}>
                ISO 27001 audited, end-to-end telemetry encryption, hosted within MeitY empanelled cloud.
              </div>
            </div>

            <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                <span style={{ fontWeight: 700, color: '#0f2942' }}>4. Compliance</span>
                <span className="badge badge-verified">Fully Verified</span>
              </div>
              <div style={{ fontSize: '0.825rem', color: '#64748b' }}>
                Active GSTIN, MCA filings in order, all statutory labor and anti-collusion declarations filed.
              </div>
            </div>

            <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                <span style={{ fontWeight: 700, color: '#0f2942' }}>5. Technical Capability</span>
                <span className="badge badge-verified">Strong</span>
              </div>
              <div style={{ fontSize: '0.825rem', color: '#64748b' }}>
                Proprietary acoustic noise filtering algorithm proven in dense municipal pipeline environments.
              </div>
            </div>

            <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                <span style={{ fontWeight: 700, color: '#0f2942' }}>6. Cost Effectiveness</span>
                <span className="badge badge-verified">High</span>
              </div>
              <div style={{ fontSize: '0.825rem', color: '#64748b' }}>
                Demonstrated economic payback in under 18 months based on value of conserved potable water.
              </div>
            </div>

            <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                <span style={{ fontWeight: 700, color: '#0f2942' }}>7. Maintainability</span>
                <span className="badge badge-verified">High</span>
              </div>
              <div style={{ fontSize: '0.825rem', color: '#64748b' }}>
                Modular strap-on sensor units replaceable in under 15 minutes without pipeline supply cuts.
              </div>
            </div>

            <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                <span style={{ fontWeight: 700, color: '#0f2942' }}>8. Support Capability</span>
                <span className="badge badge-verified">Strong</span>
              </div>
              <div style={{ fontSize: '0.825rem', color: '#64748b' }}>
                Operational regional service desk in Baner, Pune with dedicated 4-hour field response SLA.
              </div>
            </div>

          </div>

          {/* Institutional Recommendation Box */}
          <div style={{
            backgroundColor: '#f0fdf4',
            border: '2px solid #86efac',
            borderRadius: '12px',
            padding: '1.75rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#166534', textTransform: 'uppercase' }}>
                Technical Evaluation Committee Finding
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#14532d', marginTop: '0.25rem' }}>
                {DEMO_PILOT.comprehensiveEvaluation.finalRecommendation}
              </div>
              <p style={{ fontSize: '0.85rem', color: '#166534', marginTop: '0.35rem', maxWidth: '700px' }}>
                {DEMO_PILOT.comprehensiveEvaluation.disclaimer}
              </p>
            </div>

            <button onClick={() => handleNav('procurement')} className="btn btn-lg btn-success">
              Proceed to Procurement Contract <ArrowRight size={18} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
