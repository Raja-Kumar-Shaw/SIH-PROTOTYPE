import React, { useState } from 'react';
import { 
  Building2, 
  Search, 
  Filter, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Cpu, 
  ArrowRight, 
  SlidersHorizontal, 
  Tag, 
  CheckCircle2,
  Clock,
  Layers
} from 'lucide-react';
import { INITIAL_OPPORTUNITIES, MAHARASHTRA_DEPARTMENTS, DOMAINS } from '../data/mockData';

export default function OpportunitiesPage({ setCurrentRoute, setSelectedOpportunityId }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [viewMode, setViewMode] = useState('cards'); // 'cards' or 'table'

  const handleNav = (route, oppId = null) => {
    if (oppId) setSelectedOpportunityId(oppId);
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredOpportunities = INITIAL_OPPORTUNITIES.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          opp.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          opp.requiredTechnology.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'All' || opp.department === selectedDept;
    const matchesDomain = selectedDomain === 'All' || opp.domain === selectedDomain;
    const matchesStatus = selectedStatus === 'All' || opp.status === selectedStatus;

    return matchesSearch && matchesDept && matchesDomain && matchesStatus;
  });

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-pre">
            <Building2 size={16} /> Open Public Challenges
          </div>
          <h1 className="page-header-title">Government Opportunities</h1>
          <p className="page-header-desc">
            Explore verified technological problem statements published by Maharashtra state departments and municipal corporations with funded pilot allocations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ paddingBottom: '5rem' }}>
        
        {/* Search & Filter Bar */}
        <div className="card" style={{ marginBottom: '2rem', padding: '1.5rem' }}>
          
          {/* Search Input */}
          <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
            <Search size={18} color="#64748b" style={{ position: 'absolute', left: '14px', top: '14px' }} />
            <input
              type="text"
              className="form-control"
              style={{ paddingLeft: '2.5rem', fontSize: '1rem', height: '46px' }}
              placeholder="Search government requirements by keyword, technology, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filters Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            
            <div>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                Department
              </label>
              <select
                className="form-control"
                style={{ fontSize: '0.85rem' }}
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
              >
                <option value="All">All Departments</option>
                {MAHARASHTRA_DEPARTMENTS.map(d => (
                  <option key={d.id} value={d.name}>{d.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                Domain
              </label>
              <select
                className="form-control"
                style={{ fontSize: '0.85rem' }}
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
              >
                <option value="All">All Domains</option>
                {DOMAINS.map(dm => (
                  <option key={dm} value={dm}>{dm}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                Status
              </label>
              <select
                className="form-control"
                style={{ fontSize: '0.85rem' }}
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="All">All Statuses</option>
                <option value="Active">Active</option>
                <option value="In Pilot">In Pilot</option>
                <option value="Closed">Closed</option>
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '0.5rem' }}>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDept('All');
                  setSelectedDomain('All');
                  setSelectedStatus('All');
                }}
                className="btn btn-outline"
                style={{ width: '100%', fontSize: '0.85rem' }}
              >
                Reset Filters
              </button>
              <div style={{ display: 'flex', border: '1px solid #cbd5e1', borderRadius: '6px', overflow: 'hidden' }}>
                <button
                  onClick={() => setViewMode('cards')}
                  style={{
                    padding: '0.5rem 0.75rem',
                    background: viewMode === 'cards' ? '#0f3d68' : '#ffffff',
                    color: viewMode === 'cards' ? '#ffffff' : '#64748b',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}
                >
                  Cards
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  style={{
                    padding: '0.5rem 0.75rem',
                    background: viewMode === 'table' ? '#0f3d68' : '#ffffff',
                    color: viewMode === 'table' ? '#ffffff' : '#64748b',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}
                >
                  Table
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Results Counter */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '0.9rem', color: '#475569' }}>
            Showing <strong>{filteredOpportunities.length}</strong> government innovation requirements
          </div>
          <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
            All requirements feature structured 60-day funded pilot phases
          </div>
        </div>

        {/* View Mode: Cards */}
        {viewMode === 'cards' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {filteredOpportunities.map(opp => (
              <div key={opp.id} className="card" style={{ padding: '2rem' }}>
                
                {/* Top Meta Line */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.35rem' }}>
                      <span className="badge badge-info">{opp.domain}</span>
                      <span className="badge badge-neutral">{opp.id}</span>
                      <span className="badge badge-verified">
                        <CheckCircle2 size={12} /> {opp.status}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f2942', marginTop: '0.25rem' }}>
                      {opp.title}
                    </h3>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Pilot Value</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#16a34a' }}>{opp.pilotValue}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Full: {opp.estimatedProjectValue}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.85rem', color: '#475569', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Building2 size={15} color="#1d70b8" />
                    <strong>{opp.department}</strong>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <MapPin size={15} color="#1d70b8" />
                    <span>{opp.location}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Clock size={15} color="#1d70b8" />
                    <span>Pilot Duration: <strong>{opp.pilotDuration}</strong></span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Calendar size={15} color="#d97706" />
                    <span>Deadline: <strong>{opp.applicationDeadline}</strong></span>
                  </div>
                </div>

                <p style={{ fontSize: '0.925rem', color: '#334155', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  {opp.summary}
                </p>

                {/* Tech Chips */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Required Technologies:</span>
                  {opp.requiredTechnology.split(',').map((tech, i) => (
                    <span key={i} style={{
                      backgroundColor: '#f1f5f9',
                      color: '#0f3d68',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      border: '1px solid #cbd5e1'
                    }}>
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                {/* Footer Buttons */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                    Mandatory: Verified organisation status & 100% technical capability match
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button 
                      onClick={() => handleNav('capability')} 
                      className="btn btn-sm btn-secondary"
                    >
                      <Cpu size={14} /> Check Capability
                    </button>
                    <button 
                      onClick={() => handleNav('opportunity-detail', opp.id)} 
                      className="btn btn-sm btn-primary"
                    >
                      View Details & Submit Proposal <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* View Mode: Table */
          <div className="table-responsive">
            <table className="gov-table">
              <thead>
                <tr>
                  <th>Requirement Title & ID</th>
                  <th>Department & Location</th>
                  <th>Domain</th>
                  <th>Pilot Value / Total</th>
                  <th>Deadline</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredOpportunities.map(opp => (
                  <tr key={opp.id}>
                    <td>
                      <div style={{ fontWeight: 700, color: '#0f2942', marginBottom: '0.2rem' }}>{opp.title}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>ID: {opp.id}</div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{opp.department}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{opp.location}</div>
                    </td>
                    <td>
                      <span className="badge badge-info">{opp.domain}</span>
                    </td>
                    <td>
                      <div style={{ fontWeight: 700, color: '#16a34a' }}>{opp.pilotValue}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Full: {opp.estimatedProjectValue}</div>
                    </td>
                    <td>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{opp.applicationDeadline}</div>
                    </td>
                    <td>
                      <button 
                        onClick={() => handleNav('opportunity-detail', opp.id)} 
                        className="btn btn-sm btn-primary"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}
