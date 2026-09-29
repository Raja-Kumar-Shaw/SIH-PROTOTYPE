import React, { useState } from 'react';
import { 
  CreditCard, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  Building2, 
  ShieldCheck, 
  ArrowRight, 
  Sliders, 
  AlertCircle,
  FileCheck,
  TrendingUp,
  Download,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Info,
  FileText,
  RefreshCw,
  Receipt,
  Calendar,
  Layers,
  Scale
} from 'lucide-react';
import { DEMO_PROCUREMENT_CONTRACT } from '../data/mockData';

export default function PaymentsPage({ setCurrentRoute, currentUserRole }) {
  const [viewRole, setViewRole] = useState(currentUserRole === 'startup' ? 'startup' : 'government');
  const [activeTab, setActiveTab] = useState('milestone-schedule'); // 'milestone-schedule' | 'payment-delays' | 'escrow-chronology' | 'platform-fee'
  const [selectedMilestoneForModal, setSelectedMilestoneForModal] = useState(null);
  const [feeRate, setFeeRate] = useState(2.0); // 2.0% configurable proposed fee
  const [milestones, setMilestones] = useState(DEMO_PROCUREMENT_CONTRACT.milestones);
  const [actionNotice, setActionNotice] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const contractTotal = DEMO_PROCUREMENT_CONTRACT.contractValue; // ₹50,00,000
  const feeAmount = (contractTotal * (feeRate / 100));
  const netContractAmount = contractTotal - feeAmount;

  const releasedAmount = milestones
    .filter(m => m.status === 'Payment Released' || m.status === 'Payment Received')
    .reduce((sum, m) => sum + m.amount, 0);

  const pendingAmount = contractTotal - releasedAmount;
  const delayedMilestones = milestones.filter(m => m.delayDays > 0);

  const handleNav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleApproveMilestone = (milestoneNumber) => {
    setMilestones(prev => prev.map(m => {
      if (m.number === milestoneNumber) {
        return {
          ...m,
          status: 'Payment Released',
          releaseDate: new Date().toISOString().split('T')[0],
          releaseReference: `IFT/MH/WSSD/2026/0${Math.floor(1000 + Math.random() * 9000)}`,
          bankUtr: `RBIPUN20270228${Math.floor(100000 + Math.random() * 900000)}`,
          escrowStatus: 'Released from Escrow',
          delayDays: 0
        };
      }
      return m;
    }));
    setActionNotice(`Milestone ${milestoneNumber} payment sanctioned by Executive Engineer. Treasury advice & RBI RTGS token transmitted to SBI Escrow Desk.`);
    setTimeout(() => setActionNotice(''), 5000);
  };

  const handleRequestPayment = (milestoneNumber) => {
    setMilestones(prev => prev.map(m => {
      if (m.number === milestoneNumber) {
        return {
          ...m,
          status: 'Pending Approval',
          invoiceNumber: `INV/AQUA/2027/0${Math.floor(10 + Math.random() * 90)}`,
          invoiceDate: new Date().toISOString().split('T')[0]
        };
      }
      return m;
    }));
    setActionNotice(`Milestone ${milestoneNumber} invoice submitted along with physical Measurement Book reference. Sent to Superintending Engineer desk.`);
    setTimeout(() => setActionNotice(''), 5000);
  };

  const handleDelayAction = (actionType) => {
    if (actionType === 'fast-track') {
      setActionNotice('⚡ Priority Treasury Release Advice dispatched to Finance Department Mantralaya for accelerated 48-hour disbursement.');
    } else if (actionType === 'rectification') {
      setActionNotice('📋 Joint Calibration Rectification Certificate successfully uploaded & linked to Measurement Book entry MB/PUNE/WSSD/2027/Vol-V/P.14.');
    } else if (actionType === 'extension') {
      setActionNotice('⏱️ Formal 14-day administrative time extension granted under Clause 18.4. Liquidated damages (LD) waived.');
    } else if (actionType === 'escalate') {
      setActionNotice('⚖️ High-priority delay resolution memorandum submitted to Principal Secretary (Finance & Procurement).');
    }
    setTimeout(() => setActionNotice(''), 5000);
  };

  const filteredMilestones = milestones.filter(m => {
    if (statusFilter === 'all') return true;
    if (statusFilter === 'released') return m.status === 'Payment Released';
    if (statusFilter === 'pending') return m.status === 'Pending Approval';
    if (statusFilter === 'delayed') return m.delayDays > 0;
    return true;
  });

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-pre">
            <CreditCard size={16} /> Fiscal Settlement & Disbursement Engine
          </div>
          <h1 className="page-header-title">Milestone Payment Tracking</h1>
          <p className="page-header-desc">
            Complete milestone payment tracking, granular tax & statutory deductions, payment delay root-cause analysis, and tripartite escrow settlement for public procurement.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ paddingBottom: '5rem' }}>
        
        {/* View Switcher Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', backgroundColor: '#e2e8f0', padding: '0.35rem', borderRadius: '8px' }}>
            <button
              onClick={() => setViewRole('government')}
              style={{
                padding: '0.5rem 1.25rem',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                backgroundColor: viewRole === 'government' ? '#0f3d68' : 'transparent',
                color: viewRole === 'government' ? '#ffffff' : '#475569',
                transition: 'all 0.15s ease'
              }}
            >
              Government Department View
            </button>
            <button
              onClick={() => setViewRole('startup')}
              style={{
                padding: '0.5rem 1.25rem',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                backgroundColor: viewRole === 'startup' ? '#166534' : 'transparent',
                color: viewRole === 'startup' ? '#ffffff' : '#475569',
                transition: 'all 0.15s ease'
              }}
            >
              Startup / Contractor View
            </button>
            <button
              onClick={() => setViewRole('admin')}
              style={{
                padding: '0.5rem 1.25rem',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                backgroundColor: viewRole === 'admin' ? '#7c2d12' : 'transparent',
                color: viewRole === 'admin' ? '#ffffff' : '#475569',
                transition: 'all 0.15s ease'
              }}
            >
              Platform Economics
            </button>
          </div>

          <div style={{ fontSize: '0.85rem', color: '#475569', backgroundColor: '#f1f5f9', padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
            Contract: <strong style={{ color: '#0f2942' }}>{DEMO_PROCUREMENT_CONTRACT.contractId}</strong> ({DEMO_PROCUREMENT_CONTRACT.workOrderNumber})
          </div>
        </div>

        {/* Action / Notification Banner */}
        {actionNotice && (
          <div className="notice-box success" style={{ marginBottom: '1.5rem', animation: 'fadeIn 0.2s ease' }}>
            <CheckCircle2 size={22} color="#166534" style={{ flexShrink: 0 }} />
            <div className="notice-title" style={{ fontSize: '0.95rem' }}>{actionNotice}</div>
          </div>
        )}

        {/* Financial KPI Cards */}
        <div className="grid-4" style={{ marginBottom: '2rem' }}>
          
          <div className="card" style={{ borderLeft: '4px solid #0f3d68' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
              Total Sanctioned Value
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f2942', marginTop: '0.35rem' }}>
              ₹{contractTotal.toLocaleString('en-IN')}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>Gross Procurement Budget</div>
          </div>

          <div className="card" style={{ borderLeft: '4px solid #16a34a' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
              Disbursed to Date
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#16a34a', marginTop: '0.35rem' }}>
              ₹{releasedAmount.toLocaleString('en-IN')}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600, marginTop: '0.25rem' }}>
              {((releasedAmount / contractTotal) * 100).toFixed(0)}% (Milestones 1 & 2 Released)
            </div>
          </div>

          <div className="card" style={{ borderLeft: '4px solid #d97706' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
              Pending / In Verification
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#d97706', marginTop: '0.35rem' }}>
              ₹{pendingAmount.toLocaleString('en-IN')}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#d97706', fontWeight: 600, marginTop: '0.25rem' }}>
              Tranches 3 & 4 (₹15L + ₹10L)
            </div>
          </div>

          <div 
            className="card" 
            style={{ 
              borderLeft: '4px solid #dc2626', 
              backgroundColor: '#fff5f5', 
              cursor: 'pointer' 
            }}
            onClick={() => setActiveTab('payment-delays')}
            title="Click to view payment delay details and root-cause analysis"
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#b91c1c', textTransform: 'uppercase' }}>
                Payment Delay Status
              </span>
              <AlertTriangle size={16} color="#dc2626" />
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#dc2626', marginTop: '0.35rem' }}>
              +12 Days Delay
            </div>
            <div style={{ fontSize: '0.75rem', color: '#b91c1c', fontWeight: 700, marginTop: '0.25rem' }}>
              Tranche 3: Calibration Reconciliation ↗
            </div>
          </div>

        </div>

        {/* MSME Samadhaan & Statutory 45-Day Compliance Banner */}
        <div style={{
          backgroundColor: '#eff6ff',
          border: '1px solid #bfdbfe',
          borderRadius: '10px',
          padding: '1rem 1.5rem',
          marginBottom: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Scale size={24} color="#1d70b8" style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1e3a8a' }}>
                Statutory Prompt Payment Compliance (MSMED Act 2006, Section 15)
              </div>
              <div style={{ fontSize: '0.8rem', color: '#3b82f6', marginTop: '0.15rem' }}>
                Public procurement regulations mandate milestone invoice clearance within <strong>45 days</strong>. Current Milestone 3 Invoice Aging: <strong>Day 28 of 45</strong> (17 days remaining before statutory interest accrual).
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="badge badge-warning" style={{ fontWeight: 700 }}>
              Clock Active (Day 28/45)
            </span>
            <button 
              onClick={() => setActiveTab('payment-delays')}
              className="btn btn-sm btn-outline"
              style={{ fontSize: '0.78rem' }}
            >
              Track Delay Details
            </button>
          </div>
        </div>

        {/* Tab Navigation Menu */}
        <div style={{ 
          display: 'flex', 
          borderBottom: '2px solid #e2e8f0', 
          marginBottom: '2rem', 
          gap: '0.5rem',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => setActiveTab('milestone-schedule')}
            style={{
              padding: '0.85rem 1.5rem',
              border: 'none',
              background: 'none',
              fontWeight: 800,
              fontSize: '0.95rem',
              cursor: 'pointer',
              color: activeTab === 'milestone-schedule' ? '#0f3d68' : '#64748b',
              borderBottom: activeTab === 'milestone-schedule' ? '3px solid #0f3d68' : '3px solid transparent',
              marginBottom: '-2px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Receipt size={18} /> Milestone Payment Schedule & Invoices
          </button>

          <button
            onClick={() => setActiveTab('payment-delays')}
            style={{
              padding: '0.85rem 1.5rem',
              border: 'none',
              background: 'none',
              fontWeight: 800,
              fontSize: '0.95rem',
              cursor: 'pointer',
              color: activeTab === 'payment-delays' ? '#dc2626' : '#64748b',
              borderBottom: activeTab === 'payment-delays' ? '3px solid #dc2626' : '3px solid transparent',
              marginBottom: '-2px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <AlertTriangle size={18} color={activeTab === 'payment-delays' ? '#dc2626' : '#d97706'} /> 
            Payment Delays & Root Cause Analysis
            <span style={{ 
              backgroundColor: '#fee2e2', 
              color: '#dc2626', 
              fontSize: '0.75rem', 
              padding: '0.15rem 0.5rem', 
              borderRadius: '9999px',
              fontWeight: 800 
            }}>
              1 Delayed
            </span>
          </button>

          <button
            onClick={() => setActiveTab('escrow-chronology')}
            style={{
              padding: '0.85rem 1.5rem',
              border: 'none',
              background: 'none',
              fontWeight: 800,
              fontSize: '0.95rem',
              cursor: 'pointer',
              color: activeTab === 'escrow-chronology' ? '#0f3d68' : '#64748b',
              borderBottom: activeTab === 'escrow-chronology' ? '3px solid #0f3d68' : '3px solid transparent',
              marginBottom: '-2px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <ShieldCheck size={18} /> Escrow & Treasury Settlement Log
          </button>

          <button
            onClick={() => setActiveTab('platform-fee')}
            style={{
              padding: '0.85rem 1.5rem',
              border: 'none',
              background: 'none',
              fontWeight: 800,
              fontSize: '0.95rem',
              cursor: 'pointer',
              color: activeTab === 'platform-fee' ? '#0f3d68' : '#64748b',
              borderBottom: activeTab === 'platform-fee' ? '3px solid #0f3d68' : '3px solid transparent',
              marginBottom: '-2px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Sliders size={18} /> Platform Fee Economics
          </button>
        </div>

        {/* =========================================================================
            TAB 1: MILESTONE PAYMENT SCHEDULE & INVOICES
            ========================================================================= */}
        {activeTab === 'milestone-schedule' && (
          <div className="card">
            <div className="card-header" style={{ flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 className="card-title">
                  {viewRole === 'startup' ? 'Milestone Invoicing & Receivables Ledger' : 'Milestone Payment Sanction Schedule'}
                </h3>
                <p className="card-subtitle">
                  Detailed payment tranches with statutory deductions (TDS, GST, Cess, Retention) and bank UTR tokens.
                </p>
              </div>

              {/* Status Filter Pills */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setStatusFilter('all')}
                  className={`badge ${statusFilter === 'all' ? 'badge-primary' : 'badge-neutral'}`}
                  style={{ cursor: 'pointer', border: 'none', padding: '0.4rem 0.8rem' }}
                >
                  All ({milestones.length})
                </button>
                <button
                  onClick={() => setStatusFilter('released')}
                  className={`badge ${statusFilter === 'released' ? 'badge-verified' : 'badge-neutral'}`}
                  style={{ cursor: 'pointer', border: 'none', padding: '0.4rem 0.8rem' }}
                >
                  Released (2)
                </button>
                <button
                  onClick={() => setStatusFilter('pending')}
                  className={`badge ${statusFilter === 'pending' ? 'badge-warning' : 'badge-neutral'}`}
                  style={{ cursor: 'pointer', border: 'none', padding: '0.4rem 0.8rem' }}
                >
                  Pending Review (1)
                </button>
                <button
                  onClick={() => setStatusFilter('delayed')}
                  className={`badge ${statusFilter === 'delayed' ? 'badge-danger' : 'badge-neutral'}`}
                  style={{ cursor: 'pointer', border: 'none', padding: '0.4rem 0.8rem' }}
                >
                  Delayed (1)
                </button>
              </div>
            </div>

            <div className="table-responsive">
              <table className="gov-table">
                <thead>
                  <tr>
                    <th>Tranche</th>
                    <th>Deliverable Milestone</th>
                    <th>Share</th>
                    <th>Gross Sanction</th>
                    <th>Net Disbursable</th>
                    <th>Due Date</th>
                    <th>Payment Status</th>
                    <th>Delay Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMilestones.map((m) => (
                    <tr key={m.number} style={{ backgroundColor: m.delayDays > 0 ? '#fffbfb' : 'transparent' }}>
                      <td>
                        <span style={{
                          display: 'inline-block',
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          backgroundColor: m.delayDays > 0 ? '#fee2e2' : '#e8f1f8',
                          color: m.delayDays > 0 ? '#b91c1c' : '#0f3d68',
                          textAlign: 'center',
                          lineHeight: '28px',
                          fontWeight: 800,
                          fontSize: '0.85rem'
                        }}>
                          {m.number}
                        </span>
                      </td>
                      <td>
                        <div style={{ fontWeight: 700, color: '#0f2942', maxWidth: '300px' }}>
                          {m.name}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.2rem' }}>
                          Invoice: <strong>{m.invoiceNumber || 'Pending Submission'}</strong> | MB: {m.mbReference || 'N/A'}
                        </div>
                        {m.bankUtr && (
                          <div style={{ fontSize: '0.72rem', color: '#16a34a', fontWeight: 600 }}>
                            RBI UTR: {m.bankUtr}
                          </div>
                        )}
                      </td>
                      <td><strong>{m.sharePercentage}%</strong></td>
                      <td>
                        <strong style={{ color: '#0f2942', fontSize: '0.95rem' }}>
                          ₹{m.amount.toLocaleString('en-IN')}
                        </strong>
                      </td>
                      <td>
                        <span style={{ color: '#16a34a', fontWeight: 700 }}>
                          ₹{m.netDisbursed ? m.netDisbursed.toLocaleString('en-IN') : '₹13,72,881'}
                        </span>
                        <div style={{ fontSize: '0.7rem', color: '#64748b' }}>after 8.5% statutory cuts</div>
                      </td>
                      <td style={{ fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
                        <div>{m.dueDate}</div>
                        {m.completionDate && (
                          <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Done: {m.completionDate}</div>
                        )}
                      </td>
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
                      <td>
                        {m.delayDays > 0 ? (
                          <span className="badge badge-danger" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                            <AlertTriangle size={12} /> +{m.delayDays}d Delayed
                          </span>
                        ) : m.releaseDate ? (
                          <span className="badge badge-verified">
                            On Schedule
                          </span>
                        ) : (
                          <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Upcoming</span>
                        )}
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '0.4rem', flexDirection: 'column' }}>
                          <button
                            onClick={() => setSelectedMilestoneForModal(m)}
                            className="btn btn-sm btn-outline"
                            style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', whiteSpace: 'nowrap' }}
                          >
                            <FileText size={12} /> View Breakdown
                          </button>

                          {viewRole === 'government' ? (
                            m.status === 'Pending Approval' && (
                              <button
                                onClick={() => handleApproveMilestone(m.number)}
                                className="btn btn-sm btn-success"
                                style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', whiteSpace: 'nowrap' }}
                              >
                                Approve Release
                              </button>
                            )
                          ) : (
                            m.status === 'Payment Due' && (
                              <button
                                onClick={() => handleRequestPayment(m.number)}
                                className="btn btn-sm btn-primary"
                                style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', whiteSpace: 'nowrap' }}
                              >
                                Request Release
                              </button>
                            )
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                Disbursement Routing: Central Treasury Direct Debit via RBI RTGS e-Kuber Protocol (State Bank of India Institutional Branch)
              </div>
              <button onClick={() => window.print()} className="btn btn-outline" style={{ fontSize: '0.85rem' }}>
                <Download size={14} /> Download Settlement Statement
              </button>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 2: PAYMENT DELAYS & ROOT CAUSE ANALYSIS
            ========================================================================= */}
        {activeTab === 'payment-delays' && (
          <div>
            {/* Primary Delay Callout Banner */}
            <div className="card" style={{ border: '2px solid #ef4444', backgroundColor: '#fef2f2', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: '#fee2e2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#dc2626',
                    flexShrink: 0
                  }}>
                    <AlertTriangle size={28} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span className="badge badge-danger">Active Payment Delay</span>
                      <span style={{ fontSize: '0.8rem', color: '#991b1b', fontWeight: 600 }}>Milestone 3 (Tranche 3)</span>
                    </div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#991b1b', marginTop: '0.35rem' }}>
                      SCADA Interoperability Integration & Central Command Dashboard (₹15,00,000)
                    </h3>
                    <div style={{ fontSize: '0.85rem', color: '#7f1d1d', marginTop: '0.2rem' }}>
                      Scheduled Release Due Date: <strong>28 Feb 2027</strong> | Current Delay: <strong style={{ color: '#dc2626' }}>+12 Days</strong>
                    </div>
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #fecaca',
                  borderRadius: '10px',
                  padding: '0.75rem 1.25rem',
                  textAlign: 'right'
                }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#991b1b', textTransform: 'uppercase' }}>
                    MSME Aging Status
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#b91c1c' }}>
                    Day 28 / 45
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#7f1d1d' }}>17 days before statutory notice</div>
                </div>
              </div>

              {/* Detailed Root Cause & Departmental Details */}
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #fecaca',
                borderRadius: '8px',
                padding: '1.25rem',
                marginTop: '1.5rem'
              }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f2942', marginBottom: '0.75rem' }}>
                  Root Cause Analysis & Departmental Ownership:
                </h4>
                
                <div className="grid-2" style={{ gap: '1.5rem', fontSize: '0.875rem' }}>
                  <div>
                    <div style={{ fontWeight: 700, color: '#475569', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                      Primary Delay Root Cause:
                    </div>
                    <p style={{ color: '#1e293b', marginTop: '0.25rem', lineHeight: '1.5' }}>
                      <strong>Telemetry Sensor Calibration Variance:</strong> Field measurement variance detected between Pune Municipal testing team and vendor benchmark readings during joint testing on Feb 18. Technical calibration reconciliation meeting was held on Feb 24.
                    </p>
                  </div>

                  <div>
                    <div style={{ fontWeight: 700, color: '#475569', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                      Responsible Evaluation Desk:
                    </div>
                    <p style={{ color: '#1e293b', marginTop: '0.25rem', lineHeight: '1.5' }}>
                      <strong>Superintending Engineer (Quality Assurance & Evaluation Cell)</strong>, Pune Water Works. Desk Officer: <em>Shri S. R. Patil, Executive Engineer</em>.
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #f1f5f9', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.825rem' }}>
                  <div>
                    <strong style={{ color: '#0f2942' }}>Liquidated Damages (LD) Status: </strong>
                    <span style={{ color: '#16a34a', fontWeight: 600 }}>Clause 18.4 Grace Period Active — Zero penalty levied (waived for calibration reconciliation)</span>
                  </div>
                  <div>
                    <strong style={{ color: '#0f2942' }}>Escrow Status: </strong>
                    <span style={{ color: '#1d70b8', fontWeight: 600 }}>₹15,00,000 locked in SBI Treasury Sub-Account</span>
                  </div>
                </div>
              </div>

              {/* Delay Remediation Action Buttons */}
              <div style={{ marginTop: '1.5rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#991b1b', marginBottom: '0.75rem' }}>
                  Executive Actions for Immediate Delay Resolution:
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => handleDelayAction('fast-track')}
                    className="btn btn-sm btn-primary"
                    style={{ fontSize: '0.825rem' }}
                  >
                    ⚡ Fast-Track Treasury Release Advice
                  </button>
                  <button
                    onClick={() => handleDelayAction('rectification')}
                    className="btn btn-sm btn-outline"
                    style={{ fontSize: '0.825rem', backgroundColor: '#ffffff' }}
                  >
                    📋 Submit Calibration Rectification Evidence
                  </button>
                  <button
                    onClick={() => handleDelayAction('extension')}
                    className="btn btn-sm btn-outline"
                    style={{ fontSize: '0.825rem', backgroundColor: '#ffffff' }}
                  >
                    ⏱️ Request 14-Day Formal Time Extension
                  </button>
                  <button
                    onClick={() => handleDelayAction('escalate')}
                    className="btn btn-sm btn-danger"
                    style={{ fontSize: '0.825rem' }}
                  >
                    ⚖️ Escalate to Principal Secretary (Finance)
                  </button>
                </div>
              </div>
            </div>

            {/* Delay Chronology & Historical Performance Comparison */}
            <div className="card">
              <div className="card-header">
                <div>
                  <h3 className="card-title">Procurement Tranche Schedule vs Actual Release Comparison</h3>
                  <p className="card-subtitle">
                    Tracking timeline compliance across all 4 procurement milestone tranches.
                  </p>
                </div>
              </div>

              <div className="table-responsive">
                <table className="gov-table">
                  <thead>
                    <tr>
                      <th>Tranche</th>
                      <th>Deliverable Milestone</th>
                      <th>Scheduled Due Date</th>
                      <th>Actual Release / Verification</th>
                      <th>Variance</th>
                      <th>Delay Status</th>
                      <th>Statutory Action Taken</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>1</strong></td>
                      <td>Baseline Network Survey & Sensor Deployment</td>
                      <td>2026-08-30</td>
                      <td>2026-08-22</td>
                      <td><span style={{ color: '#16a34a', fontWeight: 700 }}>-8 Days</span></td>
                      <td><span className="badge badge-verified">Ahead of Schedule</span></td>
                      <td>Full disbursement credited via RBI UTR RBIPUN202608249018442</td>
                    </tr>
                    <tr>
                      <td><strong>2</strong></td>
                      <td>Full City DMA Deployment (1,500 Sensors)</td>
                      <td>2026-11-30</td>
                      <td>2026-11-20</td>
                      <td><span style={{ color: '#16a34a', fontWeight: 700 }}>-10 Days</span></td>
                      <td><span className="badge badge-verified">Ahead of Schedule</span></td>
                      <td>Disbursement credited via RBI UTR RBIPUN202611221088421</td>
                    </tr>
                    <tr style={{ backgroundColor: '#fef2f2' }}>
                      <td><strong style={{ color: '#dc2626' }}>3</strong></td>
                      <td>SCADA Integration & Central Command</td>
                      <td>2027-02-28</td>
                      <td>2027-02-18 (Submitted)</td>
                      <td><span style={{ color: '#dc2626', fontWeight: 800 }}>+12 Days</span></td>
                      <td><span className="badge badge-danger">Audit Underway</span></td>
                      <td>Joint physical calibration conducted Feb 24; LD waived under Cl. 18.4</td>
                    </tr>
                    <tr>
                      <td><strong>4</strong></td>
                      <td>Final Acceptance & 6-Month Knowledge Transfer</td>
                      <td>2027-06-14</td>
                      <td>Pending Work</td>
                      <td><span style={{ color: '#64748b' }}>0 Days</span></td>
                      <td><span className="badge badge-neutral">Scheduled</span></td>
                      <td>Contingent on Milestone 3 command dashboard sign-off</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 3: ESCROW & TREASURY DISBURSAL AUDIT CHRONOLOGY
            ========================================================================= */}
        {activeTab === 'escrow-chronology' && (
          <div className="card">
            <div className="card-header">
              <div>
                <h3 className="card-title">Tripartite Escrow & Treasury Settlement Chronology</h3>
                <p className="card-subtitle">
                  Cryptographically verified audit trail of fund reservation, measurement validation, and treasury release.
                </p>
              </div>
              <span className="badge badge-verified">SBI Escrow Protected</span>
            </div>

            <div style={{ position: 'relative', paddingLeft: '2rem', marginTop: '1.5rem' }}>
              <div style={{
                position: 'absolute',
                left: '0.75rem',
                top: '0.5rem',
                bottom: '0.5rem',
                width: '3px',
                backgroundColor: '#cbd5e1'
              }}></div>

              {/* Event 1 */}
              <div style={{ position: 'relative', marginBottom: '2rem' }}>
                <div style={{
                  position: 'absolute',
                  left: '-2rem',
                  top: '0.15rem',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: '#16a34a',
                  border: '3px solid #ffffff',
                  boxShadow: '0 0 0 2px #16a34a'
                }}></div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b' }}>2026-11-22 14:10 IST</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0f2942', marginTop: '0.15rem' }}>
                  Milestone 2 Treasury Advice Settled & RTGS Released (₹15,00,000)
                </div>
                <div style={{ fontSize: '0.85rem', color: '#475569', marginTop: '0.25rem' }}>
                  Finance Department passed token <strong>PFMS/MH/2026/9110482</strong>. Gross: ₹15,00,000 | Net Disbursed: ₹13,72,881 after TDS, Cess and 5% security retention. RBI UTR: <strong>RBIPUN202611221088421</strong>.
                </div>
              </div>

              {/* Event 2 */}
              <div style={{ position: 'relative', marginBottom: '2rem' }}>
                <div style={{
                  position: 'absolute',
                  left: '-2rem',
                  top: '0.15rem',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: '#16a34a',
                  border: '3px solid #ffffff',
                  boxShadow: '0 0 0 2px #16a34a'
                }}></div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b' }}>2026-08-24 11:45 IST</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0f2942', marginTop: '0.15rem' }}>
                  Milestone 1 Payment Released (₹10,00,000)
                </div>
                <div style={{ fontSize: '0.85rem', color: '#475569', marginTop: '0.25rem' }}>
                  Initial deployment sign-off verified in Measurement Book MB/PUNE/WSSD/2026/Vol-IV/P.45. Net Disbursed: ₹9,15,254. RBI UTR: <strong>RBIPUN202608249018442</strong>.
                </div>
              </div>

              {/* Event 3 */}
              <div style={{ position: 'relative', marginBottom: '2rem' }}>
                <div style={{
                  position: 'absolute',
                  left: '-2rem',
                  top: '0.15rem',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: '#d97706',
                  border: '3px solid #ffffff',
                  boxShadow: '0 0 0 2px #d97706'
                }}></div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b' }}>2027-02-18 10:20 IST</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0f2942', marginTop: '0.15rem' }}>
                  Milestone 3 Invoice Submitted by AquaTech Solutions (₹15,00,000)
                </div>
                <div style={{ fontSize: '0.85rem', color: '#475569', marginTop: '0.25rem' }}>
                  Invoice INV/AQUA/2027/012 logged with Pune Municipal Corporation. Funds of ₹15,00,000 locked in SBI Treasury Escrow sub-account pending physical calibration report.
                </div>
              </div>

              {/* Event 4 */}
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: '-2rem',
                  top: '0.15rem',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: '#dc2626',
                  border: '3px solid #ffffff',
                  boxShadow: '0 0 0 2px #dc2626'
                }}></div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#dc2626' }}>2027-02-24 16:30 IST (Recent)</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#991b1b', marginTop: '0.15rem' }}>
                  Joint Calibration Discrepancy Reconciliation Session Convened
                </div>
                <div style={{ fontSize: '0.85rem', color: '#475569', marginTop: '0.25rem' }}>
                  Superintending Engineer and vendor technical leads completed site inspection. Liquidated damages held in abeyance under Clause 18.4 pending final sign-off.
                </div>
              </div>

            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 4: PLATFORM FEE ECONOMICS
            ========================================================================= */}
        {activeTab === 'platform-fee' && (
          <div className="card" style={{ backgroundColor: '#f8fafc', borderLeft: '6px solid #1d70b8' }}>
            <div className="card-header" style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
              <div>
                <span className="badge badge-info" style={{ marginBottom: '0.25rem' }}>
                  Section 19: Operational Economics
                </span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f2942' }}>
                  Proposed Platform Service Fee Structure
                </h3>
              </div>

              {viewRole === 'admin' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#7c2d12' }}>Admin Rate Slider:</span>
                  <input
                    type="range"
                    min="0.5"
                    max="5.0"
                    step="0.1"
                    value={feeRate}
                    onChange={(e) => setFeeRate(parseFloat(e.target.value))}
                    style={{ cursor: 'pointer' }}
                  />
                  <span style={{ fontWeight: 800, color: '#0f2942', minWidth: '45px' }}>{feeRate.toFixed(1)}%</span>
                </div>
              )}
            </div>

            {/* Three Separate Displays */}
            <div className="grid-3" style={{ margin: '1.5rem 0', gap: '1.5rem' }}>
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '1.25rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>
                  Contract Value
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f2942', marginTop: '0.25rem' }}>
                  ₹{contractTotal.toLocaleString('en-IN')}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Gross procurement sanction</div>
              </div>

              <div style={{ backgroundColor: '#ffffff', border: '1.5px solid #cbd5e1', borderRadius: '8px', padding: '1.25rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f3d68', textTransform: 'uppercase' }}>
                  Proposed Platform Service Fee ({feeRate.toFixed(1)}%)
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1d70b8', marginTop: '0.25rem' }}>
                  ₹{feeAmount.toLocaleString('en-IN')}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Platform digital infrastructure maintenance</div>
              </div>

              <div style={{ backgroundColor: '#ffffff', border: '1.5px solid #86efac', borderRadius: '8px', padding: '1.25rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#166534', textTransform: 'uppercase' }}>
                  Net Contract Amount
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#16a34a', marginTop: '0.25rem' }}>
                  ₹{netContractAmount.toLocaleString('en-IN')}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600 }}>Disbursable to contractor</div>
              </div>
            </div>

            {/* Mandatory Institutional Disclaimers */}
            <div style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '6px',
              padding: '1rem',
              fontSize: '0.825rem',
              color: '#475569',
              lineHeight: '1.6'
            }}>
              <strong style={{ color: '#0f2942' }}>Institutional Compliance Notice: </strong>
              The platform fee is a <em>Proposed Platform Service Fee</em> and is <em>not presented as a statutory government deduction</em>. It is strictly subject to applicable procurement rules, contract terms, and required administrative approvals from the competent financial authority.
            </div>
          </div>
        )}

        {/* =========================================================================
            DETAILED PAYMENT BREAKDOWN MODAL / DIALOG
            ========================================================================= */}
        {selectedMilestoneForModal && (
          <div style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1.5rem',
            backdropFilter: 'blur(3px)'
          }}>
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              border: '1px solid #e2e8f0'
            }}>
              {/* Modal Header */}
              <div style={{
                padding: '1.5rem',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#f8fafc'
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1d70b8', textTransform: 'uppercase' }}>
                    Government Procurement Payment Voucher
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f2942', marginTop: '0.2rem' }}>
                    Milestone {selectedMilestoneForModal.number} Payment Breakdown
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedMilestoneForModal(null)}
                  style={{
                    border: 'none',
                    background: '#e2e8f0',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    fontWeight: 800,
                    color: '#475569'
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Modal Body */}
              <div style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Deliverable Description:</div>
                  <div style={{ fontWeight: 700, color: '#0f2942', fontSize: '1rem', marginTop: '0.2rem' }}>
                    {selectedMilestoneForModal.name}
                  </div>
                </div>

                {/* Tax & Deduction Schedule */}
                <div style={{ backgroundColor: '#f8fafc', borderRadius: '10px', padding: '1.25rem', border: '1px solid #e2e8f0', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0f2942', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                    Statutory Tax & Deduction Schedule:
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px solid #e2e8f0', fontSize: '0.9rem' }}>
                    <span style={{ color: '#475569' }}>Gross Sanctioned Milestone Amount:</span>
                    <strong style={{ color: '#0f2942' }}>₹{selectedMilestoneForModal.amount.toLocaleString('en-IN')}</strong>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px solid #e2e8f0', fontSize: '0.85rem' }}>
                    <span style={{ color: '#64748b' }}>Base Service Component (Excl. GST):</span>
                    <span>₹{(selectedMilestoneForModal.baseAmount || Math.round(selectedMilestoneForModal.amount / 1.18)).toLocaleString('en-IN')}</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px solid #e2e8f0', fontSize: '0.85rem' }}>
                    <span style={{ color: '#64748b' }}>GST @ 18% (CGST 9% + SGST 9%):</span>
                    <span>₹{(selectedMilestoneForModal.gstAmount || Math.round(selectedMilestoneForModal.amount - selectedMilestoneForModal.amount / 1.18)).toLocaleString('en-IN')}</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px solid #e2e8f0', fontSize: '0.85rem', color: '#b91c1c' }}>
                    <span>Less: Income Tax TDS under Sec 194C (2%):</span>
                    <span>-₹{(selectedMilestoneForModal.deductions?.tdsIt || 25424).toLocaleString('en-IN')}</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px solid #e2e8f0', fontSize: '0.85rem', color: '#b91c1c' }}>
                    <span>Less: GST TDS under Sec 51 (2%):</span>
                    <span>-₹{(selectedMilestoneForModal.deductions?.tdsGst || 25424).toLocaleString('en-IN')}</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px solid #e2e8f0', fontSize: '0.85rem', color: '#b91c1c' }}>
                    <span>Less: Labor Welfare Cess (1%):</span>
                    <span>-₹{(selectedMilestoneForModal.deductions?.laborCess || 12712).toLocaleString('en-IN')}</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px solid #e2e8f0', fontSize: '0.85rem', color: '#b91c1c' }}>
                    <span>Less: Performance Security Retention (5%):</span>
                    <span>-₹{(selectedMilestoneForModal.deductions?.securityRetention || 63559).toLocaleString('en-IN')}</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0 0.25rem 0', fontSize: '1.1rem', fontWeight: 800 }}>
                    <span style={{ color: '#166534' }}>Net Disbursable Amount:</span>
                    <span style={{ color: '#166534' }}>₹{(selectedMilestoneForModal.netDisbursed || 1372881).toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Audit & Reference Registry */}
                <div className="grid-2" style={{ gap: '1rem', fontSize: '0.825rem' }}>
                  <div>
                    <span style={{ color: '#64748b' }}>Invoice Number:</span>
                    <div style={{ fontWeight: 700, color: '#0f2942' }}>{selectedMilestoneForModal.invoiceNumber || 'Pending'}</div>
                  </div>
                  <div>
                    <span style={{ color: '#64748b' }}>Measurement Book (MB) Entry:</span>
                    <div style={{ fontWeight: 700, color: '#0f2942' }}>{selectedMilestoneForModal.mbReference || 'Not Recorded'}</div>
                  </div>
                  <div>
                    <span style={{ color: '#64748b' }}>PFMS Treasury Token:</span>
                    <div style={{ fontWeight: 700, color: '#0f2942' }}>{selectedMilestoneForModal.pfmsToken || 'Awaiting Issuance'}</div>
                  </div>
                  <div>
                    <span style={{ color: '#64748b' }}>RBI UTR Number:</span>
                    <div style={{ fontWeight: 700, color: '#16a34a' }}>{selectedMilestoneForModal.bankUtr || 'Pending Settlement'}</div>
                  </div>
                </div>

                {/* Delay & Grace Status */}
                {selectedMilestoneForModal.delayDays > 0 && (
                  <div style={{ marginTop: '1.25rem', backgroundColor: '#fff5f5', border: '1px solid #fecaca', borderRadius: '8px', padding: '0.85rem', fontSize: '0.825rem' }}>
                    <div style={{ fontWeight: 700, color: '#b91c1c' }}>
                      ⚠️ Active Delay: +{selectedMilestoneForModal.delayDays} Days
                    </div>
                    <div style={{ color: '#7f1d1d', marginTop: '0.2rem' }}>
                      {selectedMilestoneForModal.delayReason}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600, marginTop: '0.35rem' }}>
                      {selectedMilestoneForModal.ldStatus}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div style={{
                padding: '1.25rem 1.5rem',
                borderTop: '1px solid #e2e8f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#f8fafc'
              }}>
                <button 
                  onClick={() => setSelectedMilestoneForModal(null)}
                  className="btn btn-sm btn-outline"
                >
                  Close Window
                </button>
                <button 
                  onClick={() => {
                    window.print();
                    setSelectedMilestoneForModal(null);
                  }}
                  className="btn btn-sm btn-primary"
                >
                  <Download size={14} /> Print Formal Voucher
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
