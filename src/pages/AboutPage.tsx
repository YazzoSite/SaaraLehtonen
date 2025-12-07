import React from 'react';
import { Navigation } from '../components/Navigation';
import { useScreenSize } from '../hooks/useScreenSize';
import { ACTIVE_PALETTE } from '../styles/colorPalettes';

/**
 * AboutPage for Saara Lehtonen
 * Bio page with rounded text box
 */

export const AboutPage: React.FC = () => {
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
              Saara Lehtonen
            </h1>
          </div>

          {/* Content Container */}
          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              padding: isMobile ? '0 1rem' : '0 2rem'
            }}
          >
            {/* Bio Text Box */}
            <div
              style={{
                backgroundColor: palette.colors.bgSecondary,
                borderRadius: '16px',
                padding: isMobile ? '2rem 1.5rem' : '3rem 3.5rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                border: `2px solid ${palette.colors.borderColor}`
              }}
            >
              <p
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: palette.colors.textPrimary,
                  margin: '0 0 1.5rem 0'
                }}
              >
                Saara Lehtonen on näyttelijä, laulaja ja ääninäyttelijä. Helsingissä asuva freelancer on yli kymmenen vuoden ajan työskennellyt näyttelijänä ja musikaaliartistina ammattiteattereissa ympäri Suomen.
              </p>

              <p
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: palette.colors.textPrimary,
                  margin: '0 0 1.5rem 0'
                }}
              >
                Tärkeimmiksi rooleikseen Saara mainitsee Époninen Les Misérables - musikaalissa (Tampereen Teatteri 2013), Georgie Bukatinskyn Housut Pois - musikaalissa (Samppalinnan kesäteatteri 2012) sekä Lindan Veriveljissä (Tampereen Teatteri 2012).
              </p>

              <p
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: palette.colors.textPrimary,
                  margin: '0 0 1.5rem 0'
                }}
              >
                Teatteritöiden lisäksi Saara on dubannut lasten sarjoja ja elokuvia vuodesta 2004 alkaen. Saara on antanut äänen muiden muassa My Little Ponyn Pinkie Pielle, Seikkailija Doralle, Ryhmä Haun Haltille sekä Monster High'n Toralielle.
              </p>

              <p
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: palette.colors.textPrimary,
                  margin: 0
                }}
              >
                Saara kuuluu myös lauluryhmä Polte Ensembleen. Polte Ensemble perustettiin vuonna 2015 ja siihen kuuluvat Saaran lisäksi Hanna Kaila, Laura Virtala sekä Jukka Nylund. Kaikki yhtyeen jäsenet ovat tehneet jo pitkään uraa musikaaliartisteina.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
