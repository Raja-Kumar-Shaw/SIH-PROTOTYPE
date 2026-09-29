import React from 'react';
import { 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  Layers, 
  Award, 
  Globe, 
  Sparkles,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import GovEmblem from './GovEmblem';

export default function NirmanSummitPoster({ handleNav }) {
  return (
    <div style={{
      margin: '0 auto',
      width: '100%',
      maxWidth: '1240px',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 20px 45px -10px rgba(15, 35, 65, 0.18), 0 8px 16px rgba(0, 0, 0, 0.06)',
      border: '1.5px solid #fed7aa',
      backgroundColor: '#ffffff',
      position: 'relative'
    }}>
      {/* Top Civic Tricolor Stripe */}
      <div style={{
        height: '5px',
        width: '100%',
        background: 'linear-gradient(90deg, #ff9933 0%, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%, #138808 100%)'
      }} />

      {/* Main Poster Graphic Hero Banner */}
      <div style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#0a1d37',
        overflow: 'hidden'
      }}>
        {/* Summit Banner Artwork */}
        <img 
          src="/nirman-summit-banner.jpg" 
          alt="Nirman Innovation Summit 2026: From Startup to Public Procurement" 
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            maxHeight: '480px',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />

        {/* Floating Quick Action Overlay Badges */}
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap'
        }}>
          <span style={{
            backgroundColor: 'rgba(15, 35, 65, 0.85)',
            backdropFilter: 'blur(8px)',
            color: '#ffd700',
            border: '1px solid rgba(255, 215, 0, 0.4)',
            padding: '0.35rem 0.85rem',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}>
            <Sparkles size={13} color="#ffd700" />
            NATIONAL PROCUREMENT COHORT 2026
          </span>
          <span style={{
            backgroundColor: 'rgba(22, 101, 52, 0.85)',
            backdropFilter: 'blur(8px)',
            color: '#ffffff',
            border: '1px solid rgba(134, 239, 172, 0.4)',
            padding: '0.35rem 0.85rem',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}>
            <ShieldCheck size={13} color="#86efac" />
            DPIIT & GFR 2017 ALIGNED
          </span>
        </div>
      </div>

      {/* 4 Core Pillars matching Bharat Summit Poster Layout */}
      <div style={{
        padding: '1.75rem 2rem 1.25rem 2rem',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e2e8f0'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem'
        }}>
          
          {/* Pillar 1: Investment & Pilot Grants */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.85rem',
            padding: '1rem',
            borderRadius: '12px',
            backgroundColor: '#f0fdf4',
            border: '1px solid #bbf7d0',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: '#16a34a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              flexShrink: 0,
              boxShadow: '0 4px 10px rgba(22, 163, 74, 0.25)'
            }}>
              <Award size={22} />
            </div>
            <div>
              <div style={{
                fontSize: '0.825rem',
                fontWeight: 800,
                color: '#14532d',
                letterSpacing: '0.02em',
                textTransform: 'uppercase'
              }}>
                Funded Pilot Sandboxes
              </div>
              <p style={{
                fontSize: '0.785rem',
                color: '#166534',
                lineHeight: '1.45',
                marginTop: '0.25rem',
                margin: 0
              }}>
                ₹5L to ₹50L sandbox allocations to empirically validate innovative tech in 60-day cycles.
              </p>
            </div>
          </div>

          {/* Pillar 2: Strategic Government Networking */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.85rem',
            padding: '1rem',
            borderRadius: '12px',
            backgroundColor: '#fff7ed',
            border: '1px solid #fed7aa',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: '#ea580c',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              flexShrink: 0,
              boxShadow: '0 4px 10px rgba(234, 88, 12, 0.25)'
            }}>
              <Users size={22} />
            </div>
            <div>
              <div style={{
                fontSize: '0.825rem',
                fontWeight: 800,
                color: '#7c2d12',
                letterSpacing: '0.02em',
                textTransform: 'uppercase'
              }}>
                Department Access
              </div>
              <p style={{
                fontSize: '0.785rem',
                color: '#9a3412',
                lineHeight: '1.45',
                marginTop: '0.25rem',
                margin: 0
              }}>
                Direct procurement connect with state departments, municipal bodies, and smart cities.
              </p>
            </div>
          </div>

          {/* Pillar 3: Capability & Fair Evaluation */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.85rem',
            padding: '1rem',
            borderRadius: '12px',
            backgroundColor: '#eff6ff',
            border: '1px solid #bfdbfe',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: '#2563eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              flexShrink: 0,
              boxShadow: '0 4px 10px rgba(37, 99, 235, 0.25)'
            }}>
              <TrendingUp size={22} />
            </div>
            <div>
              <div style={{
                fontSize: '0.825rem',
                fontWeight: 800,
                color: '#1e3a8a',
                letterSpacing: '0.02em',
                textTransform: 'uppercase'
              }}>
                Merit-Based Matching
              </div>
              <p style={{
                fontSize: '0.785rem',
                color: '#1e40af',
                lineHeight: '1.45',
                marginTop: '0.25rem',
                margin: 0
              }}>
                Automated capability checks removing multi-year turnover and prior-experience bias.
              </p>
            </div>
          </div>

          {/* Pillar 4: Milestone Escrow Payments */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.85rem',
            padding: '1rem',
            borderRadius: '12px',
            backgroundColor: '#faf5ff',
            border: '1px solid #e9d5ff',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: '#7c3aed',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              flexShrink: 0,
              boxShadow: '0 4px 10px rgba(124, 58, 237, 0.25)'
            }}>
              <Globe size={22} />
            </div>
            <div>
              <div style={{
                fontSize: '0.825rem',
                fontWeight: 800,
                color: '#4c1d95',
                letterSpacing: '0.02em',
                textTransform: 'uppercase'
              }}>
                Predictable Payments
              </div>
              <p style={{
                fontSize: '0.785rem',
                color: '#5b21b6',
                lineHeight: '1.45',
                marginTop: '0.25rem',
                margin: 0
              }}>
                Guaranteed 20%-30%-30%-20% tranche disbursements directly tied to verified deliverables.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Information & CTA Bar matching Summit Poster */}
      <div style={{
        background: 'linear-gradient(135deg, #091e38 0%, #0a2540 100%)',
        color: '#ffffff',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        borderTop: '2px solid #ea580c'
      }}>
        {/* Know More / CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => {
              const regSec = document.getElementById('registration-section');
              if (regSec) regSec.scrollIntoView({ behavior: 'smooth' });
              else handleNav('register-startup');
            }}
            style={{
              background: 'linear-gradient(90deg, #ea580c 0%, #f97316 100%)',
              color: '#ffffff',
              border: 'none',
              padding: '0.65rem 1.6rem',
              borderRadius: '9999px',
              fontWeight: 800,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 15px rgba(234, 88, 12, 0.4)',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(234, 88, 12, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(234, 88, 12, 0.4)';
            }}
          >
            Know More & Register <ArrowRight size={16} />
          </button>

          {/* Date info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#cbd5e1' }}>
            <Calendar size={15} style={{ color: '#38bdf8' }} />
            <span><strong>CYCLE:</strong> 2026-27 Active Procurement</span>
          </div>

          {/* Venue info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#cbd5e1' }}>
            <MapPin size={15} style={{ color: '#38bdf8' }} />
            <span><strong>NODAL:</strong> Mantralaya, Mumbai & New Delhi</span>
          </div>

          {/* Attendees */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#cbd5e1' }}>
            <Users size={15} style={{ color: '#38bdf8' }} />
            <span><strong>NETWORK:</strong> 142 Startups • 48 Depts</span>
          </div>
        </div>

        {/* Right authority & registration domain */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.8rem' }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '0.35rem 0.85rem',
            borderRadius: '6px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}>
            <span style={{ color: '#94a3b8' }}>REGISTER AT:</span>
            <strong style={{ color: '#38bdf8', letterSpacing: '0.03em' }}>nirman.gov.in</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
