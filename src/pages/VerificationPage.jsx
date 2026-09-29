import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  ArrowRight, 
  FileText, 
  Building2, 
  Database, 
  Search, 
  Clock, 
  RefreshCw,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { DEMO_VERIFICATION_RECORDS } from '../data/mockData';

export default function VerificationPage({ setCurrentRoute }) {
  const [selectedRecordId, setSelectedRecordId] = useState('VERIF-2026-901');
  const [isVerifying, setIsVerifying] = useState(false);

  const selectedRecord = DEMO_VERIFICATION_RECORDS.find(r => r.id === selectedRecordId) || DEMO_VERIFICATION_RECORDS[0];

  const handleNav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const runRecheck = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
    }, 1200);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-pre">
            <ShieldCheck size={16} /> Integrity & Compliance Engine
          </div>
          <h1 className="page-header-title">Organisation Verification</h1>
          <p className="page-header-desc">
            Automated entity validation comparing submitted registration profiles with authoritative official registers (MCA, GSTIN, PAN, Physical Locational Registries) to assist authorised review.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ paddingBottom: '5rem' }}>
        
        {/* Responsible AI Disclaimer Banner */}
        <div className="notice-box" style={{ marginBottom: '2.5rem' }}>
          <ShieldCheck size={24} color="#1d70b8" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div className="notice-title">Administrative Verification Standard</div>
            <div className="notice-text">
              Automated checks identify inconsistencies and potential duplicate records. Final verification is subject to authoritative records and authorised review. This platform assists government verification officers and does not substitute statutory administrative authority.
            </div>
          </div>
        </div>

        {/* Verification Architecture Flow Visual */}
        <div className="card" style={{ marginBottom: '2.5rem', backgroundColor: '#f8fafc', padding: '1.75rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', textAlign: 'center' }}>
            Multi-Tier Verification Pipeline Architecture
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '0.85rem 1.25rem', textAlign: 'center', minWidth: '180px' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>INPUT</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f2942' }}>Submitted Information</div>
              <div style={{ fontSize: '0.75rem', color: '#475569' }}>CIN, PAN, GST, Address</div>
            </div>

            <div style={{ color: '#1d70b8', fontWeight: 700, fontSize: '1.25rem' }}>↓</div>

            <div style={{ backgroundColor: '#e8f1f8', border: '1.5px solid #1d70b8', borderRadius: '8px', padding: '0.85rem 1.25rem', textAlign: 'center', minWidth: '220px' }}>
              <div style={{ fontSize: '0.75rem', color: '#0f3d68', fontWeight: 700 }}>VERIFICATION ENGINE</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f3d68' }}>Cross-Match & Anomaly Check</div>
              <div style={{ fontSize: '0.75rem', color: '#1d70b8' }}>Duplicate & Consistency Audit</div>
            </div>

            <div style={{ color: '#1d70b8', fontWeight: 700, fontSize: '1.25rem' }}>↓</div>

            <div style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '0.85rem 1.25rem', textAlign: 'center', minWidth: '180px' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>BENCHMARK</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f2942' }}>Authoritative Records</div>
              <div style={{ fontSize: '0.75rem', color: '#475569' }}>MCA 21, GST Portal, DPIN</div>
            </div>

          </div>
        </div>

        {/* Entity Selector Tabs */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          {DEMO_VERIFICATION_RECORDS.map(rec => (
            <button
              key={rec.id}
              onClick={() => setSelectedRecordId(rec.id)}
              style={{
                backgroundColor: selectedRecordId === rec.id ? '#0f3d68' : '#ffffff',
                color: selectedRecordId === rec.id ? '#ffffff' : '#334155',
                border: '1px solid',
                borderColor: selectedRecordId === rec.id ? '#0f3d68' : '#cbd5e1',
                padding: '0.65rem 1.25rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: selectedRecordId === rec.id ? '0 2px 8px rgba(15, 61, 104, 0.2)' : 'none'
              }}
            >
              {rec.status === 'Verified' ? <CheckCircle2 size={16} color={selectedRecordId === rec.id ? '#86efac' : '#16a34a'} /> : <AlertTriangle size={16} color={selectedRecordId === rec.id ? '#fde047' : '#d97706'} />}
              <span>{rec.entityName}</span>
            </button>
          ))}
        </div>

        {/* Selected Record Detail Panel */}
        <div className="card" style={{ marginBottom: '2.5rem' }}>
          
          <div className="card-header" style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '1.25rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f2942' }}>
                  {selectedRecord.entityName}
                </h2>
                <span className={`badge ${selectedRecord.status === 'Verified' ? 'badge-verified' : 'badge-warning'}`}>
                  {selectedRecord.status}
                </span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                Record ID: <strong>{selectedRecord.id}</strong> | CIN/LLPIN: <strong>{selectedRecord.cinOrLlpin}</strong> | PAN: <strong>{selectedRecord.pan}</strong> | GSTIN: <strong>{selectedRecord.gstin}</strong>
              </div>
            </div>

            <button onClick={runRecheck} disabled={isVerifying} className="btn btn-sm btn-outline">
              <RefreshCw size={14} className={isVerifying ? 'animate-spin' : ''} /> {isVerifying ? 'Verifying...' : 'Re-run Comparison'}
            </button>
          </div>

          <div style={{ padding: '1rem 0' }}>
            <div style={{ fontSize: '0.875rem', color: '#475569', marginBottom: '1.5rem' }}>
              <strong>Submitted Physical Office Address: </strong> {selectedRecord.submittedAddress}
            </div>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f2942', marginBottom: '1rem' }}>
              Authoritative Cross-Match Verification Matrix
            </h3>

            {/* Checklist Table */}
            <div className="table-responsive">
              <table className="gov-table">
                <thead>
                  <tr>
                    <th>Verification Parameter</th>
                    <th>Automated Assessment</th>
                    <th>Authoritative Evidence Detail</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Organisation Name Match</strong></td>
                    <td>Ministry of Corporate Affairs Master Data check</td>
                    <td>{selectedRecord.checks.organisationNameMatch.detail}</td>
                    <td>
                      <span className="badge badge-verified">
                        <CheckCircle2 size={12} /> Verified
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td><strong>Registration Number Match</strong></td>
                    <td>ROC / Registrar of Companies active index</td>
                    <td>{selectedRecord.checks.registrationMatch.detail}</td>
                    <td>
                      <span className="badge badge-verified">
                        <CheckCircle2 size={12} /> Verified
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td><strong>Address Consistency</strong></td>
                    <td>ROC registered office vs GSTIN principal place</td>
                    <td>{selectedRecord.checks.addressMatch.detail}</td>
                    <td>
                      {selectedRecord.checks.addressMatch.status === 'Pass' ? (
                        <span className="badge badge-verified">
                          <CheckCircle2 size={12} /> Verified
                        </span>
                      ) : (
                        <span className="badge badge-warning">
                          <AlertTriangle size={12} /> Clarification Needed
                        </span>
                      )}
                    </td>
                  </tr>

                  <tr>
                    <td><strong>Document Consistency</strong></td>
                    <td>COI, PAN, GSTIN OCR validation & consistency</td>
                    <td>{selectedRecord.checks.documentConsistency.detail}</td>
                    <td>
                      <span className="badge badge-verified">
                        <CheckCircle2 size={12} /> Consistent
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td><strong>Duplicate Entity Check</strong></td>
                    <td>National PAN & mobile contact deduplication</td>
                    <td>{selectedRecord.checks.duplicateCheck.detail}</td>
                    <td>
                      {selectedRecord.checks.duplicateCheck.status === 'Pass' ? (
                        <span className="badge badge-verified">
                          <CheckCircle2 size={12} /> No Duplicates
                        </span>
                      ) : (
                        <span className="badge badge-warning">
                          <AlertTriangle size={12} /> Potential Conflict
                        </span>
                      )}
                    </td>
                  </tr>

                  <tr>
                    <td><strong>Representative Consistency</strong></td>
                    <td>DIN / DPIN & Board Resolution authentication</td>
                    <td>{selectedRecord.checks.representativeCheck.detail}</td>
                    <td>
                      <span className="badge badge-verified">
                        <CheckCircle2 size={12} /> Authenticated
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td><strong>Risk Anomaly Detection</strong></td>
                    <td>Statutory filing periodicity & adverse history</td>
                    <td>{selectedRecord.checks.anomalyDetection.detail}</td>
                    <td>
                      {selectedRecord.checks.anomalyDetection.status === 'Pass' ? (
                        <span className="badge badge-verified">
                          <CheckCircle2 size={12} /> Normal
                        </span>
                      ) : (
                        <span className="badge badge-warning">
                          <AlertTriangle size={12} /> Review Flag
                        </span>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Auditor Notes & Final Result */}
            <div style={{
              marginTop: '1.5rem',
              padding: '1.25rem',
              backgroundColor: selectedRecord.status === 'Verified' ? '#f0fdf4' : '#fffbeb',
              border: '1px solid',
              borderColor: selectedRecord.status === 'Verified' ? '#bbf7d0' : '#fef08a',
              borderRadius: '8px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: selectedRecord.status === 'Verified' ? '#166534' : '#92400e' }}>
                  Authorised Reviewer Conclusion:
                </span>
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                  Last Checked: {selectedRecord.lastUpdated}
                </span>
              </div>
              <p style={{ fontSize: '0.9rem', color: selectedRecord.status === 'Verified' ? '#14532d' : '#78350f', lineHeight: '1.5', margin: 0 }}>
                {selectedRecord.auditorNotes}
              </p>
            </div>

            {/* Next actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1.5rem' }}>
              {selectedRecord.status === 'Verified' ? (
                <button onClick={() => handleNav('opportunities')} className="btn btn-primary">
                  View Eligible Opportunities <ArrowRight size={16} />
                </button>
              ) : (
                <button onClick={() => handleNav('help')} className="btn btn-secondary">
                  Contact Verification Desk
                </button>
              )}
            </div>

          </div>

        </div>

        {/* Section 7: Verified Startup Eligibility Overview */}
        <div className="card">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f2942', marginBottom: '1rem' }}>
            Verified Startup Eligibility Framework
          </h3>
          <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '1.25rem' }}>
            Only successfully verified startups are permitted to submit pilot proposals for government opportunities. Eligibility is determined by checking the following parameters against opportunity requirements:
          </p>

          <div className="grid-3">
            <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontWeight: 700, color: '#0f2942', marginBottom: '0.25rem' }}>1. Legal Status</div>
              <div style={{ fontSize: '0.825rem', color: '#64748b' }}>Active ROC / MCA incorporation and clean statutory GST filings.</div>
            </div>

            <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontWeight: 700, color: '#0f2942', marginBottom: '0.25rem' }}>2. Mandatory Capabilities</div>
              <div style={{ fontSize: '0.825rem', color: '#64748b' }}>100% fulfillment of core required technologies specified by the department.</div>
            </div>

            <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontWeight: 700, color: '#0f2942', marginBottom: '0.25rem' }}>3. Quality & Security</div>
              <div style={{ fontSize: '0.825rem', color: '#64748b' }}>Applicable ISO 9001 and ISO 27001 data security compliance.</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
