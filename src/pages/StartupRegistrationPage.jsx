import React, { useState } from 'react';
import { 
  Rocket, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Upload, 
  Building, 
  Cpu, 
  Briefcase, 
  Award, 
  DollarSign, 
  Clock 
} from 'lucide-react';
import { DOMAINS } from '../data/mockData';

export default function StartupRegistrationPage({ setCurrentRoute }) {
  const [activeTab, setActiveTab] = useState('legal');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    // Legal
    startupName: 'AquaTech Solutions Private Limited',
    legalName: 'AquaTech Solutions Pvt Ltd',
    registrationNumber: 'U74999MH2021PTC358921',
    pan: 'AAACA1234D',
    gstin: '27AAACA1234D1Z5',
    registeredAddress: 'Wing B, Baner Tech Park, High Street, Baner, Pune 411045',
    state: 'Maharashtra',
    district: 'Pune',
    website: 'https://aquatech-solutions.in',
    officialEmail: 'procurement@aquatech-solutions.in',
    representativeName: 'Vikram Kulkarni',
    representativeDesignation: 'Chief Executive Officer & Founder',
    representativePhone: '+91 98230 45678',

    // Business Profile
    foundingYear: '2021',
    industry: 'Water Technology & Environmental Utilities',
    domain: 'Water Management',
    stage: 'Growth / Commercialized',
    teamSize: '34',
    founderInfo: 'Vikram Kulkarni (B.Tech IIT Bombay, 12 yrs IoT Systems) & Neha Joshi (Ex-Water Resource Engineer)',
    productDescription: 'Non-invasive acoustic telemetry and LoRaWAN smart pressure management system to detect municipal water leakage in under 10 minutes.',
    operatingLocations: 'Pune, Pimpri-Chinchwad, Navi Mumbai, Nashik',

    // Technical Capability
    coreTechnologies: 'IoT Acoustic Sensors, LoRaWAN Telemetry, Edge DSP, Cloud SCADA API',
    technologyStack: 'Python, Golang, React, PostgreSQL, TimescaleDB, AWS GovCloud, MQTT/Kafka',
    technicalTeamDescription: 'Embedded firmware engineers, DSP signal analysts, cloud telemetry architects',
    technicalEmployees: '24',
    infrastructure: 'High-precision test calibration bench, automated cloud telemetry cluster',
    productMaturity: 'TRL 8 - System Complete and Qualified',
    implementationCapacity: '10,000 devices across 5 districts concurrently',
    deploymentCapacity: '500 sensors per week with field calibration teams',
    serviceCapacity: '24x7 telemetry monitoring and 4-hour on-site dispatch in Western Maharashtra',

    // Experience
    previousProjects: 'Pune Cantonment Board Distribution Network (₹28.5L), MIDC Chakan Flow Telemetry (₹34L)',
    similarProjects: 'Municipal water distribution zone acoustic leak reduction',
    govtProjects: 'Pune Cantonment Board Smart Pressure Pilot',
    clientReferences: 'Executive Engineer (Water Supply), Pune Cantonment Board; Chief Facility Engineer, MIDC Chakan',
    projectOutcomes: 'Verified 22% NRW loss reduction and under 8-minute burst alerts',

    // Compliance
    qualityCertifications: 'ISO 9001:2015 (Quality Management System)',
    securityCertifications: 'ISO 27001:2022 (Information Security Management)',
    industryLicences: 'CE Marking, BIS Compliant Sensing Hardware',
    privacyCompliance: 'DPDP Act 2023 Aligned, STQC Cybersecurity Baseline Audit Complete',

    // Commercial
    pricingModel: 'Hardware Deployment + Annual Maintenance & Cloud Subscription',
    typicalProjectSize: '₹25,00,000 - ₹75,00,000',
    implementationCostRange: '₹3,500 to ₹7,000 per acoustic sensor point',
    supportCapability: 'SLA backed 99.0% telemetry availability with dedicated engineer support',
    maintenanceCapability: 'Comprehensive annual maintenance contracts (CAMC) with spare replacement'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const tabs = [
    { id: 'legal', label: '1. Legal Information', icon: <Building size={16} /> },
    { id: 'business', label: '2. Business Profile', icon: <Briefcase size={16} /> },
    { id: 'technical', label: '3. Technical Capability', icon: <Cpu size={16} /> },
    { id: 'experience', label: '4. Experience & Projects', icon: <Award size={16} /> },
    { id: 'compliance', label: '5. Compliance & Certs', icon: <ShieldCheck size={16} /> },
    { id: 'commercial', label: '6. Commercial Terms', icon: <DollarSign size={16} /> },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-pre">
            <Rocket size={16} /> Enterprise Onboarding
          </div>
          <h1 className="page-header-title">Startup Registration</h1>
          <p className="page-header-desc">
            Provide statutory legal credentials, detailed technical capability profiles, project history, and compliance declarations to qualify for government innovation procurement.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ paddingBottom: '5rem', maxWidth: '1080px' }}>
        
        {!isSubmitted ? (
          <div>
            {/* Multi-Step Tab Bar */}
            <div style={{
              display: 'flex',
              overflowX: 'auto',
              gap: '0.35rem',
              backgroundColor: '#e2e8f0',
              padding: '0.4rem',
              borderRadius: '10px',
              marginBottom: '2rem'
            }}>
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.65rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: activeTab === tab.id ? '#ffffff' : 'transparent',
                    color: activeTab === tab.id ? '#0f3d68' : '#475569',
                    fontWeight: activeTab === tab.id ? 700 : 500,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    boxShadow: activeTab === tab.id ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="card">
              
              {/* TAB 1: LEGAL INFORMATION */}
              {activeTab === 'legal' && (
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f2942', marginBottom: '1.25rem' }}>
                    Legal & Corporate Registration
                  </h3>
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="startupName">Startup / Business Name <span className="required">*</span></label>
                      <input type="text" id="startupName" name="startupName" className="form-control" value={formData.startupName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="legalName">Legal Entity Name (as per ROC) <span className="required">*</span></label>
                      <input type="text" id="legalName" name="legalName" className="form-control" value={formData.legalName} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="grid-3">
                    <div className="form-group">
                      <label className="form-label" htmlFor="registrationNumber">CIN / LLPIN <span className="required">*</span></label>
                      <input type="text" id="registrationNumber" name="registrationNumber" className="form-control" value={formData.registrationNumber} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="pan">Permanent Account Number (PAN) <span className="required">*</span></label>
                      <input type="text" id="pan" name="pan" className="form-control" value={formData.pan} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="gstin">GSTIN <span className="required">*</span></label>
                      <input type="text" id="gstin" name="gstin" className="form-control" value={formData.gstin} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="registeredAddress">Registered Office Address <span className="required">*</span></label>
                    <textarea id="registeredAddress" name="registeredAddress" className="form-control" rows={2} value={formData.registeredAddress} onChange={handleChange} required />
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="state">State <span className="required">*</span></label>
                      <input type="text" id="state" name="state" className="form-control" value={formData.state} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="district">District <span className="required">*</span></label>
                      <input type="text" id="district" name="district" className="form-control" value={formData.district} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="grid-3">
                    <div className="form-group">
                      <label className="form-label" htmlFor="website">Official Website <span className="required">*</span></label>
                      <input type="url" id="website" name="website" className="form-control" value={formData.website} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="officialEmail">Official Business Email <span className="required">*</span></label>
                      <input type="email" id="officialEmail" name="officialEmail" className="form-control" value={formData.officialEmail} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="representativeName">Authorised Representative <span className="required">*</span></label>
                      <input type="text" id="representativeName" name="representativeName" className="form-control" value={formData.representativeName} onChange={handleChange} required />
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
                    <button type="button" onClick={() => setActiveTab('business')} className="btn btn-primary">
                      Next: Business Profile <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 2: BUSINESS PROFILE */}
              {activeTab === 'business' && (
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f2942', marginBottom: '1.25rem' }}>
                    Business Profile & Track Record
                  </h3>
                  <div className="grid-3">
                    <div className="form-group">
                      <label className="form-label" htmlFor="foundingYear">Founding Year <span className="required">*</span></label>
                      <input type="number" id="foundingYear" name="foundingYear" className="form-control" value={formData.foundingYear} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="domain">Primary Domain <span className="required">*</span></label>
                      <select id="domain" name="domain" className="form-control" value={formData.domain} onChange={handleChange}>
                        {DOMAINS.map(d => <option key={d} value={d}>{d}</option>)}
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="stage">Maturity Stage <span className="required">*</span></label>
                      <select id="stage" name="stage" className="form-control" value={formData.stage} onChange={handleChange}>
                        <option value="Early Commercial">Early Commercial</option>
                        <option value="Growth / Commercialized">Growth / Commercialized</option>
                        <option value="Mature / Scaled">Mature / Scaled</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="teamSize">Total Team Size <span className="required">*</span></label>
                      <input type="number" id="teamSize" name="teamSize" className="form-control" value={formData.teamSize} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="operatingLocations">Operating Locations <span className="required">*</span></label>
                      <input type="text" id="operatingLocations" name="operatingLocations" className="form-control" value={formData.operatingLocations} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="founderInfo">Founder / Promoter Background <span className="required">*</span></label>
                    <textarea id="founderInfo" name="founderInfo" className="form-control" rows={2} value={formData.founderInfo} onChange={handleChange} required />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="productDescription">Product / Service Core Description <span className="required">*</span></label>
                    <textarea id="productDescription" name="productDescription" className="form-control" rows={3} value={formData.productDescription} onChange={handleChange} required />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                    <button type="button" onClick={() => setActiveTab('legal')} className="btn btn-secondary">Previous</button>
                    <button type="button" onClick={() => setActiveTab('technical')} className="btn btn-primary">Next: Technical Capability <ArrowRight size={16} /></button>
                  </div>
                </div>
              )}

              {/* TAB 3: TECHNICAL CAPABILITY */}
              {activeTab === 'technical' && (
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f2942', marginBottom: '1.25rem' }}>
                    Technical Capability & Architecture
                  </h3>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="coreTechnologies">Core Technologies <span className="required">*</span></label>
                      <input type="text" id="coreTechnologies" name="coreTechnologies" className="form-control" value={formData.coreTechnologies} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="technicalEmployees">Number of Technical Employees <span className="required">*</span></label>
                      <input type="number" id="technicalEmployees" name="technicalEmployees" className="form-control" value={formData.technicalEmployees} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="technologyStack">Full Technology Stack & Protocols <span className="required">*</span></label>
                    <input type="text" id="technologyStack" name="technologyStack" className="form-control" value={formData.technologyStack} onChange={handleChange} required />
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="productMaturity">Technology Readiness Level (TRL) <span className="required">*</span></label>
                      <input type="text" id="productMaturity" name="productMaturity" className="form-control" value={formData.productMaturity} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="implementationCapacity">Implementation Capacity <span className="required">*</span></label>
                      <input type="text" id="implementationCapacity" name="implementationCapacity" className="form-control" value={formData.implementationCapacity} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="deploymentCapacity">Deployment Rate Capacity</label>
                      <input type="text" id="deploymentCapacity" name="deploymentCapacity" className="form-control" value={formData.deploymentCapacity} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="serviceCapacity">Field Maintenance & Service Capacity</label>
                      <input type="text" id="serviceCapacity" name="serviceCapacity" className="form-control" value={formData.serviceCapacity} onChange={handleChange} />
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                    <button type="button" onClick={() => setActiveTab('business')} className="btn btn-secondary">Previous</button>
                    <button type="button" onClick={() => setActiveTab('experience')} className="btn btn-primary">Next: Experience & Projects <ArrowRight size={16} /></button>
                  </div>
                </div>
              )}

              {/* TAB 4: EXPERIENCE */}
              {activeTab === 'experience' && (
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f2942', marginBottom: '1.25rem' }}>
                    Experience & Prior Deployments
                  </h3>

                  <div className="form-group">
                    <label className="form-label" htmlFor="previousProjects">Previous Major Deployments & Values <span className="required">*</span></label>
                    <textarea id="previousProjects" name="previousProjects" className="form-control" rows={2} value={formData.previousProjects} onChange={handleChange} required />
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="govtProjects">Public Sector / Municipal Engagements</label>
                      <input type="text" id="govtProjects" name="govtProjects" className="form-control" value={formData.govtProjects} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="clientReferences">Verified Client References <span className="required">*</span></label>
                      <input type="text" id="clientReferences" name="clientReferences" className="form-control" value={formData.clientReferences} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="projectOutcomes">Measurable Deployment Outcomes Achieved <span className="required">*</span></label>
                    <textarea id="projectOutcomes" name="projectOutcomes" className="form-control" rows={2} value={formData.projectOutcomes} onChange={handleChange} required />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                    <button type="button" onClick={() => setActiveTab('technical')} className="btn btn-secondary">Previous</button>
                    <button type="button" onClick={() => setActiveTab('compliance')} className="btn btn-primary">Next: Compliance <ArrowRight size={16} /></button>
                  </div>
                </div>
              )}

              {/* TAB 5: COMPLIANCE */}
              {activeTab === 'compliance' && (
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f2942', marginBottom: '1.25rem' }}>
                    Compliance, Certifications & Standards
                  </h3>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="qualityCertifications">Quality Certifications (e.g. ISO 9001) <span className="required">*</span></label>
                      <input type="text" id="qualityCertifications" name="qualityCertifications" className="form-control" value={formData.qualityCertifications} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="securityCertifications">Security Certifications (e.g. ISO 27001) <span className="required">*</span></label>
                      <input type="text" id="securityCertifications" name="securityCertifications" className="form-control" value={formData.securityCertifications} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="industryLicences">Hardware / Industry Licences & CE/BIS</label>
                      <input type="text" id="industryLicences" name="industryLicences" className="form-control" value={formData.industryLicences} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="privacyCompliance">Data & Privacy Compliance Standard</label>
                      <input type="text" id="privacyCompliance" name="privacyCompliance" className="form-control" value={formData.privacyCompliance} onChange={handleChange} />
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                    <button type="button" onClick={() => setActiveTab('experience')} className="btn btn-secondary">Previous</button>
                    <button type="button" onClick={() => setActiveTab('commercial')} className="btn btn-primary">Next: Commercials <ArrowRight size={16} /></button>
                  </div>
                </div>
              )}

              {/* TAB 6: COMMERCIAL TERMS & SUBMISSION */}
              {activeTab === 'commercial' && (
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f2942', marginBottom: '1.25rem' }}>
                    Commercial Model & Supporting Documents
                  </h3>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="pricingModel">Commercial Pricing Model <span className="required">*</span></label>
                      <input type="text" id="pricingModel" name="pricingModel" className="form-control" value={formData.pricingModel} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="typicalProjectSize">Typical Project Contract Range <span className="required">*</span></label>
                      <input type="text" id="typicalProjectSize" name="typicalProjectSize" className="form-control" value={formData.typicalProjectSize} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="supportCapability">Support & SLA Terms <span className="required">*</span></label>
                      <input type="text" id="supportCapability" name="supportCapability" className="form-control" value={formData.supportCapability} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="maintenanceCapability">Maintenance & Spares Provision</label>
                      <input type="text" id="maintenanceCapability" name="maintenanceCapability" className="form-control" value={formData.maintenanceCapability} onChange={handleChange} />
                    </div>
                  </div>

                  {/* Document Uploads */}
                  <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f2942', marginBottom: '1rem' }}>
                      Mandatory Document Uploads (Simulated)
                    </h4>
                    <div className="grid-3">
                      <div style={{ border: '1px dashed #cbd5e1', borderRadius: '8px', padding: '1rem', textAlign: 'center', backgroundColor: '#f8fafc' }}>
                        <FileText size={24} color="#16a34a" style={{ marginBottom: '0.25rem' }} />
                        <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>Certificate of Incorporation</div>
                        <div style={{ fontSize: '0.7rem', color: '#16a34a', marginTop: '0.25rem' }}>COI_AquaTech.pdf (Uploaded)</div>
                      </div>
                      <div style={{ border: '1px dashed #cbd5e1', borderRadius: '8px', padding: '1rem', textAlign: 'center', backgroundColor: '#f8fafc' }}>
                        <ShieldCheck size={24} color="#16a34a" style={{ marginBottom: '0.25rem' }} />
                        <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>GSTIN & PAN Registration</div>
                        <div style={{ fontSize: '0.7rem', color: '#16a34a', marginTop: '0.25rem' }}>GST_PAN_Verified.pdf (Uploaded)</div>
                      </div>
                      <div style={{ border: '1px dashed #cbd5e1', borderRadius: '8px', padding: '1rem', textAlign: 'center', backgroundColor: '#f8fafc' }}>
                        <Award size={24} color="#16a34a" style={{ marginBottom: '0.25rem' }} />
                        <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>ISO & Security Certs</div>
                        <div style={{ fontSize: '0.7rem', color: '#16a34a', marginTop: '0.25rem' }}>ISO27001_Bundle.pdf (Uploaded)</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                    <button type="button" onClick={() => setActiveTab('compliance')} className="btn btn-secondary">Previous</button>
                    <button type="submit" className="btn btn-lg btn-success">
                      Submit for AI-Assisted Verification <CheckCircle2 size={18} />
                    </button>
                  </div>
                </div>
              )}

            </form>
          </div>
        ) : (
          <div className="card" style={{ textAlign: 'center', padding: '3.5rem 2rem' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#dcfce7',
              color: '#166534',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto'
            }}>
              <CheckCircle2 size={36} color="#16a34a" />
            </div>

            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f2942', marginBottom: '0.75rem' }}>
              Registration Submitted for Verification
            </h3>

            <p style={{ fontSize: '1rem', color: '#475569', maxWidth: '650px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
              Your profile data and statutory documents have been queued for automated cross-referencing against MCA and GSTIN registries. Once verified by the review authority, your organisation will be certified to submit pilot applications.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => setCurrentRoute('verification')} className="btn btn-primary">
                View Organisation Verification
              </button>
              <button onClick={() => setCurrentRoute('opportunities')} className="btn btn-secondary">
                Explore Available Opportunities
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
