import React from 'react';
import { Building2, ShieldCheck, ExternalLink, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import GovEmblem from './GovEmblem';

export default function Footer({ setCurrentRoute, isLoggedIn, currentUserRole }) {
  const isGovOrStartup = isLoggedIn && (currentUserRole === 'government' || currentUserRole === 'startup' || currentUserRole === 'admin');

  const handleNav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="gov-footer">
      <div className="container">
        <div className="gov-footer-grid">
          {/* Column 1: Platform Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <GovEmblem size={38} />
              <div>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                  Nirman
                </span>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Government Innovation Procurement Portal
                </div>
              </div>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              A structured digital platform that helps government organisations identify relevant startups, verify organisational information, assess technical capabilities, conduct pilot projects and monitor implementation.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={14} style={{ color: '#38bdf8' }} />
                <span>State Innovation Cell & Public Procurement Coordination Desk, Mantralaya, Mumbai</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={14} style={{ color: '#38bdf8' }} />
                <span>support@nirman.gov.in (Demonstration Desk)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Core Platform Pages */}
          <div>
            <h4 className="gov-footer-title">Navigation</h4>
            <ul className="gov-footer-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); handleNav('home'); }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNav('about'); }}>About Platform</a></li>
              {isGovOrStartup && (
                <li><a href="#how-it-works" onClick={(e) => { e.preventDefault(); handleNav('how-it-works'); }}>How It Works (12 Steps)</a></li>
              )}
              <li><a href="#government" onClick={(e) => { e.preventDefault(); handleNav('government'); }}>For Government</a></li>
              <li><a href="#startups" onClick={(e) => { e.preventDefault(); handleNav('startups'); }}>For Startups & Enterprises</a></li>
              {isGovOrStartup && (
                <li><a href="#opportunities" onClick={(e) => { e.preventDefault(); handleNav('opportunities'); }}>Government Opportunities</a></li>
              )}
            </ul>
          </div>

          {/* Column 3: Platform Modules */}
          <div>
            <h4 className="gov-footer-title">Procurement Modules</h4>
            <ul className="gov-footer-links">
              <li><a href="#verification" onClick={(e) => { e.preventDefault(); handleNav('verification'); }}>Organisation Verification</a></li>
              <li><a href="#matching" onClick={(e) => { e.preventDefault(); handleNav('matching'); }}>Find Relevant Startups</a></li>
              <li><a href="#capability" onClick={(e) => { e.preventDefault(); handleNav('capability'); }}>Technical Capability Check</a></li>
              <li><a href="#pilot" onClick={(e) => { e.preventDefault(); handleNav('pilot'); }}>Pilot & Evaluation</a></li>
              <li><a href="#evaluation" onClick={(e) => { e.preventDefault(); handleNav('evaluation'); }}>KPI-Based Evaluation</a></li>
              <li><a href="#procurement" onClick={(e) => { e.preventDefault(); handleNav('procurement'); }}>Procurement & Contracts</a></li>
              <li><a href="#monitoring" onClick={(e) => { e.preventDefault(); handleNav('monitoring'); }}>Project Monitoring</a></li>
              <li><a href="#payments" onClick={(e) => { e.preventDefault(); handleNav('payments'); }}>Milestone Payments</a></li>
            </ul>
          </div>

          {/* Column 4: Compliance & Guidance */}
          <div>
            <h4 className="gov-footer-title">Resources & Help</h4>
            <ul className="gov-footer-links">
              <li><a href="#resources" onClick={(e) => { e.preventDefault(); handleNav('resources'); }}>Procurement Guides & Templates</a></li>
              <li><a href="#help" onClick={(e) => { e.preventDefault(); handleNav('help'); }}>Help Desk & FAQs</a></li>
              <li><a href="#register-government" onClick={(e) => { e.preventDefault(); handleNav('register-government'); }}>Government Registration</a></li>
              <li><a href="#register-startup" onClick={(e) => { e.preventDefault(); handleNav('register-startup'); }}>Startup Registration</a></li>
              <li><a href="#login" onClick={(e) => { e.preventDefault(); handleNav('login'); }}>Role-Based Portal Access</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '8px',
          padding: '1rem',
          marginBottom: '2rem',
          fontSize: '0.8rem',
          lineHeight: '1.6',
          color: '#94a3b8'
        }}>
          <strong style={{ color: '#e2e8f0' }}>Administrative & Legal Notice: </strong>
          Nirman operates as an institutional platform connecting verified public sector bodies with verified technology enterprises. Automated checks identify inconsistencies and potential duplicate records; final verification and procurement contract decisions are strictly subject to authoritative government records, General Financial Rules (GFR), and authorised department reviews.
        </div>

        {/* Bottom Bar */}
        <div className="gov-footer-bottom">
          <div>
            © {new Date().getFullYear()} Nirman Portal. Designed in conformance with National e-Governance and Public Procurement Standards.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Security Audited (ISO 27001)</span>
            <span>Data Privacy Compliant</span>
            <span>Role-Based Encryption in Transit</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
