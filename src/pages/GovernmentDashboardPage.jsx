import React from 'react';
import { 
  Building2, 
  FileText, 
  Users, 
  Layers, 
  TrendingUp, 
  AlertTriangle, 
  CreditCard, 
  ArrowRight, 
  PlusCircle, 
  CheckCircle2,
  Clock,
  Search,
  Cpu,
  Target
} from 'lucide-react';
import { INITIAL_OPPORTUNITIES, VERIFIED_STARTUPS } from '../data/mockData';

export default function GovernmentDashboardPage({ setCurrentRoute, setSelectedOpportunityId }) {
  const handleNav = (route, oppId = null) => {
    if (oppId) setSelectedOpportunityId(oppId);
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-pre">
            <Building2 size={16} /> Official Management Console
          </div>
          <h1 className="page-header-title">Government Dashboard</h1>
          <p className="page-header-desc">
            Executive overview for department officers: track active requirements, incoming pilot proposals, verified startups, implementation delays, and pending payment releases.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ paddingBottom: '5rem' }}>
        
        {/* Top 7 Metric Cards required by Section 20 */}
        <div className="grid-4" style={{ marginBottom: '2.5rem' }}>
          
          <div className="card" onClick={() => handleNav('opportunities')} style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Active Requirements</div>
              <FileText size={18} color="#1d70b8" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f2942', marginTop: '0.5rem' }}>5</div>
            <div style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600, marginTop: '0.25rem' }}>Across 6 MH Departments</div>
          </div>

          <div className="card" onClick={() => handleNav('matching')} style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Proposals</div>
              <Users size={18} color="#1d70b8" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f2942', marginTop: '0.5rem' }}>18</div>
            <div style={{ fontSize: '0.75rem', color: '#1d70b8', fontWeight: 600, marginTop: '0.25rem' }}>4 Under Active Technical Review</div>
          </div>

          <div className="card" onClick={() => handleNav('verification')} style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Verified Startups</div>
              <CheckCircle2 size={18} color="#16a34a" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#16a34a', marginTop: '0.5rem' }}>142</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>MCA & GSTIN Authenticated</div>
          </div>

          <div className="card" onClick={() => handleNav('pilot')} style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Active Pilots</div>
              <Layers size={18} color="#1d70b8" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f3d68', marginTop: '0.5rem' }}>3</div>
            <div style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600, marginTop: '0.25rem' }}>All On Staged Sandbox Terms</div>
          </div>

        </div>

        {/* Row 2: Projects, Delayed Projects, Payments Pending */}
        <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
          
          <div className="card" onClick={() => handleNav('procurement')} style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Scale Projects</div>
              <TrendingUp size={18} color="#1d70b8" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f2942', marginTop: '0.5rem' }}>7</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>Under Implementation</div>
          </div>

          <div className="card" onClick={() => handleNav('monitoring')} style={{ cursor: 'pointer', borderLeft: '4px solid #d97706' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#d97706', textTransform: 'uppercase' }}>Delayed Projects</div>
              <AlertTriangle size={18} color="#d97706" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#d97706', marginTop: '0.5rem' }}>1</div>
            <div style={{ fontSize: '0.75rem', color: '#d97706', fontWeight: 600, marginTop: '0.25rem' }}>Pune Water Telemetry (7d Variance)</div>
          </div>

          <div className="card" onClick={() => handleNav('payments')} style={{ cursor: 'pointer', borderLeft: '4px solid #1d70b8' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1d70b8', textTransform: 'uppercase' }}>Payments Pending</div>
              <CreditCard size={18} color="#1d70b8" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#1d70b8', marginTop: '0.5rem' }}>₹15,00,000</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>Milestone 3 (Under Approval)</div>
          </div>

        </div>

        {/* Direct Department Tooling */}
        <div className="card" style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f2942', marginBottom: '0.5rem' }}>
            Direct Department Tooling
          </h3>
          <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '1.25rem' }}>
            One-click operational workflows and statutory assessment tools for authorized government officers.
          </p>
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

        {/* Quick Action & Active Requirements Section */}
        <div className="card" style={{ marginBottom: '2.5rem' }}>
          <div className="card-header">
            <div>
              <h3 className="card-title">Active Department Requirements & Pilot Allocations</h3>
              <p className="card-subtitle">Published under Water Supply and Sanitation Department</p>
            </div>
            <button onClick={() => handleNav('opportunities')} className="btn btn-sm btn-primary">
              <PlusCircle size={14} /> Publish New Challenge
            </button>
          </div>

          <div className="table-responsive">
            <table className="gov-table">
              <thead>
                <tr>
                  <th>Requirement Title</th>
                  <th>Domain</th>
                  <th>Pilot Budget</th>
                  <th>Proposals</th>
                  <th>Shortlisted</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {INITIAL_OPPORTUNITIES.slice(0, 3).map(opp => (
                  <tr key={opp.id}>
                    <td>
                      <div style={{ fontWeight: 700, color: '#0f2942' }}>{opp.title}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{opp.id} | {opp.location}</div>
                    </td>
                    <td><span className="badge badge-info">{opp.domain}</span></td>
                    <td><strong style={{ color: '#16a34a' }}>{opp.pilotValue}</strong></td>
                    <td><strong>6 Proposals Received</strong></td>
                    <td><strong>2 Shortlisted</strong></td>
                    <td><span className="badge badge-verified">{opp.status}</span></td>
                    <td>
                      <button onClick={() => handleNav('matching', opp.id)} className="btn btn-sm btn-outline">
                        Inspect Startups
                      </button>
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
