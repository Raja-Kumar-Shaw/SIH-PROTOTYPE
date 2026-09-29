import React, { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  Rocket, 
  Layers, 
  CreditCard,
  Search,
  HelpCircle
} from 'lucide-react';

export default function ResourcesPage({ setCurrentRoute }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleNav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const guides = [
    {
      id: "reg-guide",
      category: "registration",
      title: "Organisation Registration Standard Operating Procedure",
      desc: "Step-by-step guidance for state departments and legal corporate entities to complete digital enrolment with verified PAN, GSTIN, and MCA records.",
      format: "PDF Document (1.4 MB)",
      readTime: "8 min read",
      route: "register-startup"
    },
    {
      id: "verif-guide",
      category: "verification",
      title: "Authoritative Cross-Reference Verification Manual",
      desc: "Detailed documentation of how the automated verification engine interfaces with official company registries to confirm active entity standing.",
      format: "PDF Document (2.1 MB)",
      readTime: "12 min read",
      route: "verification"
    },
    {
      id: "opp-guide",
      category: "opportunity",
      title: "Public Challenge Structuring Guidelines for Departments",
      desc: "Best practices for municipal and state officers to draft clear problem statements, quantitative baseline metrics, and realistic pilot boundaries.",
      format: "PDF Document (1.8 MB)",
      readTime: "10 min read",
      route: "opportunities"
    },
    {
      id: "pilot-guide",
      category: "pilot",
      title: "Staged Proof of Concept (PoC) Implementation Framework",
      desc: "Protocol for conducting low-risk 60-day sandbox pilot projects, establishing isolated test boundaries, and measuring baseline variances.",
      format: "PDF Document (3.2 MB)",
      readTime: "15 min read",
      route: "pilot"
    },
    {
      id: "procure-guide",
      category: "procurement",
      title: "General Financial Rules (GFR) Innovation Procurement Directive",
      desc: "Legal and procedural roadmap for transitioning validated pilot outcomes into formal procurement work orders and binding SLAs.",
      format: "PDF Document (4.5 MB)",
      readTime: "20 min read",
      route: "procurement"
    },
    {
      id: "pay-guide",
      category: "payment",
      title: "Milestone Tranche Disbursement & Platform Fee Protocol",
      desc: "Operational rules governing 20%-30%-30%-20% milestone fund releases, treasury direct debit mechanisms, and proposed platform service fee terms.",
      format: "PDF Document (1.6 MB)",
      readTime: "9 min read",
      route: "payments"
    }
  ];

  const filteredGuides = activeCategory === 'all' 
    ? guides 
    : guides.filter(g => g.category === activeCategory);

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-pre">
            <BookOpen size={16} /> Knowledge & Guidance Repository
          </div>
          <h1 className="page-header-title">Procurement Resources & Guides</h1>
          <p className="page-header-desc">
            Official operational manuals, regulatory compliance templates, step-by-step onboarding documentation, and procurement frameworks for public sector officers and innovators.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ paddingBottom: '5rem' }}>
        
        {/* Category Filters */}
        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem', marginBottom: '2rem' }}>
          {[
            { id: 'all', label: 'All Manuals' },
            { id: 'registration', label: 'Registration Guide' },
            { id: 'verification', label: 'Verification Guide' },
            { id: 'opportunity', label: 'Opportunity Guide' },
            { id: 'pilot', label: 'Pilot Guide' },
            { id: 'procurement', label: 'Procurement Guide' },
            { id: 'payment', label: 'Payment Guide' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                border: '1px solid',
                borderColor: activeCategory === cat.id ? '#0f3d68' : '#cbd5e1',
                backgroundColor: activeCategory === cat.id ? '#0f3d68' : '#ffffff',
                color: activeCategory === cat.id ? '#ffffff' : '#334155',
                fontWeight: activeCategory === cat.id ? 700 : 500,
                fontSize: '0.85rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Guides Grid */}
        <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '3.5rem' }}>
          {filteredGuides.map(guide => (
            <div key={guide.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="badge badge-info">{guide.format}</span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{guide.readTime}</span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f2942', marginBottom: '0.5rem' }}>
                  {guide.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {guide.desc}
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
                <button onClick={() => handleNav(guide.route)} className="btn btn-sm btn-outline">
                  Open Interactive Tool <ExternalLink size={14} />
                </button>
                <button onClick={() => alert(`Simulated Download: ${guide.title}`)} className="btn btn-sm btn-primary">
                  <Download size={14} /> Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Frequently Asked Questions Preview */}
        <div className="card">
          <div className="card-header">
            <div>
              <h3 className="card-title">Frequently Asked Questions</h3>
              <p className="card-subtitle">Quick answers to standard procurement and technical verification queries</p>
            </div>
            <button onClick={() => handleNav('help')} className="btn btn-sm btn-secondary">
              View All FAQs in Help Desk
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
              <div style={{ fontWeight: 700, color: '#0f2942', marginBottom: '0.25rem' }}>
                How does the platform ensure only verified legal entities participate?
              </div>
              <div style={{ fontSize: '0.875rem', color: '#475569', lineHeight: '1.6' }}>
                Every applicant undergoes automated cross-checking against official registries including the Ministry of Corporate Affairs (MCA) master data, Goods and Services Tax (GSTIN) databases, and PAN records. Any discrepancies are flagged for authorized officer review.
              </div>
            </div>

            <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
              <div style={{ fontWeight: 700, color: '#0f2942', marginBottom: '0.25rem' }}>
                Why is a staged pilot project mandatory before full contract award?
              </div>
              <div style={{ fontSize: '0.875rem', color: '#475569', lineHeight: '1.6' }}>
                Staged pilots (e.g. ₹5 Lakhs for 60 days) de-risk public funds. Government departments can measure real-world performance against pre-defined quantitative KPIs in a controlled sandbox before committing to full multi-crore public tenders.
              </div>
            </div>

            <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
              <div style={{ fontWeight: 700, color: '#0f2942', marginBottom: '0.25rem' }}>
                How are milestone payments disbursed to verified startups?
              </div>
              <div style={{ fontSize: '0.875rem', color: '#475569', lineHeight: '1.6' }}>
                Disbursements follow a strict 20%-30%-30%-20% schedule. Payments are released directly via government treasury and multi-bank settlement protocols only after the departmental project officer signs off on deliverable completion.
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
