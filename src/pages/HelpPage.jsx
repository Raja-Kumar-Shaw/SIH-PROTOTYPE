import React, { useState } from 'react';
import { 
  HelpCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  CreditCard, 
  Building2, 
  Rocket,
  ChevronDown
} from 'lucide-react';

export default function HelpPage({ setCurrentRoute }) {
  const [activeTab, setActiveTab] = useState('faq');
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const [ticketData, setTicketData] = useState({
    name: 'Vikram Kulkarni',
    email: 'procurement@aquatech-solutions.in',
    category: 'Verification Support',
    subject: 'Assistance with GSTIN and MCA address synchronisation',
    message: 'We have updated our registered office address in Pune Baner and need expedited verification for the Water Supply challenge.'
  });

  const faqs = [
    {
      q: "What is the timeline for organisation verification?",
      a: "Automated checks against official MCA and GSTIN registries execute in real-time. Final review by the authorised state procurement verification auditor typically takes 1 to 2 business days."
    },
    {
      q: "Can a startup submit a proposal if one mandatory technical capability is missing?",
      a: "No. The platform enforces a strict technical capability check. Startups must demonstrate 100% compliance with mandatory capabilities. Missing parameters are clearly flagged to ensure complete transparency."
    },
    {
      q: "How does the 60-day pilot project protect government departments?",
      a: "The pilot isolates a small operational scope (e.g. 1 municipal zone or ward) and limits financial commitment (e.g. ₹5,00,000). If the startup fails to meet pre-agreed KPIs, the department can terminate without liability for the full ₹50,00,000 project."
    },
    {
      q: "What is the Proposed Platform Service Fee?",
      a: "The platform model proposes a 2% service fee on processed innovation contracts. It is not a statutory deduction and is subject to applicable state procurement rules and explicit contract approvals."
    },
    {
      q: "What happens if an implementation project is delayed?",
      a: "The system triggers a multi-tier review sequence: Reminder → Overdue → Review Required → Escalated for Review. Startups are not automatically penalised; the framework initiates joint coordination between the startup, the project officer, and the department authority."
    }
  ];

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    setTicketSubmitted(true);
    setTimeout(() => setTicketSubmitted(false), 5000);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-pre">
            <HelpCircle size={16} /> Public Sector Help Desk
          </div>
          <h1 className="page-header-title">Help & Support Center</h1>
          <p className="page-header-desc">
            Technical support, verification assistance, application guidance, payment queries, and official escalation desks for participating public departments and innovators.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ paddingBottom: '5rem' }}>
        
        {/* Support Categories Nav */}
        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', marginBottom: '2.5rem', backgroundColor: '#e2e8f0', padding: '0.35rem', borderRadius: '10px' }}>
          {[
            { id: 'faq', label: 'Frequently Asked Questions' },
            { id: 'registration', label: 'Registration Support' },
            { id: 'verification', label: 'Verification Support' },
            { id: 'application', label: 'Application Support' },
            { id: 'payment', label: 'Payment Support' },
            { id: 'contact', label: 'Contact Support Desk' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '0.65rem 1.25rem',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: activeTab === tab.id ? '#ffffff' : 'transparent',
                color: activeTab === tab.id ? '#0f3d68' : '#475569',
                fontWeight: activeTab === tab.id ? 700 : 500,
                fontSize: '0.85rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: FAQ ACCORDION */}
        {activeTab === 'faq' && (
          <div className="card" style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f2942', marginBottom: '1.5rem' }}>
              Frequently Asked Questions
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} style={{
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '1rem 1.25rem',
                        backgroundColor: isOpen ? '#f8fafc' : '#ffffff',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        color: '#0f2942'
                      }}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown size={18} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
                    </button>
                    {isOpen && (
                      <div style={{ padding: '1rem 1.25rem', backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0', fontSize: '0.9rem', color: '#475569', lineHeight: '1.6' }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: REGISTRATION SUPPORT */}
        {activeTab === 'registration' && (
          <div className="card" style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f2942', marginBottom: '1rem' }}>
              Registration & Onboarding Support
            </h2>
            <p style={{ color: '#475569', marginBottom: '1.5rem' }}>
              Guidance for departments and commercial entities encountering difficulties during profile creation.
            </p>
            <div className="grid-2" style={{ gap: '1.5rem' }}>
              <div style={{ padding: '1.25rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontWeight: 700, color: '#0f2942', marginBottom: '0.5rem' }}>Government Officer Authorisation</h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
                  Officers must use official .gov.in or .nic.in email addresses. If registering via temporary delegation, upload a copy of the Office Order signed by the Joint Secretary or District Collector.
                </p>
              </div>
              <div style={{ padding: '1.25rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontWeight: 700, color: '#0f2942', marginBottom: '0.5rem' }}>Startup CIN / LLPIN Validation</h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
                  Ensure your corporate incorporation number precisely matches MCA master records. If a recent name change occurred, provide the fresh Certificate of Incorporation issued by ROC.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: VERIFICATION SUPPORT */}
        {activeTab === 'verification' && (
          <div className="card" style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f2942', marginBottom: '1rem' }}>
              Verification & Compliance Support
            </h2>
            <div className="notice-box" style={{ marginBottom: '1.5rem' }}>
              <ShieldCheck size={20} color="#1d70b8" />
              <div style={{ fontSize: '0.85rem', color: '#0f3d68' }}>
                If your status indicates <strong>"Additional Verification Required"</strong>, our desk will contact you within 24 hours with the specific address or documentation discrepancy requiring resolution.
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6' }}>
              Common resolution pathways include uploading a physical utility bill consistent with your GST principal place of business, or submitting designated partner DPIN authentications.
            </p>
          </div>
        )}

        {/* TAB 4: APPLICATION SUPPORT */}
        {activeTab === 'application' && (
          <div className="card" style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f2942', marginBottom: '1rem' }}>
              Pilot Proposal & Application Support
            </h2>
            <p style={{ color: '#475569', marginBottom: '1.5rem' }}>
              Assistance with proposal submission, capability validation checks, and work breakdown structures.
            </p>
            <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontWeight: 700, color: '#0f2942', marginBottom: '0.25rem' }}>Proposal Submission Checklist:</div>
              <ul style={{ listStyle: 'inside disc', fontSize: '0.875rem', color: '#475569', lineHeight: '1.6' }}>
                <li>Confirm 100% mandatory capability match on the Technical Capability Check page</li>
                <li>Ensure pilot budget does not exceed the published pilot ceiling (e.g. ₹5,00,000)</li>
                <li>Submit clear 60-day milestone execution timeline with test sandbox requirements</li>
              </ul>
            </div>
          </div>
        )}

        {/* TAB 5: PAYMENT SUPPORT */}
        {activeTab === 'payment' && (
          <div className="card" style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f2942', marginBottom: '1rem' }}>
              Milestone Payment & Treasury Settlement Support
            </h2>
            <p style={{ color: '#475569', marginBottom: '1.5rem' }}>
              Queries regarding 20%-30%-30%-20% tranche disbursements, electronic treasury advice generation, and invoice tracking.
            </p>
            <div style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6' }}>
              All fund releases require two-party authorization: sign-off by the departmental Executive Engineer and treasury clearance by the state accounts officer. Check the Milestone Payments page for live transaction reference numbers.
            </div>
          </div>
        )}

        {/* CONTACT DESK FORM (Available on all tabs or when Contact selected) */}
        <div className="card">
          <div className="card-header">
            <div>
              <h3 className="card-title">Contact Support & Grievance Desk</h3>
              <p className="card-subtitle">Submit formal inquiries or technical assistance requests</p>
            </div>
            <span className="badge badge-info">24-48 Hr Response SLA</span>
          </div>

          {ticketSubmitted ? (
            <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#f0fdf4', borderRadius: '8px', border: '1px solid #86efac' }}>
              <CheckCircle2 size={36} color="#16a34a" style={{ margin: '0 auto 0.5rem auto' }} />
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#166534', marginBottom: '0.5rem' }}>Support Ticket Registered</h4>
              <p style={{ fontSize: '0.9rem', color: '#15803d' }}>
                Your inquiry has been assigned ticket ID <strong>TKT-MH-2026-9981</strong>. An administrative desk officer will respond to your registered email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleTicketSubmit}>
              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="ticketName">Full Name <span className="required">*</span></label>
                  <input
                    type="text"
                    id="ticketName"
                    className="form-control"
                    value={ticketData.name}
                    onChange={(e) => setTicketData({ ...ticketData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="ticketEmail">Official Email <span className="required">*</span></label>
                  <input
                    type="email"
                    id="ticketEmail"
                    className="form-control"
                    value={ticketData.email}
                    onChange={(e) => setTicketData({ ...ticketData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="ticketCategory">Inquiry Category <span className="required">*</span></label>
                  <select
                    id="ticketCategory"
                    className="form-control"
                    value={ticketData.category}
                    onChange={(e) => setTicketData({ ...ticketData, category: e.target.value })}
                  >
                    <option value="Registration Support">Registration Support</option>
                    <option value="Verification Support">Verification Support</option>
                    <option value="Application Support">Application Support</option>
                    <option value="Payment Support">Payment Support</option>
                    <option value="Other">Other Operational Inquiries</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="ticketSubject">Subject / Reference ID <span className="required">*</span></label>
                  <input
                    type="text"
                    id="ticketSubject"
                    className="form-control"
                    value={ticketData.subject}
                    onChange={(e) => setTicketData({ ...ticketData, subject: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="ticketMessage">Detailed Inconvenience or Support Request <span className="required">*</span></label>
                <textarea
                  id="ticketMessage"
                  className="form-control"
                  rows={4}
                  value={ticketData.message}
                  onChange={(e) => setTicketData({ ...ticketData, message: e.target.value })}
                  required
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', color: '#475569' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Phone size={14} color="#1d70b8" /> +91 (022) 2202 4589
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Mail size={14} color="#1d70b8" /> helpdesk@nirman.gov.in
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  <Send size={14} /> Submit Support Inquiry
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
