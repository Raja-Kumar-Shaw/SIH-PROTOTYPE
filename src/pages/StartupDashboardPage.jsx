import React from 'react';
import { 
  Rocket, 
  ShieldCheck, 
  Search, 
  FileText, 
  Layers, 
  Award, 
  CheckCircle2, 
  CreditCard, 
  ArrowRight,
  Clock,
  Building2,
  Cpu
} from 'lucide-react';
import { DEMO_PILOT, DEMO_PROCUREMENT_CONTRACT } from '../data/mockData';

export default function StartupDashboardPage({ setCurrentRoute }) {
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
            <Rocket size={16} /> Enterprise Innovator Portal
          </div>
          <h1 className="page-header-title">Startup Dashboard</h1>
          <p className="page-header-desc">
            Organisation: <strong>AquaTech Solutions Private Limited</strong> (CIN: U74999MH2021PTC358921 | GSTIN: 27AAACA1234D1Z5)
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ paddingBottom: '5rem' }}>
        
        {/* Top 7 Metrics required by Section 20 */}
        <div className="grid-4" style={{ marginBottom: '2.5rem' }}>
          
          <div className="card" onClick={() => handleNav('verification')} style={{ cursor: 'pointer', borderLeft: '4px solid #16a34a' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#16a34a', textTransform: 'uppercase' }}>Verification Status</div>
              <ShieldCheck size={18} color="#16a34a" />
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#166534', marginTop: '0.5rem' }}>Verified ✓</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>MCA & GSTIN Validated</div>
          </div>

          <div className="card" onClick={() => handleNav('opportunities')} style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Eligible Opportunities</div>
              <Search size={18} color="#1d70b8" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f2942', marginTop: '0.5rem' }}>3</div>
            <div style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600, marginTop: '0.25rem' }}>100% Capability Match</div>
          </div>

          <div className="card" onClick={() => handleNav('opportunities')} style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Applications</div>
              <FileText size={18} color="#1d70b8" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f2942', marginTop: '0.5rem' }}>2</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>1 Awarded, 1 Under Review</div>
          </div>

          <div className="card" onClick={() => handleNav('pilot')} style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Active Pilots</div>
              <Layers size={18} color="#1d70b8" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f3d68', marginTop: '0.5rem' }}>1</div>
            <div style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600, marginTop: '0.25rem' }}>Day 57 of 60 (Achieved)</div>
          </div>

        </div>

        {/* Row 2: Contracts, Milestones, Payments */}
        <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
          
          <div className="card" onClick={() => handleNav('procurement')} style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Government Contracts</div>
              <Award size={18} color="#1d70b8" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f2942', marginTop: '0.5rem' }}>1 Active</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>Work Order WO/2026/WSSD/PUNE (₹50L)</div>
          </div>

          <div className="card" onClick={() => handleNav('procurement')} style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Milestones Status</div>
              <CheckCircle2 size={18} color="#16a34a" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f2942', marginTop: '0.5rem' }}>2 / 4</div>
            <div style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600, marginTop: '0.25rem' }}>Milestones 1 & 2 Completed & Paid</div>
          </div>

          <div className="card" onClick={() => handleNav('payments')} style={{ cursor: 'pointer', borderLeft: '4px solid #16a34a' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#166534', textTransform: 'uppercase' }}>Payments Received</div>
              <CreditCard size={18} color="#16a34a" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#16a34a', marginTop: '0.5rem' }}>₹25,00,000</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>Pending: ₹25,00,000 (Tranches 3 & 4)</div>
          </div>

        </div>

        {/* Explore Verified Startup Modules */}
        <div className="card" style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f2942', marginBottom: '0.5rem' }}>
            Explore Verified Startup Modules
          </h3>
          <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '1.25rem' }}>
            Direct access to verified government challenges, technical capability testing, and milestone payment schedules.
          </p>
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

        {/* Live Active Contract Overview */}
        <div className="card" style={{ marginBottom: '2.5rem' }}>
          <div className="card-header">
            <div>
              <h3 className="card-title">Active Implementation Contract & Delivery Schedule</h3>
              <p className="card-subtitle">
                {DEMO_PROCUREMENT_CONTRACT.opportunityTitle} — Water Supply and Sanitation Department
              </p>
            </div>
            <button onClick={() => handleNav('payments')} className="btn btn-sm btn-primary">
              View Payment Breakdown
            </button>
          </div>

          <div className="table-responsive">
            <table className="gov-table">
              <thead>
                <tr>
                  <th>Milestone</th>
                  <th>Deliverable Description</th>
                  <th>Share %</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {DEMO_PROCUREMENT_CONTRACT.milestones.map((m) => (
                  <tr key={m.number}>
                    <td><strong>Milestone {m.number}</strong></td>
                    <td>{m.name}</td>
                    <td>{m.sharePercentage}%</td>
                    <td><strong>₹{(m.amount).toLocaleString('en-IN')}</strong></td>
                    <td>
                      <span className={`badge ${m.status === 'Payment Released' ? 'badge-released' : m.status === 'Pending Approval' ? 'badge-warning' : 'badge-neutral'}`}>
                        {m.status}
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
