import React from 'react';
import { Navigation } from '../components/Navigation';
import { useScreenSize } from '../hooks/useScreenSize';

/**
 * MediaPage for Saara Lehtonen
 * Placeholder page - content to be added
 */

export const MediaPage: React.FC = () => {
  const { isMobile } = useScreenSize();

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
              Media
            </h1>
          </div>

          {/* Content Container */}
          <div
            style={{
              maxWidth: '1000px',
              margin: '0 auto',
              padding: isMobile ? '0 1rem' : '0 2rem'
            }}
          >
            {/* Commercial Work Section */}
            <div style={{ marginBottom: '4rem' }}>
              <h2
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}
              >
                Mainokset
              </h2>
              {/* Elovena YouTube Video */}
              <div
                style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0,
                  overflow: 'hidden',
                  borderRadius: '8px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/EjO6EcuqlAM"
                  title="Elovena mainos"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none'
                  }}
                />
              </div>
              <p
                style={{
                  color: '#FFFFFF',
                  textAlign: 'center',
                  marginTop: '1rem',
                  opacity: 0.9
                }}
              >
                Elovena mainos
              </p>
            </div>

            {/* Voice Samples Section */}
            <div style={{ marginBottom: '4rem' }}>
              <h2
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}
              >
                Ääninäytteet
              </h2>
              <div style={{ textAlign: 'center' }}>
                <a
                  href="https://vild.fi/spiikkerihaku?query=Saara+Lehtonen"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '1rem 2.5rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    color: '#1a1a1a',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
                  }}
                >
                  Kuuntele ääninäytteet Vild.fi
                </a>
              </div>
            </div>

            {/* TV Appearances Section */}
            <div style={{ marginBottom: '4rem' }}>
              <h2
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}
              >
                TV-esiintymiset
              </h2>
              <div style={{ textAlign: 'center' }}>
                <a
                  href="https://www.ruutu.fi/video/2932661"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '1rem 2.5rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    color: '#1a1a1a',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
                  }}
                >
                  Voice of Finland 2017
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
