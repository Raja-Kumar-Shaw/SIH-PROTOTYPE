import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Building2, 
  Rocket, 
  FileText, 
  Layers, 
  Award, 
  CreditCard, 
  Activity, 
  CheckCircle2, 
  AlertTriangle,
  Sliders,
  History
} from 'lucide-react';
import { DEMO_AUDIT_LOGS, DEMO_VERIFICATION_RECORDS, INITIAL_OPPORTUNITIES } from '../data/mockData';

export default function AdminDashboardPage({ setCurrentRoute }) {
  const [feePercentage, setFeePercentage] = useState(2.0);
  const [savedNotice, setSavedNotice] = useState(false);

  const handleNav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveFee = () => {
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-pre">
            <ShieldCheck size={16} /> Central Administrative Oversight
          </div>
          <h1 className="page-header-title">Admin & Auditor Dashboard</h1>
          <p className="page-header-desc">
            System-wide regulatory governance, applicant verification queues, opportunity audit trails, platform fee configuration, and statutory compliance monitoring.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ paddingBottom: '5rem' }}>
        
        {/* Top 8 Metrics required by Section 20 */}
        <div className="grid-4" style={{ marginBottom: '2.5rem' }}>
          
          <div className="card" onClick={() => handleNav('register-government')} style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Govt Verification</div>
              <Building2 size={18} color="#1d70b8" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f2942', marginTop: '0.5rem' }}>24</div>
            <div style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600, marginTop: '0.25rem' }}>All 24 Departments Active</div>
          </div>

          <div className="card" onClick={() => handleNav('verification')} style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Startup Verification</div>
              <Rocket size={18} color="#16a34a" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f2942', marginTop: '0.5rem' }}>142</div>
            <div style={{ fontSize: '0.75rem', color: '#d97706', fontWeight: 600, marginTop: '0.25rem' }}>3 Pending Review</div>
          </div>

          <div className="card" onClick={() => handleNav('opportunities')} style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Opportunities</div>
              <FileText size={18} color="#1d70b8" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f2942', marginTop: '0.5rem' }}>5 Active</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>Value: ₹3.14 Crores</div>
          </div>

          <div className="card" onClick={() => handleNav('opportunities')} style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Applications</div>
              <Activity size={18} color="#1d70b8" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f2942', marginTop: '0.5rem' }}>38 Total</div>
            <div style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600, marginTop: '0.25rem' }}>12 Shortlisted for Pilot</div>
          </div>

        </div>

        {/* Row 2: Pilots, Contracts, Payments, Audit Logs */}
        <div className="grid-4" style={{ marginBottom: '2.5rem' }}>
          
          <div className="card" onClick={() => handleNav('pilot')} style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Active Pilots</div>
              <Layers size={18} color="#1d70b8" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f2942', marginTop: '0.5rem' }}>4</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>Total Pilot Value: ₹28.7 Lakhs</div>
          </div>

          <div className="card" onClick={() => handleNav('procurement')} style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Active Contracts</div>
              <Award size={18} color="#1d70b8" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f2942', marginTop: '0.5rem' }}>7</div>
            <div style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600, marginTop: '0.25rem' }}>Formal Work Orders Issued</div>
          </div>

          <div className="card" onClick={() => handleNav('payments')} style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Payments Cleared</div>
              <CreditCard size={18} color="#16a34a" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#16a34a', marginTop: '0.5rem' }}>₹1.85 Cr</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>Zero Audit Irregularities</div>
          </div>

          <div className="card" style={{ borderLeft: '4px solid #0f3d68' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Audit Events</div>
              <History size={18} color="#0f3d68" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f3d68', marginTop: '0.5rem' }}>4,921</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>Immutable System Logs</div>
          </div>

        </div>

        {/* Platform Fee Configuration Module (Section 19) */}
        <div className="card" style={{ marginBottom: '2.5rem', backgroundColor: '#f8fafc' }}>
          <div className="card-header">
            <div>
              <h3 className="card-title">Proposed Platform Service Fee Configuration</h3>
              <p className="card-subtitle">Configurable platform rate applied across processed innovation contracts</p>
            </div>
            <span className="badge badge-neutral">Admin Control</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', margin: '1rem 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, minWidth: '260px' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Proposed Service Rate:</span>
              <input
                type="range"
                min="0.5"
                max="5.0"
                step="0.1"
                value={feePercentage}
                onChange={(e) => setFeePercentage(parseFloat(e.target.value))}
                style={{ flex: 1, cursor: 'pointer' }}
              />
              <span style={{ fontWeight: 800, fontSize: '1.25rem', color: '#0f3d68', minWidth: '60px' }}>
                {feePercentage.toFixed(1)}%
              </span>
            </div>

            <button onClick={handleSaveFee} className="btn btn-primary">
              {savedNotice ? 'Saved to System Settings ✓' : 'Save Configured Rate'}
            </button>
          </div>

          <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
            Mandatory notice: This fee is presented as a Proposed Platform Service Fee and is subject to applicable procurement rules, contract terms, and required approvals.
          </div>
        </div>

        {/* Audit Logs Table (Section 20) */}
        <div className="card">
          <div className="card-header">
            <div>
              <h3 className="card-title">Statutory Audit Trail & System Events</h3>
              <p className="card-subtitle">Real-time tamper-evident event log for administrative verification</p>
            </div>
            <span className="badge badge-verified">Audit Synchronized</span>
          </div>

          <div className="table-responsive">
            <table className="gov-table">
              <thead>
                <tr>
                  <th>Event ID</th>
                  <th>Timestamp (IST)</th>
                  <th>Actor / Module</th>
                  <th>Action / Event Description</th>
                  <th>Verification Result</th>
                </tr>
              </thead>
              <tbody>
                {DEMO_AUDIT_LOGS.map(log => (
                  <tr key={log.id}>
                    <td><span className="badge badge-neutral">{log.id}</span></td>
                    <td style={{ fontSize: '0.825rem', color: '#475569' }}>{log.timestamp}</td>
                    <td><strong>{log.actor}</strong></td>
                    <td style={{ fontSize: '0.875rem' }}>{log.event}</td>
                    <td>
                      <span className={`badge ${log.result === 'Pass' || log.result === 'Success' ? 'badge-verified' : 'badge-info'}`}>
                        {log.result}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
