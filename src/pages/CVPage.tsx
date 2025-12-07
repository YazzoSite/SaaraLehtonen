import React from 'react';
import { Navigation } from '../components/Navigation';
import { useScreenSize } from '../hooks/useScreenSize';

/**
 * CVPage for Saara Lehtonen
 * Placeholder page - content to be added
 */

export const CVPage: React.FC = () => {
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
              CV
            </h1>
          </div>

          {/* Content Container */}
          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              padding: isMobile ? '0 1rem' : '0 2rem',
              textAlign: 'center'
            }}
          >
            {/* Download Button */}
            <a
              href="/cv.txt"
              download
              style={{
                display: 'inline-block',
                marginBottom: '3rem',
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
              ⬇ Lataa CV
            </a>

            {/* Lorem Ipsum Content */}
            <div
              style={{
                textAlign: 'left',
                color: '#FFFFFF',
                lineHeight: '1.8'
              }}
            >
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>
                Koulutus
              </h2>
              <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>
                Työkokemus
              </h2>
              <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>

              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>
                Taidot
              </h2>
              <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>

              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>
                Saavutukset
              </h2>
              <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
