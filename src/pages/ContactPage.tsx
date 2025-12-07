import React from 'react';
import { Navigation } from '../components/Navigation';
import { useScreenSize } from '../hooks/useScreenSize';
import { ACTIVE_PALETTE } from '../styles/colorPalettes';

/**
 * ContactPage for Saara Lehtonen
 * Contact information, social media, and related links
 */

export const ContactPage: React.FC = () => {
  const { isMobile } = useScreenSize();
  const palette = ACTIVE_PALETTE;

  return (
    <>
      <Navigation />

      {/* Full Page Container with Background */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
          overflow: 'hidden'
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundImage: 'url(/saara/IMG_8559.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 42%',
            filter: 'brightness(0.5)',
            zIndex: -2
          }}
        />

        {/* Overlay gradient */}
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%)',
            zIndex: -1
          }}
        />

        {/* Page Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            paddingTop: '6rem',
            paddingBottom: '4rem'
          }}
        >
          {/* Title Section */}
          <div
            style={{
              textAlign: 'center',
              color: '#FFFFFF',
              padding: '2rem',
              marginBottom: '3rem'
            }}
          >
            <h1
              style={{
                fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                fontWeight: 300,
                letterSpacing: '0.1em',
                margin: 0,
                textTransform: 'uppercase',
                textShadow: '2px 4px 8px rgba(0,0,0,0.6)'
              }}
            >
              Yhteystiedot
            </h1>
          </div>

          {/* Content Container */}
          <div
            style={{
              maxWidth: '700px',
              margin: '0 auto',
              padding: isMobile ? '0 1rem' : '0 2rem',
              textAlign: 'center'
            }}
          >
            {/* Email Contact */}
            <div style={{ marginBottom: '3rem' }}>
              <p
                style={{
                  fontSize: '1.1rem',
                  color: '#FFFFFF',
                  margin: '0 0 0.5rem 0',
                  fontWeight: 500
                }}
              >
                Yhteydenotot:
              </p>
              <a
                href="mailto:saara@saaralehtonen.com"
                style={{
                  fontSize: '1.2rem',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'opacity 0.3s ease',
                  opacity: 0.9
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.9';
                }}
              >
                saara@saaralehtonen.com
              </a>
            </div>

            {/* Social Media */}
            <div style={{ marginBottom: '3rem' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '2rem',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/lehtonensaara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    transition: 'opacity 0.3s ease',
                    opacity: 0.9
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.9';
                  }}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.971h-1.514c-1.491 0-1.955.93-1.955 1.886v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" fill="white"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/lehtonensaara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    transition: 'opacity 0.3s ease',
                    opacity: 0.9
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.9';
                  }}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="white"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/channel/UC35YTBmG7axNB5g9hO9bSiw"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    transition: 'opacity 0.3s ease',
                    opacity: 0.9
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.9';
                  }}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="white"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  alignItems: 'center'
                }}
              >
                <a
                  href="https://www.wasateater.fi"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '1.05rem',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'opacity 0.3s ease',
                    opacity: 0.9
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.9';
                  }}
                >
                  www.wasateater.fi
                </a>

                <a
                  href="https://www.viikinsaarenkesateatteri.fi"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '1.05rem',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'opacity 0.3s ease',
                    opacity: 0.9
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.9';
                  }}
                >
                  www.viikinsaarenkesateatteri.fi
                </a>

                <a
                  href="https://www.nayttelijaliitto.fi"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '1.05rem',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'opacity 0.3s ease',
                    opacity: 0.9
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.9';
                  }}
                >
                  www.nayttelijaliitto.fi
                </a>

                <a
                  href="https://www.helsinginfreet.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '1.05rem',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'opacity 0.3s ease',
                    opacity: 0.9
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.9';
                  }}
                >
                  www.helsinginfreet.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
