import React from 'react';
import { 
  Award, 
  FileText, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  Building2, 
  ShieldCheck, 
  ArrowRight, 
  Scale,
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';
import { DEMO_PROCUREMENT_CONTRACT } from '../data/mockData';

export default function ProcurementPage({ setCurrentRoute }) {
  const handleNav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const workflowSteps = [
    { title: "Pilot Completed", status: "Done" },
    { title: "Evaluation Completed", status: "Done" },
    { title: "Authorised Review", status: "Done" },
    { title: "Procurement Decision", status: "Done" },
    { title: "Contract / Work Order", status: "Active" },
    { title: "Implementation", status: "Next" }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-pre">
            <Award size={16} /> Formal Contract Transition
          </div>
          <h1 className="page-header-title">Procurement & Work Orders</h1>
          <p className="page-header-desc">
            Formalisation of validated innovation solutions into official public procurement contracts, work orders, service level agreements (SLAs), and implementation milestone schedules.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ paddingBottom: '5rem' }}>
        
        {/* Section 15 Workflow Flow Banner */}
        <div className="card" style={{ marginBottom: '2.5rem', backgroundColor: '#f8fafc', padding: '1.5rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '1rem', textAlign: 'center' }}>
            Procurement Transition Progression Flow
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
            {workflowSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: step.status === 'Done' ? '#dcfce7' : step.status === 'Active' ? '#e8f1f8' : '#ffffff',
                  border: '1px solid',
                  borderColor: step.status === 'Done' ? '#86efac' : step.status === 'Active' ? '#1d70b8' : '#cbd5e1',
                  borderRadius: '6px',
                  padding: '0.5rem 0.85rem'
                }}>
                  {step.status === 'Done' ? (
                    <CheckCircle2 size={16} color="#16a34a" />
                  ) : (
                    <span style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      backgroundColor: step.status === 'Active' ? '#1d70b8' : '#94a3b8',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.65rem',
                      fontWeight: 700
                    }}>
                      {idx + 1}
                    </span>
                  )}
                  <span style={{ fontSize: '0.825rem', fontWeight: 600, color: '#0f2942' }}>
                    {step.title}
                  </span>
                </div>

                {idx < workflowSteps.length - 1 && (
                  <span style={{ color: '#94a3b8', fontWeight: 700 }}>→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Contract Master Card */}
        <div className="card" style={{ marginBottom: '2.5rem' }}>
          
          <div className="card-header" style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '1.25rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                <span className="badge badge-verified">Executed Work Order</span>
                <span className="badge badge-neutral">Contract ID: {DEMO_PROCUREMENT_CONTRACT.contractId}</span>
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f2942' }}>
                {DEMO_PROCUREMENT_CONTRACT.opportunityTitle}
              </h2>
              <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                Work Order Number: <strong>{DEMO_PROCUREMENT_CONTRACT.workOrderNumber}</strong> | Award Date: <strong>{DEMO_PROCUREMENT_CONTRACT.awardDate}</strong>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Total Contract Value</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f3d68' }}>
                ₹50,00,000
              </div>
              <div style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600 }}>State Sanctioned Budget</div>
            </div>
          </div>

          {/* Key Contractual Parameters */}
          <div style={{ padding: '1.5rem 0', borderBottom: '1px solid #e2e8f0' }}>
            <div className="grid-3" style={{ gap: '1.5rem', fontSize: '0.875rem' }}>
              <div>
                <span style={{ color: '#64748b', display: 'block', marginBottom: '0.2rem' }}>Procuring Department:</span>
                <strong style={{ color: '#0f2942' }}>{DEMO_PROCUREMENT_CONTRACT.department}</strong>
              </div>

              <div>
                <span style={{ color: '#64748b', display: 'block', marginBottom: '0.2rem' }}>Verified Contractor:</span>
                <strong style={{ color: '#0f2942' }}>{DEMO_PROCUREMENT_CONTRACT.startup}</strong>
              </div>

              <div>
                <span style={{ color: '#64748b', display: 'block', marginBottom: '0.2rem' }}>Implementation Period:</span>
                <strong style={{ color: '#0f2942' }}>12 Months (Target: {DEMO_PROCUREMENT_CONTRACT.targetCompletionDate})</strong>
              </div>

              <div>
                <span style={{ color: '#64748b', display: 'block', marginBottom: '0.2rem' }}>SLA Commitment:</span>
                <strong style={{ color: '#0f2942' }}>{DEMO_PROCUREMENT_CONTRACT.slaUptime}</strong>
              </div>

              <div>
                <span style={{ color: '#64748b', display: 'block', marginBottom: '0.2rem' }}>Proposed Platform Fee (2%):</span>
                <strong style={{ color: '#0f2942' }}>₹1,00,000 (Subject to Approvals)</strong>
              </div>

              <div>
                <span style={{ color: '#64748b', display: 'block', marginBottom: '0.2rem' }}>Net Contractor Amount:</span>
                <strong style={{ color: '#16a34a', fontSize: '1rem' }}>₹49,00,000</strong>
              </div>
            </div>
          </div>

          {/* Contract Milestones Schedule */}
          <div style={{ padding: '1.5rem 0' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f2942', marginBottom: '1rem' }}>
              Contractual Deliverable Milestones & Payment Schedule
            </h3>

            <div className="table-responsive">
              <table className="gov-table">
                <thead>
                  <tr>
                    <th>Milestone</th>
                    <th>Deliverable Scope Description</th>
                    <th>Share %</th>
                    <th>Gross Amount</th>
                    <th>Target Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {DEMO_PROCUREMENT_CONTRACT.milestones.map((m) => (
                    <tr key={m.number}>
                      <td>
                        <span style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          backgroundColor: '#e8f1f8',
                          color: '#0f3d68',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '0.8rem'
                        }}>
                          {m.number}
                        </span>
                      </td>
                      <td>
                        <div style={{ fontWeight: 600, color: '#0f2942' }}>{m.name}</div>
                        {m.releaseReference && (
                          <div style={{ fontSize: '0.75rem', color: '#16a34a' }}>
                            Treasury Ref: {m.releaseReference}
                          </div>
                        )}
                      </td>
                      <td><strong>{m.sharePercentage}%</strong></td>
                      <td>
                        <strong style={{ color: '#0f2942' }}>
                          ₹{(m.amount).toLocaleString('en-IN')}
                        </strong>
                      </td>
                      <td style={{ fontSize: '0.85rem' }}>{m.dueDate}</td>
                      <td>
                        <span className={`badge ${
                          m.status === 'Payment Released' 
                            ? 'badge-released' 
                            : m.status === 'Pending Approval' 
                            ? 'badge-warning' 
                            : 'badge-neutral'
                        }`}>
                          {m.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Next Module Navigation */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1.75rem' }}>
              <button onClick={() => handleNav('monitoring')} className="btn btn-secondary">
                View Project Monitoring Desk
              </button>
              <button onClick={() => handleNav('payments')} className="btn btn-primary">
                Inspect Milestone Payment Ledger <ArrowRight size={16} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
