import React, { useState } from 'react';
import { 
  TrendingUp, 
  AlertTriangle, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  ShieldCheck, 
  UserCheck, 
  Calendar, 
  FileText,
  HelpCircle,
  Bell
} from 'lucide-react';
import { DEMO_PROJECT_MONITORING } from '../data/mockData';

export default function MonitoringPage({ setCurrentRoute }) {
  const [monitoringState, setMonitoringState] = useState(DEMO_PROJECT_MONITORING);
  const [escalationActionSent, setEscalationActionSent] = useState(false);

  const handleNav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const delayStages = [
    { key: "Reminder", label: "Reminder", desc: "Deadline approaching within 14 days" },
    { key: "Overdue", label: "Overdue", desc: "Milestone completion date passed" },
    { key: "Review Required", label: "Review Required", desc: "7+ days delay with active discrepancy" },
    { key: "Escalated for Review", label: "Escalated for Review", desc: "Formal Joint Review with Department Authority" },
  ];

  const handleScheduleReview = () => {
    setEscalationActionSent(true);
    setTimeout(() => setEscalationActionSent(false), 3500);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-pre">
            <TrendingUp size={16} /> Operational Delivery Governance
          </div>
          <h1 className="page-header-title">Project Monitoring & Delay Review</h1>
          <p className="page-header-desc">
            Continuous progress tracking against planned deliverables, automated variance alerts, and multi-tier constructive review paths to prevent implementation stalling.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ paddingBottom: '5rem' }}>
        
        {/* Core Administrative Principle Notice */}
        <div className="notice-box warning" style={{ marginBottom: '2.5rem' }}>
          <AlertTriangle size={24} color="#d97706" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div className="notice-title">Constructive Governance Principle</div>
            <div className="notice-text">
              The platform does not automatically penalise or blacklist innovative enterprises upon experiencing operational friction. Instead, structured escalation paths trigger proactive dialogue between the startup technical lead, the government project officer, and the department authority to resolve site hurdles constructively.
            </div>
          </div>
        </div>

        {/* Live Project Overview Status Card */}
        <div className="card" style={{ marginBottom: '2.5rem' }}>
          <div className="card-header" style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '1.25rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                <span className="badge badge-warning">
                  Status: {monitoringState.status}
                </span>
                <span className="badge badge-neutral">Delay: {monitoringState.delayDays} Days</span>
              </div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f2942' }}>
                {monitoringState.projectName}
              </h2>
              <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                Contract Ref: <strong>{monitoringState.contractId}</strong> | Department: <strong>{monitoringState.department}</strong> | Contractor: <strong>{monitoringState.contractor}</strong>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Budget Utilisation</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f2942' }}>
                ₹{(monitoringState.budgetUsed).toLocaleString('en-IN')} / ₹{(monitoringState.totalBudget).toLocaleString('en-IN')}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>50% Disbursed against Milestones 1 & 2</div>
            </div>
          </div>

          {/* Planned vs Actual Progress Bars */}
          <div style={{ padding: '1.75rem 0', borderBottom: '1px solid #e2e8f0' }}>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.875rem' }}>
                <span style={{ fontWeight: 600, color: '#0f2942' }}>Expected (Planned) Progress</span>
                <span style={{ fontWeight: 700, color: '#1d70b8' }}>{monitoringState.plannedProgressPercentage}%</span>
              </div>
              <div style={{ width: '100%', height: '12px', backgroundColor: '#e2e8f0', borderRadius: '9999px', overflow: 'hidden' }}>
                <div style={{ width: `${monitoringState.plannedProgressPercentage}%`, height: '100%', backgroundColor: '#1d70b8' }}></div>
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.875rem' }}>
                <span style={{ fontWeight: 600, color: '#0f2942' }}>Actual Verified Progress</span>
                <span style={{ fontWeight: 700, color: '#d97706' }}>{monitoringState.actualProgressPercentage}% (Variance: {monitoringState.variancePercentage}%)</span>
              </div>
              <div style={{ width: '100%', height: '12px', backgroundColor: '#e2e8f0', borderRadius: '9999px', overflow: 'hidden' }}>
                <div style={{ width: `${monitoringState.actualProgressPercentage}%`, height: '100%', backgroundColor: '#d97706' }}></div>
              </div>
            </div>

            <div style={{ fontSize: '0.825rem', color: '#64748b', display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
              <span>Target Milestone 3 Due: <strong>{monitoringState.deadline}</strong></span>
              <span>Site Physical Sensors Deployed: <strong>1,500 units</strong></span>
              <span>Pending Item: <strong>SCADA Central Server Firewall Port Clearance</strong></span>
            </div>

          </div>

          {/* Section 17: Automatic Delay Detection Stages */}
          <div style={{ padding: '1.75rem 0', borderBottom: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f2942', marginBottom: '1.25rem' }}>
              Automated Delay Detection & Escalation Hierarchy
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {delayStages.map((stg, i) => {
                const isActive = stg.key === monitoringState.delayStage;
                return (
                  <div key={stg.key} style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    backgroundColor: isActive ? '#fffbeb' : '#f8fafc',
                    border: '1.5px solid',
                    borderColor: isActive ? '#f59e0b' : '#e2e8f0',
                    textAlign: 'center'
                  }}>
                    <span style={{
                      display: 'inline-block',
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? '#d97706' : '#cbd5e1',
                      color: '#ffffff',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      lineHeight: '22px',
                      marginBottom: '0.35rem'
                    }}>
                      {i + 1}
                    </span>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: isActive ? '#92400e' : '#334155' }}>
                      {stg.label}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>
                      {stg.desc}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* The 3-Tier Escalation Path */}
            <div style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #cbd5e1',
              borderRadius: '8px',
              padding: '1.25rem'
            }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f2942', marginBottom: '0.75rem' }}>
                Three-Tier Stakeholder Review Path:
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {monitoringState.escalationHierarchy.map((tier) => (
                  <div key={tier.level} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    backgroundColor: '#ffffff',
                    borderRadius: '6px',
                    border: '1px solid #e2e8f0',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        backgroundColor: '#e8f1f8',
                        color: '#0f3d68',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '0.75rem'
                      }}>
                        L{tier.level}
                      </span>
                      <div>
                        <div style={{ fontWeight: 700, color: '#0f2942', fontSize: '0.9rem' }}>{tier.role}</div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{tier.name}</div>
                      </div>
                    </div>

                    <span className="badge badge-warning">
                      {tier.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Action Items & Remediation Controls */}
          <div style={{ padding: '1.5rem 0' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f2942', marginBottom: '1rem' }}>
              Active Site Coordination Action Items
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {monitoringState.actionItems.map((act) => (
                <div key={act.id} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '6px',
                  border: '1px solid #e2e8f0'
                }}>
                  <span style={{ fontSize: '0.875rem', color: '#0f2942' }}>{act.task}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Owner: <strong>{act.owner}</strong></span>
                    <span className="badge badge-warning">{act.status}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                Next scheduled tripartite coordination review: <strong>Tomorrow, 11:00 AM IST</strong>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button onClick={handleScheduleReview} className="btn btn-secondary">
                  <Bell size={14} /> {escalationActionSent ? 'Notification Dispatched!' : 'Send Coordination Notice'}
                </button>
                <button onClick={() => handleNav('payments')} className="btn btn-primary">
                  Review Milestone Payments <ArrowRight size={16} />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
