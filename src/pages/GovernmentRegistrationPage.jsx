import React, { useState } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  FileText, 
  Upload, 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle,
  HelpCircle,
  Clock
} from 'lucide-react';
import { MAHARASHTRA_DEPARTMENTS } from '../data/mockData';

export default function GovernmentRegistrationPage({ setCurrentRoute }) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentVerificationStage, setCurrentVerificationStage] = useState('Submitted');

  // Form State
  const [formData, setFormData] = useState({
    deptName: 'Water Supply and Sanitation Department',
    orgType: 'State Government Department',
    state: 'Maharashtra',
    district: 'Mumbai',
    officeAddress: '5th Floor, Main Building, Mantralaya, Mumbai 400032',
    officialWebsite: 'https://water.maharashtra.gov.in',
    officialEmail: 'sec.wssd@maharashtra.gov.in',
    orgId: 'MH-WSSD-MUM-01',
    repName: 'Shri Sanjay R. Patil',
    repDesignation: 'Executive Engineer (Water Works & Technology)',
    repEmail: 'sanjay.patil@gov.in',
    repPhone: '+91 98220 12345',
    repAuthInfo: 'Authorised via Administrative Order WSSD/2026/TECH-09',
    orgDoc: 'Department_Charter_Notification.pdf',
    authDoc: 'Government_Officer_Authorisation_Letter.pdf',
    supportDoc: 'Competent_Authority_Approval.pdf'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate progression through verification pipeline
    setTimeout(() => setCurrentVerificationStage('Information Check'), 1500);
    setTimeout(() => setCurrentVerificationStage('Document Check'), 3000);
    setTimeout(() => setCurrentVerificationStage('Database Match'), 4500);
    setTimeout(() => setCurrentVerificationStage('Authorised Review'), 6000);
    setTimeout(() => setCurrentVerificationStage('Verified'), 8000);
  };

  const verificationStages = [
    { key: 'Submitted', label: 'Submitted', desc: 'Application received in secure queue' },
    { key: 'Information Check', label: 'Information Check', desc: 'Official domain & officer email validated' },
    { key: 'Document Check', label: 'Document Check', desc: 'Authorisation letters authenticated' },
    { key: 'Database Match', label: 'Database Match', desc: 'Cross-checked with state HRMS directory' },
    { key: 'Authorised Review', label: 'Authorised Review', desc: 'Reviewed by State Procurement Auditor' },
    { key: 'Verified', label: 'Verified', desc: 'Authorised to publish innovation challenges' },
  ];

  const getStageIndex = (stageKey) => {
    return verificationStages.findIndex(s => s.key === stageKey);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-pre">
            <Building2 size={16} /> Public Sector Enrolment
          </div>
          <h1 className="page-header-title">Government Organisation Registration</h1>
          <p className="page-header-desc">
            Enrol your state department, municipal corporation, or public agency to publish innovation requirements, evaluate eligible startups, and manage pilot contracts.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ paddingBottom: '5rem', maxWidth: '960px' }}>
        
        {/* Verification Pipeline Display */}
        <div className="card" style={{ marginBottom: '2.5rem', backgroundColor: '#f8fafc' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <span className="badge badge-info" style={{ marginBottom: '0.25rem' }}>Verification Pipeline</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f2942' }}>
                Department Vetting & Onboarding Status
              </h3>
            </div>
            {isSubmitted && (
              <span className={`badge ${currentVerificationStage === 'Verified' ? 'badge-verified' : 'badge-warning'}`}>
                {currentVerificationStage}
              </span>
            )}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '0.5rem',
            position: 'relative'
          }}>
            {verificationStages.map((stg, i) => {
              const currentIndex = getStageIndex(currentVerificationStage);
              const isPast = isSubmitted && currentIndex >= i;
              const isCurrent = isSubmitted && currentVerificationStage === stg.key;

              return (
                <div key={stg.key} style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: isPast ? (stg.key === 'Verified' ? '#16a34a' : '#1d70b8') : '#e2e8f0',
                    color: isPast ? '#ffffff' : '#64748b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 0.5rem auto',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    transition: 'all 0.3s ease'
                  }}>
                    {isPast ? <CheckCircle2 size={18} /> : i + 1}
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: isCurrent ? 700 : 600, color: isPast ? '#0f2942' : '#94a3b8' }}>
                    {stg.label}
                  </div>
                </div>
              );
            })}
          </div>

          {isSubmitted && currentVerificationStage !== 'Verified' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.25rem', padding: '0.75rem 1rem', backgroundColor: '#e8f1f8', borderRadius: '6px', fontSize: '0.825rem', color: '#0f3d68' }}>
              <Clock size={16} />
              <span>Automated verification checks in progress. Stage: <strong>{currentVerificationStage}</strong>...</span>
            </div>
          )}

          {isSubmitted && currentVerificationStage === 'Verified' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.25rem', padding: '0.75rem 1rem', backgroundColor: '#dcfce7', borderRadius: '6px', fontSize: '0.825rem', color: '#166534' }}>
              <CheckCircle2 size={16} color="#16a34a" />
              <span>Department successfully verified against official records. You may now publish requirements or view eligible startups.</span>
            </div>
          )}
        </div>

        {/* Form Container */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="card">
            
            {/* Step 1: Organisation Information */}
            <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '2rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#0f3d68', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700 }}>1</span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f2942' }}>
                  Organisation Information
                </h3>
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="deptName">
                    Department / Organisation Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="deptName"
                    name="deptName"
                    className="form-control"
                    value={formData.deptName}
                    onChange={handleChange}
                    required
                  />
                  <div className="form-help">Full official name of the administrative department or public authority</div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="orgType">
                    Organisation Type <span className="required">*</span>
                  </label>
                  <select
                    id="orgType"
                    name="orgType"
                    className="form-control"
                    value={formData.orgType}
                    onChange={handleChange}
                    required
                  >
                    <option value="State Government Department">State Government Department</option>
                    <option value="Municipal Corporation">Municipal Corporation</option>
                    <option value="Autonomous Public Body">Autonomous Public Body</option>
                    <option value="Public Sector Undertaking (PSU)">Public Sector Undertaking (PSU)</option>
                    <option value="Urban Development Authority">Urban Development Authority</option>
                  </select>
                </div>
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="state">
                    State <span className="required">*</span>
                  </label>
                  <select
                    id="state"
                    name="state"
                    className="form-control"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  >
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Telangana">Telangana</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="district">
                    District <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="district"
                    name="district"
                    className="form-control"
                    value={formData.district}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="officeAddress">
                  Official Office Address <span className="required">*</span>
                </label>
                <textarea
                  id="officeAddress"
                  name="officeAddress"
                  className="form-control"
                  rows={2}
                  value={formData.officeAddress}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid-3">
                <div className="form-group">
                  <label className="form-label" htmlFor="officialWebsite">
                    Official Website <span className="required">*</span>
                  </label>
                  <input
                    type="url"
                    id="officialWebsite"
                    name="officialWebsite"
                    className="form-control"
                    value={formData.officialWebsite}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="officialEmail">
                    Official Department Email (.gov.in / .nic.in) <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="officialEmail"
                    name="officialEmail"
                    className="form-control"
                    value={formData.officialEmail}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="orgId">
                    Organisation ID / DDO Code
                  </label>
                  <input
                    type="text"
                    id="orgId"
                    name="orgId"
                    className="form-control"
                    value={formData.orgId}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Authorised Representative */}
            <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '2rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#0f3d68', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700 }}>2</span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f2942' }}>
                  Authorised Representative Information
                </h3>
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="repName">
                    Representative Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="repName"
                    name="repName"
                    className="form-control"
                    value={formData.repName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="repDesignation">
                    Designation <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="repDesignation"
                    name="repDesignation"
                    className="form-control"
                    value={formData.repDesignation}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="repEmail">
                    Official Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="repEmail"
                    name="repEmail"
                    className="form-control"
                    value={formData.repEmail}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="repPhone">
                    Official Contact Phone / CUG <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="repPhone"
                    name="repPhone"
                    className="form-control"
                    value={formData.repPhone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="repAuthInfo">
                  Authorisation Order Reference / Office Order <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="repAuthInfo"
                  name="repAuthInfo"
                  className="form-control"
                  value={formData.repAuthInfo}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Step 3: Documents Upload */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#0f3d68', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700 }}>3</span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f2942' }}>
                  Statutory & Authorisation Documents
                </h3>
              </div>

              <div className="grid-3">
                <div style={{ border: '1px dashed #cbd5e1', borderRadius: '8px', padding: '1.25rem', textAlign: 'center', backgroundColor: '#f8fafc' }}>
                  <FileText size={28} color="#1d70b8" style={{ marginBottom: '0.5rem' }} />
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0f2942', marginBottom: '0.25rem' }}>Organisation Document</div>
                  <div style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600 }}>{formData.orgDoc}</div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.5rem' }}>Gazette / Government Resolution</div>
                </div>

                <div style={{ border: '1px dashed #cbd5e1', borderRadius: '8px', padding: '1.25rem', textAlign: 'center', backgroundColor: '#f8fafc' }}>
                  <ShieldCheck size={28} color="#1d70b8" style={{ marginBottom: '0.5rem' }} />
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0f2942', marginBottom: '0.25rem' }}>Authorisation Letter</div>
                  <div style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600 }}>{formData.authDoc}</div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.5rem' }}>Signed by Head of Department</div>
                </div>

                <div style={{ border: '1px dashed #cbd5e1', borderRadius: '8px', padding: '1.25rem', textAlign: 'center', backgroundColor: '#f8fafc' }}>
                  <Upload size={28} color="#1d70b8" style={{ marginBottom: '0.5rem' }} />
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0f2942', marginBottom: '0.25rem' }}>Supporting Orders</div>
                  <div style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600 }}>{formData.supportDoc}</div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.5rem' }}>Budget / Program Sanction</div>
                </div>
              </div>
            </div>

            {/* Submission Actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
              <button 
                type="button" 
                onClick={() => setCurrentRoute('government')} 
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="btn btn-primary"
                style={{ padding: '0.75rem 2rem' }}
              >
                Submit for Verification <ArrowRight size={16} />
              </button>
            </div>

          </form>
        ) : (
          <div className="card" style={{ textAlign: 'center', padding: '3.5rem 2rem' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: currentVerificationStage === 'Verified' ? '#dcfce7' : '#e8f1f8',
              color: currentVerificationStage === 'Verified' ? '#166534' : '#0f3d68',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto'
            }}>
              {currentVerificationStage === 'Verified' ? <CheckCircle2 size={36} color="#16a34a" /> : <Clock size={36} color="#1d70b8" />}
            </div>

            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f2942', marginBottom: '0.75rem' }}>
              {currentVerificationStage === 'Verified' ? 'Department Profile Verified' : 'Application Submitted Successfully'}
            </h3>

            <p style={{ fontSize: '1rem', color: '#475569', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
              {currentVerificationStage === 'Verified' 
                ? 'Your department is now credentialed to publish public challenges, review startup proposals, and execute pilot contracts.'
                : 'Your submission has entered the state administrative verification queue. The system is performing cross-checks against official records.'}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => setCurrentRoute('opportunities')} className="btn btn-primary">
                View Requirements
              </button>
              <button onClick={() => setCurrentRoute('dashboard-government')} className="btn btn-secondary">
                Go to Government Dashboard
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
