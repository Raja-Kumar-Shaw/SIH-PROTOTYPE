import React, { useState } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Cpu, 
  Target, 
  Award, 
  Scale, 
  Layers, 
  CreditCard, 
  TrendingUp, 
  ChevronRight 
} from 'lucide-react';

export default function HowItWorksPage({ setCurrentRoute }) {
  const [activeStep, setActiveStep] = useState(1);

  const handleNav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const steps = [
    {
      num: 1,
      title: "Government Publishes Requirement",
      icon: <Building2 size={22} />,
      summary: "Departments define operational challenges, technical parameters, and target pilot outcomes.",
      details: "A government organisation or municipal corporation specifies an operational problem statement (e.g. water loss reduction, automated waste sorting, tele-ICU expansion), defining mandatory technological capabilities, baseline metrics, estimated project values, and pilot sandbox boundaries.",
      route: "opportunities",
      actionText: "View Current Requirements"
    },
    {
      num: 2,
      title: "Organisations Are Verified",
      icon: <ShieldCheck size={22} />,
      summary: "Official registry cross-checks validate legal existence, PAN, GSTIN, and active MCA status.",
      details: "Before participating, startups and enterprises undergo automated legal verification. The platform checks Ministry of Corporate Affairs (MCA) records, GST compliance, physical registered address consistency, and authorised representative DIN/DPIN, assisting administrative vetting.",
      route: "verification",
      actionText: "Inspect Verification Engine"
    },
    {
      num: 3,
      title: "Relevant Startups Are Identified",
      icon: <Search size={22} />,
      summary: "Algorithmic matching aligns department requirements with verified startup technical capabilities.",
      details: "The system analyses the problem statement against verified startup profiles, evaluating domain expertise, previous similar projects, infrastructure scalability, and compliance certifications to generate transparent recommendations for department review.",
      route: "matching",
      actionText: "Test Startup Matching"
    },
    {
      num: 4,
      title: "Technical Capability Is Checked",
      icon: <Cpu size={22} />,
      summary: "Transparent side-by-side gap analysis between required and proven capabilities.",
      details: "The platform performs a strict checklist comparison. Startups must fulfill 100% of mandatory capabilities (e.g. IoT sensors, cloud telemetry, 5,000-device capacity) to be certified as 'Eligible for Pilot Proposal'. Missing parameters are clearly flagged.",
      route: "capability",
      actionText: "Run Capability Comparison"
    },
    {
      num: 5,
      title: "Eligible Startups Submit Proposals",
      icon: <FileText size={22} />,
      summary: "Only verified and technically eligible startups submit structured pilot proposals.",
      details: "Verified startups review eligibility requirements, confirm their compliance declarations, and submit detailed pilot execution proposals, outlining technical architecture, work breakdown schedules, and proposed hardware/software deployments.",
      route: "opportunities",
      actionText: "Review Proposal Workflow"
    },
    {
      num: 6,
      title: "Pilot Project Is Conducted",
      icon: <Layers size={22} />,
      summary: "A low-risk, funded Proof of Concept (PoC) tests the solution under real operating conditions.",
      details: "Rather than committing immediately to a full ₹50,00,000 deployment, the department authorizes a limited 60-day pilot valued at ₹5,00,000. The pilot operates in a designated sandbox or municipal zone to empirically test real-world functionality.",
      route: "pilot",
      actionText: "View Pilot Framework"
    },
    {
      num: 7,
      title: "Measurable KPIs Are Evaluated",
      icon: <Target size={22} />,
      summary: "Performance metrics (e.g. 24% water loss reduction vs 20% target) are validated.",
      details: "During and upon conclusion of the pilot, pre-defined quantitative KPIs are measured by independent meters and server logs. The system records target versus actual outcomes, computing variances to generate an objective pilot evaluation report.",
      route: "evaluation",
      actionText: "Explore KPI Evaluation"
    },
    {
      num: 8,
      title: "Comprehensive Feasibility Assessed",
      icon: <Scale size={22} />,
      summary: "Scalability, security compliance, maintainability, and total lifecycle cost are audited.",
      details: "Following successful pilot metrics, department officers conduct an 8-point audit covering data security (ISO 27001), system scalability across municipal districts, local engineering support capability, and 3-year total cost of ownership.",
      route: "evaluation",
      actionText: "View Full Evaluation Criteria"
    },
    {
      num: 9,
      title: "Procurement Decision Is Made",
      icon: <Award size={22} />,
      summary: "Authorised department authorities issue formal work orders and standard procurement contracts.",
      details: "The final procurement award is decided by authorised government authorities in strict accordance with applicable public procurement rules (e.g. GFR 2017). Formal work orders, SLA agreements, and contract schedules are established.",
      route: "procurement",
      actionText: "Inspect Procurement Module"
    },
    {
      num: 10,
      title: "Project Implementation Is Monitored",
      icon: <TrendingUp size={22} />,
      summary: "Planned versus actual progress tracking with automatic delay detection and escalation.",
      details: "Ongoing project implementation is tracked against milestone deadlines. When variances occur (e.g. 7-day delay), the system activates a 4-stage review hierarchy (Reminder → Overdue → Review Required → Escalated for Review) without arbitrary penalties.",
      route: "monitoring",
      actionText: "View Project Monitoring"
    },
    {
      num: 11,
      title: "Milestone Payments Are Tracked",
      icon: <CreditCard size={22} />,
      summary: "Funds are released in tranches (20%-30%-30%-20%) upon verified completion of deliverables.",
      details: "Public funds are disbursed transparently. Each milestone requires engineer sign-off and audit clearance before payment release. The platform also accounts for the proposed 2% platform service fee subject to contract terms.",
      route: "payments",
      actionText: "View Payment Ledger"
    },
    {
      num: 12,
      title: "Successful Solutions May Be Scaled",
      icon: <CheckCircle2 size={22} />,
      summary: "Validated solutions can be extended to additional districts, divisions, and sister departments.",
      details: "Solutions that have proven success in one municipal corporation or district hospital are certified for state-wide empanelment or replication across other administrative zones, maximizing public sector return on investment.",
      route: "opportunities",
      actionText: "Explore Scaling Pathways"
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-pre">
            <Layers size={16} /> Operational Roadmap
          </div>
          <h1 className="page-header-title">How It Works: 12-Step Lifecycle</h1>
          <p className="page-header-desc">
            A comprehensive, transparent public procurement model designed to take innovative technology from departmental problem statement to verified, scalable public deployment.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ paddingBottom: '5rem' }}>
        
        {/* Step Navigation Ribbon */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '0.5rem',
          marginBottom: '2rem'
        }}>
          {steps.map((s) => (
            <button
              key={s.num}
              onClick={() => setActiveStep(s.num)}
              style={{
                backgroundColor: activeStep === s.num ? '#0f3d68' : '#ffffff',
                color: activeStep === s.num ? '#ffffff' : '#334155',
                border: '1px solid',
                borderColor: activeStep === s.num ? '#0f3d68' : '#cbd5e1',
                borderRadius: '8px',
                padding: '0.75rem 0.5rem',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.15s ease',
                boxShadow: activeStep === s.num ? '0 4px 10px rgba(15, 61, 104, 0.2)' : 'none'
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 700, opacity: activeStep === s.num ? 0.8 : 0.6 }}>
                STEP {s.num}
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {s.title.split(' ')[0]} {s.title.split(' ')[1] || ''}
              </div>
            </button>
          ))}
        </div>

        {/* Active Step Detailed Card */}
        {(() => {
          const current = steps.find(s => s.num === activeStep) || steps[0];
          return (
            <div className="card" style={{ borderLeft: '6px solid #1d70b8', padding: '2.5rem', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '12px',
                    backgroundColor: '#e8f1f8',
                    color: '#0f3d68',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {current.icon}
                  </div>
                  <div>
                    <span className="badge badge-info" style={{ marginBottom: '0.25rem' }}>
                      Lifecycle Stage {current.num} of 12
                    </span>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f2942' }}>
                      {current.title}
                    </h2>
                  </div>
                </div>

                <button onClick={() => handleNav(current.route)} className="btn btn-primary">
                  {current.actionText} <ArrowRight size={16} />
                </button>
              </div>

              <div style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '1.25rem',
                marginBottom: '1.5rem',
                fontSize: '1.05rem',
                fontWeight: 600,
                color: '#1e293b'
              }}>
                {current.summary}
              </div>

              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.7', marginBottom: '2rem' }}>
                {current.details}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
                <button
                  disabled={activeStep === 1}
                  onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                  className="btn btn-sm btn-secondary"
                  style={{ visibility: activeStep === 1 ? 'hidden' : 'visible' }}
                >
                  ← Previous Step
                </button>
                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                  Step {activeStep} of 12
                </div>
                <button
                  disabled={activeStep === 12}
                  onClick={() => setActiveStep(prev => Math.min(12, prev + 1))}
                  className="btn btn-sm btn-primary"
                  style={{ visibility: activeStep === 12 ? 'hidden' : 'visible' }}
                >
                  Next Step →
                </button>
              </div>
            </div>
          );
        })()}

        {/* Complete Step Overview Grid */}
        <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f2942', marginBottom: '1.25rem' }}>
          All 12 Lifecycle Stages at a Glance
        </h3>
        <div className="grid-3" style={{ gap: '1.25rem' }}>
          {steps.map(step => (
            <div 
              key={step.num}
              onClick={() => setActiveStep(step.num)}
              className="card"
              style={{
                cursor: 'pointer',
                borderColor: activeStep === step.num ? '#1d70b8' : '#e2e8f0',
                backgroundColor: activeStep === step.num ? '#f0f6fa' : '#ffffff',
                padding: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: activeStep === step.num ? '#1d70b8' : '#e2e8f0',
                  color: activeStep === step.num ? '#ffffff' : '#475569',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 700
                }}>
                  {step.num}
                </span>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f2942' }}>
                  {step.title}
                </h4>
              </div>
              <p style={{ fontSize: '0.825rem', color: '#64748b', lineHeight: '1.5' }}>
                {step.summary}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
