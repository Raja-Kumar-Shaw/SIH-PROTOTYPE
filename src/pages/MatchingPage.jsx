import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Cpu, 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  SlidersHorizontal, 
  ExternalLink,
  Target,
  Sparkles,
  Info,
  X,
  Tag,
  Check,
  Award
} from 'lucide-react';
import { INITIAL_OPPORTUNITIES, VERIFIED_STARTUPS } from '../data/mockData';

const QUICK_REQUIREMENT_PRESETS = [
  { label: '💧 IoT Acoustic Leak Sensors', query: 'IoT acoustic leak sensors SCADA' },
  { label: '♻️ AI Conveyor Waste Sorting', query: 'Computer vision edge sorting municipal waste' },
  { label: '🏥 Tele-ICU Vital Streaming', query: 'Tele-ICU HL7 FHIR vital telemetry' },
  { label: '🛰️ Drone & Satellite GIS', query: 'Drone survey photogrammetry satellite SAR' },
  { label: '🚦 Traffic Signal Radar & NTCIP', query: 'Traffic radar NTCIP signal priority controller' }
];

export default function MatchingPage({ setCurrentRoute, setSelectedOpportunityId }) {
  const [selectedOppId, setSelectedOppId] = useState('OPP-MH-2026-001');
  const [searchQuery, setSearchQuery] = useState('');

  const selectedOpp = INITIAL_OPPORTUNITIES.find(o => o.id === selectedOppId) || INITIAL_OPPORTUNITIES[0];

  const handleNav = (route, oppId = null) => {
    if (oppId) setSelectedOpportunityId(oppId);
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Evaluate startup match dynamically when search query is typed, or use published opportunity score
  const matchedStartups = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      // Standard published requirement match
      return VERIFIED_STARTUPS.map(startup => {
        const matchData = startup.matchScores[selectedOppId] || {
          score: 72,
          recommendation: "Eligible for Consideration",
          matchingPoints: [
            "Verified legal entity in good standing with MCA & GSTN",
            "Domain knowledge in adjacent technical sectors",
            "Active ISO certification filed with portal"
          ]
        };

        return {
          startup,
          score: matchData.score,
          recommendation: matchData.recommendation,
          matchingPoints: matchData.matchingPoints,
          matchedKeywords: []
        };
      }).sort((a, b) => b.score - a.score);
    }

    // Dynamic search mode: split search query into keywords
    const terms = query.split(/[\s,+/]+/).filter(t => t.length > 1);

    const scored = VERIFIED_STARTUPS.map(startup => {
      const matchedKeywords = [];
      let matchPointsCount = 0;

      // Check tech array
      startup.technologies.forEach(tech => {
        if (terms.some(t => tech.toLowerCase().includes(t))) {
          matchedKeywords.push(tech);
          matchPointsCount += 3;
        }
      });

      // Check capabilities
      Object.keys(startup.capabilities).forEach(cap => {
        if (startup.capabilities[cap]) {
          if (terms.some(t => cap.toLowerCase().includes(t))) {
            matchedKeywords.push(cap);
            matchPointsCount += 3;
          }
        }
      });

      // Check domain
      if (terms.some(t => startup.domain.toLowerCase().includes(t))) {
        matchedKeywords.push(`${startup.domain} Domain`);
        matchPointsCount += 2;
      }

      // Check name / description
      if (terms.some(t => startup.name.toLowerCase().includes(t))) {
        matchPointsCount += 2;
      }

      // Check previous projects
      startup.previousProjects?.forEach(proj => {
        if (terms.some(t => proj.project.toLowerCase().includes(t) || proj.outcome.toLowerCase().includes(t))) {
          matchedKeywords.push(`Prior Project: ${proj.project}`);
          matchPointsCount += 2;
        }
      });

      // Check certifications
      startup.certifications.forEach(cert => {
        if (terms.some(t => cert.toLowerCase().includes(t))) {
          matchedKeywords.push(cert);
          matchPointsCount += 1;
        }
      });

      // Calculate dynamic score based on keyword match depth
      let score = 65;
      if (matchPointsCount >= 6) {
        score = Math.min(98, 86 + Math.min(12, matchPointsCount));
      } else if (matchPointsCount >= 3) {
        score = 82;
      } else if (matchPointsCount > 0) {
        score = 74;
      } else {
        score = 60;
      }

      let recommendation = "Eligible for Consideration";
      if (score >= 90) recommendation = "Strong Technological Alignment";
      else if (score >= 80) recommendation = "Recommended for Review";

      // Build custom matching points based on matched items
      const dynamicPoints = [];
      if (matchedKeywords.length > 0) {
        dynamicPoints.push(`Matches specified requirement: ${matchedKeywords.slice(0, 3).join(', ')}`);
      }
      dynamicPoints.push(`Verified operational capacity: ${startup.implementationCapacity}`);
      if (startup.previousProjects && startup.previousProjects[0]) {
        dynamicPoints.push(`Proven delivery track record: "${startup.previousProjects[0].project}" (${startup.previousProjects[0].outcome})`);
      }
      dynamicPoints.push(`Statutory compliance verified: ${startup.certifications.join(', ')}`);

      return {
        startup,
        score,
        recommendation,
        matchingPoints: dynamicPoints,
        matchedKeywords: Array.from(new Set(matchedKeywords))
      };
    });

    // Return all startups that matched or, if none matched terms, return all sorted by score
    const hasAnyMatch = scored.some(s => s.matchedKeywords.length > 0);
    if (hasAnyMatch) {
      return scored.filter(s => s.matchedKeywords.length > 0).sort((a, b) => b.score - a.score);
    }
    return scored.sort((a, b) => b.score - a.score);
  }, [searchQuery, selectedOppId]);

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-pre">
            <Cpu size={16} /> Assisted Discovery Engine
          </div>
          <h1 className="page-header-title">Find Relevant Startups</h1>
          <p className="page-header-desc">
            Multi-dimensional capability matching aligning published department requirements with verified startup technical competencies, proven experience, and compliance certifications.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ paddingBottom: '5rem' }}>
        
        {/* Responsible AI Disclaimer Banner */}
        <div className="notice-box" style={{ marginBottom: '2rem' }}>
          <Info size={24} color="#1d70b8" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div className="notice-title">Advisory Assistance Standard</div>
            <div className="notice-text">
              Algorithmic capability scores identify relevant technological alignment and generate recommendations for review. The platform does not select winners or make procurement awards. Final evaluation and selection remain strictly with the designated government technical committee.
            </div>
          </div>
        </div>

        {/* =========================================================================
            TYPING SEARCH BAR OPTION FOR GOVERNMENT REQUIREMENTS
            ========================================================================= */}
        <div className="card" style={{ marginBottom: '1.5rem', backgroundColor: '#f8fafc', border: '2px solid #1d70b8' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: 800, color: '#0f2942', textTransform: 'uppercase', letterSpacing: '0.025em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Search size={18} color="#1d70b8" /> Search Startups by Typing Requirements & Technical Specs:
            </label>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="badge badge-neutral"
                style={{ cursor: 'pointer', border: 'none', fontSize: '0.75rem', padding: '0.3rem 0.6rem' }}
              >
                Clear Typed Filter (✕)
              </button>
            )}
          </div>

          {/* Typing Input */}
          <div style={{ position: 'relative', width: '100%', marginBottom: '1rem' }}>
            <input
              type="text"
              className="form-control"
              style={{
                fontSize: '1rem',
                padding: '0.9rem 3rem 0.9rem 2.85rem',
                borderRadius: '8px',
                border: '2px solid #94a3b8',
                width: '100%',
                boxSizing: 'border-box',
                boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                fontWeight: 500,
                color: '#0f2942'
              }}
              placeholder="Type requirements (e.g. IoT acoustic leak sensors, drone mapping, edge AI vision, tele-ICU FHIR, SCADA telemetry)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search size={18} color="#1d70b8" style={{ position: 'absolute', left: '0.95rem', top: '50%', transform: 'translateY(-50%)' }} />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '0.95rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: '#e2e8f0',
                  border: 'none',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                  color: '#475569',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Suggested Quick Requirement Chips */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b' }}>Quick Requirement Suggestions:</span>
            {QUICK_REQUIREMENT_PRESETS.map(chip => (
              <button
                key={chip.label}
                onClick={() => setSearchQuery(chip.query)}
                className="badge"
                style={{
                  cursor: 'pointer',
                  backgroundColor: searchQuery === chip.query ? '#0f3d68' : '#ffffff',
                  color: searchQuery === chip.query ? '#ffffff' : '#334155',
                  border: '1px solid #cbd5e1',
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.78rem',
                  borderRadius: '9999px',
                  transition: 'all 0.15s ease'
                }}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>

        {/* Opportunity Selector Dropdown (Companion Option) */}
        <div className="card" style={{ marginBottom: '2.5rem', backgroundColor: '#f8fafc' }}>
          <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
            Or Select Published Government Requirement to Evaluate Matching:
          </label>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <select
              className="form-control"
              style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f2942', maxWidth: '720px' }}
              value={selectedOppId}
              onChange={(e) => {
                setSelectedOppId(e.target.value);
                setSearchQuery('');
              }}
            >
              {INITIAL_OPPORTUNITIES.map(opp => (
                <option key={opp.id} value={opp.id}>
                  {opp.id} - {opp.title} ({opp.department})
                </option>
              ))}
            </select>
            <button 
              onClick={() => handleNav('opportunity-detail', selectedOpp.id)} 
              className="btn btn-sm btn-outline"
            >
              View Requirement Details <ExternalLink size={14} />
            </button>
          </div>

          <div style={{ marginTop: '1rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.85rem', color: '#475569' }}>
            <span>Domain: <strong>{selectedOpp.domain}</strong></span>
            <span>Location: <strong>{selectedOpp.location}</strong></span>
            <span>Pilot Budget: <strong style={{ color: '#16a34a' }}>{selectedOpp.pilotValue}</strong></span>
            <span>Full Value: <strong>{selectedOpp.estimatedProjectValue}</strong></span>
          </div>
        </div>

        {/* Active Filter Status Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f2942', margin: 0 }}>
            Verified Startups Recommended for Department Review
          </h2>
          {searchQuery ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="badge badge-info" style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}>
                Filtered by typed requirement: "<strong>{searchQuery}</strong>" ({matchedStartups.length} found)
              </span>
              <button 
                onClick={() => setSearchQuery('')}
                className="btn btn-sm btn-outline"
                style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}
              >
                Reset
              </button>
            </div>
          ) : (
            <span className="badge badge-neutral" style={{ fontSize: '0.8rem' }}>
              Showing {matchedStartups.length} verified startups for {selectedOpp.id}
            </span>
          )}
        </div>

        {/* Matched Startups List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {matchedStartups.map(({ startup, score, recommendation, matchingPoints, matchedKeywords }) => {
            return (
              <div key={startup.id} className="card" style={{ padding: '2rem' }}>
                
                {/* Header with Match Percentage Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                      <span className="badge badge-verified">
                        <CheckCircle2 size={12} /> {startup.verificationStatus}
                      </span>
                      <span className="badge badge-info">{startup.domain}</span>
                      <span className="badge badge-neutral">{startup.stage}</span>
                    </div>

                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f2942', marginTop: '0.25rem' }}>
                      {startup.name}
                    </h3>
                    <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                      CIN/LLPIN: <strong>{startup.registrationNumber}</strong> | GSTIN: <strong>{startup.gstin}</strong> | Location: <strong>{startup.district}, {startup.state}</strong>
                    </div>
                  </div>

                  {/* Score Box */}
                  <div style={{
                    backgroundColor: score >= 90 ? '#f0fdf4' : '#eff6ff',
                    border: score >= 90 ? '1.5px solid #86efac' : '1.5px solid #bfdbfe',
                    borderRadius: '12px',
                    padding: '1rem 1.5rem',
                    textAlign: 'center',
                    minWidth: '170px'
                  }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: score >= 90 ? '#166534' : '#1e40af', textTransform: 'uppercase' }}>
                      Capability Match
                    </div>
                    <div style={{ fontSize: '2.25rem', fontWeight: 800, color: score >= 90 ? '#15803d' : '#1d4ed8', lineHeight: 1.1 }}>
                      {score}%
                    </div>
                    <span className={score >= 90 ? 'badge badge-verified' : 'badge badge-info'} style={{ marginTop: '0.25rem' }}>
                      {recommendation}
                    </span>
                  </div>
                </div>

                {/* Highlighted Matched Keywords if searched */}
                {matchedKeywords && matchedKeywords.length > 0 && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem', backgroundColor: '#eff6ff', padding: '0.6rem 1rem', borderRadius: '8px', border: '1px solid #dbeafe' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1e40af' }}>Directly Matched Keywords:</span>
                    {matchedKeywords.map((kw, kwIdx) => (
                      <span key={kwIdx} className="badge badge-primary" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
                        <Check size={11} style={{ marginRight: '3px' }} /> {kw}
                      </span>
                    ))}
                  </div>
                )}

                {/* Match Explanation Points */}
                <div style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '1.25rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f2942', marginBottom: '0.75rem' }}>
                    Transparent Match Analysis Points:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#334155' }}>
                    {matchingPoints.map((point, pIdx) => (
                      <li key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0 }} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Team & Previous Deployments */}
                <div className="grid-2" style={{ marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                  <div>
                    <strong style={{ color: '#0f2942' }}>Technical Infrastructure & Capacity:</strong>
                    <div style={{ color: '#475569', marginTop: '0.25rem' }}>
                      {startup.implementationCapacity} ({startup.technicalEmployees} technical engineers)
                    </div>
                    <div style={{ color: '#64748b', fontSize: '0.8rem', marginTop: '0.25rem' }}>
                      Certifications: {startup.certifications.join(', ')}
                    </div>
                  </div>

                  <div>
                    <strong style={{ color: '#0f2942' }}>Verified Prior Reference:</strong>
                    {startup.previousProjects && startup.previousProjects[0] ? (
                      <div style={{ color: '#475569', marginTop: '0.25rem' }}>
                        "{startup.previousProjects[0].project}" ({startup.previousProjects[0].client}) — {startup.previousProjects[0].outcome}
                      </div>
                    ) : (
                      <div style={{ color: '#64748b' }}>Reference details on file</div>
                    )}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                    Officer Review Directive: Invite qualified startup to submit technical pilot demonstration
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button 
                      onClick={() => handleNav('capability')} 
                      className="btn btn-sm btn-outline"
                    >
                      <Cpu size={14} /> Full Capability Audit
                    </button>
                    <button 
                      onClick={() => handleNav('pilot')} 
                      className="btn btn-sm btn-primary"
                    >
                      Invite for Pilot Review <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
